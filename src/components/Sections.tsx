import { useRef } from "react";
import { SERVICES, SYSTEM_FEATURES } from "../lib/content";
import { Display, Reveal } from "./Display";
import { ApexMark, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "./icons";

export function RoofSystem() {
  return (
    <section className="section container">
      <div className="system">
        <div>
          <Display
            lines={[
              { text: "More than shingles." },
              { text: "It's a system." },
            ]}
          />
          <Reveal delay={120}>
            <p className="lead" style={{ marginTop: 24 }}>
              We build every roof as one engineered structure — framing and
              decking up through underlayment, flashing, and storm-rated
              shingles — so it holds strong for decades, not just a few years.
            </p>
          </Reveal>
          <Reveal delay={200} scale>
            <img
              className="system__cutaway"
              src="/images/roof-system/roof-cutaway.webp"
              alt="Cutaway of a roof system showing rafters, decking, underlayment, drip-edge flashing, and shingles"
            />
          </Reveal>
        </div>

        <ul className="system__list">
          {SYSTEM_FEATURES.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 110} className="system__item">
              <img src={f.img} alt={f.alt} />
              <div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServicesCarousel() {
  const track = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    track.current?.scrollBy({ left: dir * 328, behavior: "smooth" });
  };

  return (
    <section className="services" id="services">
      <div className="container services__head">
        <Display
          lines={[
            { text: "One local crew." },
            { text: "The whole exterior.", variant: "accent" },
          ]}
        />

        <Reveal className="services__meta" delay={140}>
          <div>
            <p>Licensed &amp; insured roofing</p>
            <p>across Texas Hill Country</p>
          </div>
          <div className="services__nav">
            <button
              className="icon-btn"
              aria-label="Previous slide"
              onClick={() => scrollBy(-1)}
            >
              <ChevronLeft />
            </button>
            <button
              className="icon-btn"
              aria-label="Next slide"
              onClick={() => scrollBy(1)}
            >
              <ChevronRight />
            </button>
          </div>
        </Reveal>
      </div>

      <div className="services__track" ref={track}>
        {SERVICES.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 80}
            scale
            className="service-card"
            as="div"
          >
            <img src={s.img} alt={s.alt} />
            <div className="service-card__body">
              <h3>
                {s.title}
                <ArrowUpRight />
              </h3>
              <p>{s.blurb}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const COL_A = [
  ["/images/work/shingle-repair.webp", "Targeted shingle repair on a damaged roof slope"],
  ["/images/work/new-roof-drone.webp", "Drone view of a completed architectural shingle roof"],
  ["/images/services/roofing.webp", "Full roof replacement underway on a two-story home"],
];
const COL_C = [
  ["/images/process/roof-inspection.webp", "Inspector documenting roof condition during a free inspection"],
  ["/images/work/roofer-detail.webp", "Roofer fastening shingles on a steep pitch"],
  ["/images/work/home-lights.webp", "Family home lit up in the evening under a new roof"],
];

export function RecentWork() {
  return (
    <section className="section container" id="work">
      <div className="work">
        <div>
          <Display
            lines={[
              { text: "Recent work." },
              { text: "Across the" },
              { text: "Hill Country." },
            ]}
          />
          <Reveal delay={140}>
            <p className="lead" style={{ marginTop: 24 }}>
              Every roof gets the same care: a clean tear-off, solid decking,
              and photos of the finished job for your records. See our work
              across Texas Hill Country.
            </p>
            <div className="work__actions">
              <a className="btn btn--dark" href="#schedule">
                <ApexMark size={16} style={{ color: "var(--accent-bright)" }} />
                Get a free estimate
              </a>
              <a className="btn btn--ghost" href="#gallery">
                View our work
                <ArrowRight />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="work__cols">
          <div className="work__col">
            {COL_A.map(([src, alt], i) => (
              <Reveal key={src} delay={i * 90} scale>
                <img src={src} alt={alt} />
              </Reveal>
            ))}
          </div>

          <div className="work__col">
            <Reveal as="figure" className="work__quote" scale delay={60}>
              <img
                src="/images/work/crew-shingles.webp"
                alt="Apex crew installing architectural shingles on a steep roof"
              />
              <div className="work__quote-body">
                <span className="chip-brand">
                  <ApexMark size={16} style={{ color: "var(--accent-bright)" }} />
                  Apex
                </span>
                <blockquote>
                  “They tarped the roof the same night the hail hit, and new
                  shingles were on ten days later.”
                </blockquote>
                <cite>Dana W. · Dripping Springs, TX</cite>
              </div>
            </Reveal>
            <Reveal delay={150} scale>
              <img
                src="/images/work/craftsman-night.webp"
                alt="Craftsman home at night with a fresh tile roof"
              />
            </Reveal>
            <Reveal delay={220} scale>
              <img
                src="/images/work/storm-tarping.webp"
                alt="Crew securing a tarp over a hail-damaged roof"
              />
            </Reveal>
          </div>

          <div className="work__col">
            {COL_C.map(([src, alt], i) => (
              <Reveal key={src} delay={i * 90 + 40} scale>
                <img src={src} alt={alt} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
