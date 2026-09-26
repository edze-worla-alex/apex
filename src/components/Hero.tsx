import { useState } from "react";
import { NAV, PHONE, PHONE_HREF } from "../lib/content";
import { useScrolled } from "../lib/hooks";
import {
  ApexMark,
  ChevronDown,
  Close,
  Phone,
  Star,
  Wrench,
  CalendarIcon,
} from "./icons";
import { Display, Reveal } from "./Display";

export function PromoBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <aside className="promo">
      <span>Purchase this theme on shadcnblocks.com</span>
      <a className="btn btn--dark" href="https://shadcnblocks.com">
        Get Template
      </a>
      <button
        className="promo__close"
        onClick={() => setOpen(false)}
        aria-label="Close banner"
      >
        <Close />
      </button>
    </aside>
  );
}

export function Header() {
  const stuck = useScrolled(60);

  return (
    <header className={`header ${stuck ? "is-stuck" : ""}`}>
      <div className="header__inner">
        <a className="brand" href="#top">
          <ApexMark style={{ color: "var(--accent-bright)" }} />
          Apex
        </a>

        <nav className="nav" aria-label="Main">
          {NAV.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
              {item.label === "Services" && <ChevronDown />}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a className="header__phone" href={PHONE_HREF}>
            <Phone />
            {PHONE}
          </a>
          <a className="btn btn--light" href="#schedule">
            Free Estimate
          </a>
        </div>
      </div>
    </header>
  );
}

const SERVICE_OPTIONS = [
  "Roofing",
  "Gutters",
  "Siding",
  "Windows",
  "Masonry",
];
const TIMELINE_OPTIONS = [
  "This week",
  "Next 2 weeks",
  "This month",
  "Just planning",
];

export function Hero() {
  return (
    <div className="frame" id="top">
      <section className="hero">
        <div className="hero__media">
          <video
            src="/videos/hero.mp4"
            poster="/images/work/crew-shingles.webp"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="hero__scrim" />

        <div className="container">
          <Display
            as="h1"
            lines={[
              { text: "Apex Roofing." },
              { text: "Done in Days." },
              { text: "Built for Decades." },
            ]}
          />

          <Reveal className="hero__serving" delay={320}>
            <span className="hero__rule" />
            <p
              className="eyebrow"
              style={{ color: "rgba(247,245,239,0.85)" }}
            >
              Serving the Texas Hill Country
            </p>
          </Reveal>

          <div className="hero__grid">
            <Reveal delay={80}>
              <p className="hero__copy">
                Repairs and replacements backed by a 25-year warranty. Fast,
                careful work from a local crew. Get a free estimate anywhere in
                Texas Hill Country.
              </p>
            </Reveal>

            <Reveal className="hero__rating" delay={160}>
              <span className="hero__rating-row">
                <Star style={{ color: "var(--accent-bright)" }} />
                4.9
              </span>
              <small>from 1,200+ reviews</small>
            </Reveal>

            <Reveal className="estimate" delay={240} scale>
              <h2>Get Your Free Roof Estimate</h2>

              <div className="estimate__fields">
                <label className="field">
                  <span className="field__label">Service</span>
                  <span className="select">
                    <span className="select__lead">
                      <Wrench />
                    </span>
                    <select defaultValue="Roofing">
                      {SERVICE_OPTIONS.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                    <span className="select__chevron">
                      <ChevronDown />
                    </span>
                  </span>
                </label>

                <label className="field">
                  <span className="field__label">Timeline</span>
                  <span className="select">
                    <span className="select__lead">
                      <CalendarIcon />
                    </span>
                    <select defaultValue="This week">
                      {TIMELINE_OPTIONS.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                    <span className="select__chevron">
                      <ChevronDown />
                    </span>
                  </span>
                </label>
              </div>

              <dl className="estimate__stats">
                <div>
                  <dt>Response</dt>
                  <dd>Within 24 hrs</dd>
                </div>
                <div>
                  <dt>Warranty</dt>
                  <dd>Up to 25 yrs</dd>
                </div>
              </dl>

              <div className="estimate__foot">
                <p>
                  <b>Free</b>
                  <span>estimate</span>
                </p>
                <p style={{ fontSize: 14, opacity: 0.75 }}>
                  Licensed &amp; insured
                </p>
              </div>

              <a
                className="btn btn--light btn--lg"
                href="#schedule"
                style={{ width: "100%" }}
              >
                Get My Free Estimate
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
