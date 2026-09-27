import { Display, Reveal } from "../components/Display";
import { ApexMark, Check, Phone, Star } from "../components/icons";
import { Link } from "../lib/router";
import { PHONE, PHONE_HREF } from "../lib/content";
import {
  ABOUT_REVIEWS,
  AWARD_POINTS,
  BADGES,
  GIVING,
  STANDARDS,
  TEAM,
  TIMELINE,
  VALUES,
} from "../lib/pages";
import { useState } from "react";

export default function About() {
  const [review, setReview] = useState(0);
  const r = ABOUT_REVIEWS[review];

  return (
    <>
      {/* hero image band */}
      <div className="frame">
        <Reveal className="page-hero" scale>
          <img
            src="/images/about/hero.webp"
            alt="Standing seam metal roof catching the last light over the Hill Country"
          />
        </Reveal>
      </div>

      {/* intro */}
      <section className="section container intro-split">
        <div>
          <Reveal>
            <span className="pill">About Apex</span>
          </Reveal>
          <Display
            lines={[
              { text: "Honest roofing." },
              { text: "Since 2009.", variant: "serif" },
            ]}
          />
        </div>
        <Reveal delay={120}>
          <p className="lead" style={{ fontSize: 18 }}>
            Apex started in 2009 with two ladders, one truck, and a simple
            promise: do the job right and put it in writing. Today our licensed
            crews look after roofs across Texas Hill Country — and we still
            answer the phone ourselves.
          </p>
          <Link className="btn btn--dark" to="/#schedule" style={{ marginTop: 28 }}>
            <ApexMark size={16} style={{ color: "var(--accent-bright)" }} />
            Get a free estimate
          </Link>
        </Reveal>
      </section>

      {/* stat line + badges */}
      <section className="band band--muted">
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <p className="statline">
              <b>17+</b> years · <b>1,200+</b> five-star reviews ·{" "}
              <b>3,500+</b> roofs · every job backed <b>in writing</b>
            </p>
          </Reveal>
          <ul className="badges">
            {BADGES.map((b, i) => (
              <Reveal as="li" key={b.name} delay={i * 70}>
                <img src={b.img} alt="" />
                <b>{b.name}</b>
                <span>{b.note}</span>
              </Reveal>
            ))}
          </ul>

          {/* values */}
          <div style={{ marginTop: 96 }}>
            <Reveal>
              <span className="pill">Our values</span>
            </Reveal>
            <Display
              lines={[
                { text: "Three promises." },
                { text: "We keep them.", variant: "serif" },
              ]}
            />
            <Reveal delay={120}>
              <p className="lead" style={{ margin: "20px auto 0", textAlign: "center" }}>
                Three things we never cut corners on, from the first visit to
                the final cleanup.
              </p>
            </Reveal>

            <ul className="cards-3">
              {VALUES.map((v, i) => (
                <Reveal as="li" key={v.title} delay={i * 90} scale>
                  <div className="cards-3__media">
                    <img src={v.img} alt={v.alt} />
                    <span className="tag">{v.tag}</span>
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* story timeline */}
      <section className="section container">
        <Reveal>
          <span className="pill">Our story</span>
        </Reveal>
        <Display
          lines={[{ text: "Local from" }, { text: "day one", variant: "serif" }]}
        />
        <Reveal delay={120}>
          <p className="lead" style={{ marginTop: 22 }}>
            Apex started with one truck, a borrowed trailer, and one rule we've
            never broken: if our name goes on your roof, we stand behind it —
            long after the crew heads home.
          </p>
        </Reveal>

        <ol className="timeline">
          {TIMELINE.map((t, i) => (
            <Reveal as="li" key={t.year} delay={i * 90} scale>
              <img src={t.img} alt={t.alt} />
              <span className="timeline__rule">
                <i />
              </span>
              <h3>{t.year}</h3>
              <b>{t.title}</b>
              <p>{t.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* founder quote */}
      <div className="frame">
        <Reveal className="founder" scale>
          <img
            src="/images/about/team/sam-calloway.webp"
            alt="Sam Calloway, founder of Apex, holding a hard hat"
          />
          <div className="founder__body">
            <span className="pill pill--dark">From the founder</span>
            <Display
              size="sm"
              lines={[
                { text: "A different way to build" },
                { text: "a roofing company", variant: "serif" },
              ]}
            />
            <Reveal delay={120}>
              <blockquote>
                <p>
                  “I started Apex after one bad hail season too many — watching
                  out-of-town crews patch roofs, cash the check, and leave
                  before the first leak showed up.
                </p>
                <p>
                  Every roof we build comes with the same promise: the person
                  who shakes your hand on day one walks the finished roof with
                  you at the end. And the warranty is in writing, so you can
                  hold us to it.”
                </p>
              </blockquote>
              <footer>
                Sam Calloway
                <span>Founder &amp; Master Roofer</span>
              </footer>
            </Reveal>
          </div>
        </Reveal>
      </div>

      {/* team */}
      <section className="section container">
        <Reveal>
          <span className="pill">Our people</span>
        </Reveal>
        <Display
          lines={[
            { text: "Our crew." },
            { text: "Your neighbors.", variant: "serif" },
          ]}
        />
        <Reveal delay={120}>
          <p className="lead" style={{ marginTop: 22 }}>
            No subcontractors. The people who quote your roof, build it, and
            answer the phone afterwards all work for Apex.
          </p>
        </Reveal>

        <ul className="team">
          {TEAM.map((m, i) => (
            <Reveal as="li" key={m.name} delay={i * 60} scale>
              <img src={m.img} alt={`Portrait of ${m.name}`} />
              <b>{m.name}</b>
              <span>{m.role}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* award band */}
      <div className="frame">
        <section className="panel panel--dark award">
          <div className="container">
            <Reveal>
              <span className="pill pill--dark">
                Best of the Texas Hill Country
              </span>
            </Reveal>
            <Display
              lines={[
                { text: "Award-winning roofs," },
                { text: "built on honest work.", variant: "serif" },
              ]}
            />
            <Reveal delay={120} className="award__actions">
              <Link className="btn btn--accent" to="/#schedule">
                Get a free estimate
              </Link>
              <a className="btn btn--ghost btn--onDark" href={PHONE_HREF}>
                <Phone />
                {PHONE}
              </a>
            </Reveal>

            <ul className="award__points">
              {AWARD_POINTS.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 80}>
                  <Check style={{ color: "var(--accent-bright)" }} />
                  <div>
                    <b>{p.title}</b>
                    <p>{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* standards */}
      <section className="section container standards">
        <div>
          <Reveal>
            <span className="pill">How we work</span>
          </Reveal>
          <Display
            lines={[
              { text: "High standards." },
              { text: "Every job.", variant: "serif" },
            ]}
          />
          <Reveal delay={120}>
            <p className="lead" style={{ marginTop: 22 }}>
              Four rules our crews never break.
            </p>
            <Link className="btn btn--dark" to="/#schedule" style={{ marginTop: 24 }}>
              Get a free estimate
            </Link>
          </Reveal>
        </div>
        <ul>
          {STANDARDS.map((s, i) => (
            <Reveal as="li" key={s.tag} delay={i * 80}>
              <span className="eyebrow">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* reviews */}
      <section className="band band--muted">
        <div className="container" style={{ textAlign: "center" }}>
          <Display
            lines={[
              { text: "Five-star work." },
              { text: "In their words.", variant: "serif" },
            ]}
          />
          <Reveal className="quote-switch" delay={100}>
            <blockquote key={r.name}>“{r.quote}”</blockquote>
            <p className="quote-switch__who">
              {r.name}
              <span>{r.meta}</span>
            </p>
            <div className="quote-switch__dots">
              {ABOUT_REVIEWS.map((item, i) => (
                <button
                  key={item.name}
                  aria-pressed={i === review}
                  aria-label={`Read ${item.name}'s review`}
                  onClick={() => setReview(i)}
                >
                  {item.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* giving back */}
      <section className="section container giving">
        <div>
          <Reveal>
            <span className="pill">Giving back</span>
          </Reveal>
          <Display
            lines={[
              { text: "Good for the" },
              { text: "Hill Country", variant: "serif" },
            ]}
          />
          <Reveal delay={120}>
            <p className="lead" style={{ marginTop: 22 }}>
              A roof protects one home. How we build it should protect Texas
              Hill Country too.
            </p>
            <p className="giving__rating">
              <Star size={18} style={{ color: "var(--accent)" }} />
              <b>4.9</b> from 1,200+ reviews
            </p>
          </Reveal>
        </div>
        <ul>
          {GIVING.map((g, i) => (
            <Reveal as="li" key={g.title} delay={i * 70}>
              <b>{g.title}</b>
              <p>{g.body}</p>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
