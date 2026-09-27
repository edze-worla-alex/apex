import { useMemo, useState } from "react";
import { EMAIL, FAN_PHOTOS, PHONE, PHONE_HREF, TOWNS, NAV } from "../lib/content";
import { Display, Reveal } from "./Display";
import { Link } from "../lib/router";
import {
  ApexMark,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Facebook,
  Globe,
  Instagram,
  Pin,
} from "./icons";

const DOW = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const TIMES_24 = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00",
];

function to12h(t: string) {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hh = h % 12 === 0 ? 12 : h % 12;
  return `${hh}:${String(m).padStart(2, "0")}${suffix}`;
}

export function Schedule() {
  const today = useMemo(() => new Date(), []);
  const [monthOffset, setMonthOffset] = useState(0);
  const [selected, setSelected] = useState(today.getDate());
  const [clock24, setClock24] = useState(false);

  const view = new Date(
    today.getFullYear(),
    today.getMonth() + monthOffset,
    1,
  );
  const daysInMonth = new Date(
    view.getFullYear(),
    view.getMonth() + 1,
    0,
  ).getDate();
  const leading = view.getDay();
  const isCurrentMonth = monthOffset === 0;

  const selectedDate = new Date(view.getFullYear(), view.getMonth(), selected);
  const shortDay = selectedDate.toLocaleDateString("en-US", {
    weekday: "short",
  });
  const longDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="sched container" id="schedule">
      <Display
        lines={[{ text: "Pick a day." }, { text: "We'll be there." }]}
      />
      <Reveal delay={120}>
        <p className="lead" style={{ margin: "20px auto 0", textAlign: "center" }}>
          An honest look at your roof and a written estimate — whether or not you
          hire us. Active leak? Storm damage?{" "}
          <a
            href={PHONE_HREF}
            style={{ textDecoration: "underline", textUnderlineOffset: 3 }}
          >
            Call {PHONE}
          </a>
          .
        </p>
      </Reveal>

      <Reveal className="sched__card" delay={80} scale>
        <div className="sched__col">
          <span className="sched__badge">
            <span>
              <ApexMark size={16} style={{ color: "var(--accent)" }} />
            </span>
            Apex
          </span>
          <h3>Free roof estimate</h3>
          <ul className="sched__facts">
            <li>
              <Clock /> 30 min
            </li>
            <li>
              <Pin /> On-site visit
            </li>
            <li>
              <Globe /> Texas Hill Country
            </li>
          </ul>
          <div className="sched__loc">
            What's your location?
            <span className="select">
              <span className="select__lead" style={{ opacity: 0.6 }}>
                <Pin />
              </span>
              <select defaultValue="">
                <option value="" disabled>
                  Choose your town
                </option>
                {TOWNS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <span className="select__chevron" style={{ opacity: 0.6 }}>
                <ChevronDown />
              </span>
            </span>
          </div>
        </div>

        <div className="sched__col">
          <div className="cal__head">
            <p>
              {view.toLocaleDateString("en-US", { month: "long" })}{" "}
              <span>{view.getFullYear()}</span>
            </p>
            <div className="cal__nav">
              <button
                className="icon-btn"
                aria-label="Previous month"
                disabled={monthOffset === 0}
                onClick={() => setMonthOffset((m) => m - 1)}
              >
                <ChevronLeft />
              </button>
              <button
                className="icon-btn"
                aria-label="Next month"
                onClick={() => {
                  setMonthOffset((m) => m + 1);
                  setSelected(1);
                }}
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="cal__grid">
            {DOW.map((d) => (
              <span key={d} className="cal__dow">
                {d}
              </span>
            ))}
            {Array.from({ length: leading }).map((_, i) => (
              <span key={`pad-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const past = isCurrentMonth && day < today.getDate();
              const isToday = isCurrentMonth && day === today.getDate();
              const isSel = day === selected;
              const open = !past && (isToday || day % 3 !== 1);
              return (
                <button
                  key={day}
                  className={`cal__day ${open ? "cal__day--open" : ""} ${
                    isSel ? "cal__day--sel" : ""
                  }`}
                  disabled={past || !open}
                  aria-pressed={isSel}
                  onClick={() => setSelected(day)}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        <div className="sched__col">
          <div className="slots__head">
            <p>
              {shortDay} <span>{selected}</span>
            </p>
            <div className="toggle">
              <button
                aria-pressed={!clock24}
                onClick={() => setClock24(false)}
              >
                12h
              </button>
              <button aria-pressed={clock24} onClick={() => setClock24(true)}>
                24h
              </button>
            </div>
          </div>

          <ul className="slots">
            {TIMES_24.map((t) => {
              const label = clock24 ? t : to12h(t);
              return (
                <li key={t}>
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                      "Free roof estimate request",
                    )}&body=${encodeURIComponent(
                      `I'd like to book a free roof estimate on ${longDate} at ${label}.`,
                    )}`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>

      <Reveal>
        <p className="sched__fine">
          <b>$0</b> down payment · <b>0%</b> interest · insurance{" "}
          <b>billed direct</b> · <b>3</b> ways to pay
        </p>
      </Reveal>
    </section>
  );
}

const FAN_TRANSFORMS = [
  { r: "-13deg", y: "22px" },
  { r: "-6deg", y: "8px" },
  { r: "0deg", y: "0px" },
  { r: "6deg", y: "8px" },
  { r: "13deg", y: "22px" },
];

export function Closing() {
  return (
    <section className="closing">
      <div className="container">
        <Reveal className="fan" scale>
          {FAN_PHOTOS.map((p, i) => (
            <figure
              key={p.src}
              style={{
                ["--r" as string]: FAN_TRANSFORMS[i].r,
                ["--y" as string]: FAN_TRANSFORMS[i].y,
                zIndex: i === 2 ? 3 : 1,
              }}
            >
              <img src={p.src} alt={p.alt} />
            </figure>
          ))}
        </Reveal>

        <Display
          lines={[
            { text: "Done in days." },
            { text: "Built for decades.", variant: "serif" },
          ]}
          size="sm"
          className="_center"
        />

        <Reveal delay={120}>
          <p className="lead">
            A licensed local crew, honest answers, and a 25-year warranty in
            writing — anywhere in Texas Hill Country.
          </p>
          <Link className="btn btn--dark btn--lg" to="/#schedule">
            <ApexMark size={16} style={{ color: "var(--accent-bright)" }} />
            Get a free estimate
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function Strip() {
  const item = (
    <span>
      <ApexMark size={30} />
      Get a free estimate
    </span>
  );

  return (
    <Link className="strip" to="/#schedule" aria-label="Get a free estimate">
      <div className="strip__track">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} style={{ display: "inline-flex", gap: 40 }}>
            {item}
          </span>
        ))}
      </div>
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link className="brand" to="/">
            <ApexMark style={{ color: "var(--accent-bright)" }} />
            Apex
          </Link>
          <p className="footer__tag">
            Done in days.
            <em>Built for decades.</em>
          </p>
          <ul className="footer__social">
            <li>
              <a href="https://instagram.com" aria-label="Instagram">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://facebook.com" aria-label="Facebook">
                <Facebook />
              </a>
            </li>
          </ul>
          <div className="footer__legal">
            <ul style={{ display: "flex", gap: 16 }}>
              <li>
                <Link to="/legal/privacy-policy">Privacy policy</Link>
              </li>
              <li>
                <Link to="/legal/terms-of-service">Terms of service</Link>
              </li>
            </ul>
            <p>© Apex · Licensed &amp; insured · Serving Texas Hill Country</p>
          </div>
        </div>

        <div className="footer__col">
          <p>Menu</p>
          <ul>
            {NAV.map((n) => (
              <li key={n.label}>
                <Link to={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <p>Services</p>
          <ul>
            {["Roofing", "Gutters", "Siding", "Windows", "Masonry"].map((s) => (
              <li key={s}>
                <Link to={`/services/${s.toLowerCase()}`}>{s}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="footer__word" aria-hidden>
        Apex
      </p>
    </footer>
  );
}
