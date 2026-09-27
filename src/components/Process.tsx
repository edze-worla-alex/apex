import { BA_PAIRS, PROCESS } from "../lib/content";
import { useScrollProgress } from "../lib/hooks";
import { Compare } from "./Compare";
import { Display, Reveal } from "./Display";

export function Process() {
  const { ref, progress } = useScrollProgress<HTMLOListElement>();
  const activeCount = Math.round(progress * PROCESS.length);

  return (
    <div className="frame">
      <section className="panel panel--dark">
        <div className="container process">
          <div className="process__intro">
            <Reveal>
              <p className="eyebrow" style={{ color: "rgba(247,245,239,0.6)" }}>
                Our process
              </p>
            </Reveal>
            <Display
              className="_"
              lines={[
                { text: "Five steps." },
                { text: "Start to finish.", variant: "serif" },
              ]}
            />
            <Reveal delay={140}>
              <p className="lead">
                We handle everything from the first visit to the final cleanup.
                You always know what happens next and what it costs.
              </p>
              <a
                className="btn btn--accent"
                href="#schedule"
                style={{ marginTop: 28 }}
              >
                Get a free estimate
              </a>
            </Reveal>
          </div>

          <ol className="process__steps" ref={ref}>
            <span
              className="process__progress"
              style={{ height: `${Math.min(100, progress * 108)}%` }}
            />
            {PROCESS.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 60}
                className={`step ${i < activeCount ? "is-active" : ""}`}
              >
                <span className="step__dot" />
                <img src={step.img} alt={step.alt} />
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section className="section container" id="gallery">
      <div className="ba__head">
        <Display
          lines={[
            { text: "Before we showed up." },
            { text: "After we left.", variant: "serif" },
          ]}
        />
        <Reveal delay={140}>
          <p className="lead" style={{ textAlign: "right", marginLeft: "auto" }}>
            Moss, lifted shingles, and slow leaks — gone. Slide across to see
            what two days with our crew changes.
          </p>
        </Reveal>
      </div>

      <Reveal scale delay={80}>
        <Compare
          before="/images/home/before-after/before.webp"
          after="/images/home/before-after/after.webp"
          labels={["Before", "After"]}
        />
      </Reveal>
    </section>
  );
}

/** Two auto-scrolling rows of small before/after cards. */
export function CompareMarquee() {
  const row = [...BA_PAIRS, ...BA_PAIRS];
  const rowB = [...BA_PAIRS.slice().reverse(), ...BA_PAIRS.slice().reverse()];

  return (
    <section className="ba-rows" aria-label="More before and after jobs">
      <div className="ba-row">
        {row.map(([b, a], i) => (
          <Compare
            key={`a${i}`}
            before={b}
            after={a}
            variant="card"
            labels={["before", "after"]}
            start={48}
          />
        ))}
      </div>
      <div className="ba-row ba-row--rev">
        {rowB.map(([b, a], i) => (
          <Compare
            key={`b${i}`}
            before={b}
            after={a}
            variant="card"
            labels={["before", "after"]}
            start={55}
          />
        ))}
      </div>
    </section>
  );
}
