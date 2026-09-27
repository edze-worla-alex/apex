import { useEffect, useState } from "react";
import { COMPARISON, FAQS, TESTIMONIALS } from "../lib/content";
import { Display, Reveal } from "./Display";
import {
  ApexMark,
  ArrowUpRight,
  Check,
  Cross,
  Minus,
  Plus,
} from "./icons";

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % TESTIMONIALS.length),
      7000,
    );
    return () => window.clearInterval(id);
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <section className="tst container">
      <Reveal className="tst__avatars">
        {TESTIMONIALS.map((item, i) => (
          <button
            key={item.name}
            aria-pressed={i === active}
            aria-label={`Read ${item.name}'s review`}
            onClick={() => setActive(i)}
          >
            <img src={item.avatar} alt={`Portrait of ${item.name}`} />
          </button>
        ))}
      </Reveal>

      <Reveal className="tst__quote" delay={80}>
        <figure style={{ margin: 0 }} key={t.name}>
          <blockquote>“{t.quote}”</blockquote>
          <figcaption className="tst__who">
            {t.name}
            <p>{t.meta}</p>
          </figcaption>
        </figure>
      </Reveal>

      <Reveal scale delay={140}>
        <a className="tst__card" href="#services">
          <img src={t.img} alt={t.imgAlt} />
          <ul className="tst__stats">
            {t.stats.map(([value, label]) => (
              <li key={label}>
                <b>{value}</b>
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <span className="tst__cta">
            See our services
            <ArrowUpRight />
          </span>
        </a>
      </Reveal>
    </section>
  );
}

export function WhyApex() {
  return (
    <div className="frame">
      <section className="panel panel--dark">
        <div className="container why">
          <Display lines={[{ text: "Why" }, { text: "Apex?" }]} />

          <Reveal className="why__table-wrap" delay={120}>
            <table>
              <thead>
                <tr>
                  <th />
                  {COMPARISON.columns.map((c, i) => (
                    <th key={c} className={i === 0 ? "col-apex" : undefined}>
                      {i === 0 ? (
                        <span className="cell">
                          <ApexMark size={16} />
                          {c}
                        </span>
                      ) : (
                        c
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {row.cells.map((cell, i) => (
                      <td
                        key={`${row.label}-${i}`}
                        className={i === 0 ? "col-apex" : undefined}
                      >
                        <span className="cell">
                          {cell.mark === "check" && <Check width={15} height={15} />}
                          {cell.mark === "cross" && (
                            <Cross
                              width={15}
                              height={15}
                              style={{ opacity: 0.5 }}
                            />
                          )}
                          {cell.value}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal className="why__note" delay={80}>
            <h3>
              And every roof is backed by a <em>25-year warranty</em>
            </h3>
            <p className="lead">
              With Apex you get a licensed local crew, quality materials, and a
              free same-day estimate — all backed in writing, with no surprise
              bills.
            </p>
            <a className="btn btn--accent" href="#schedule">
              <ApexMark size={16} style={{ color: "var(--primary)" }} />
              Get a free estimate
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq container" id="faq">
      <Display
        lines={[
          { text: "Before you book." },
          { text: "Here's what to know." },
        ]}
      />
      <Reveal delay={120}>
        <p className="lead" style={{ margin: "20px auto 0", textAlign: "center" }}>
          Everything you need to know before you get your free estimate anywhere
          in the Texas Hill Country.
        </p>
      </Reveal>

      <div className="faq__list">
        {FAQS.map((item, i) => (
          <Reveal
            key={item.q}
            delay={i * 50}
            className={`faq__item ${open === i ? "is-open" : ""}`}
          >
            <h3 style={{ margin: 0, fontWeight: 400 }}>
              <button
                className="faq__q"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                {item.q}
                {open === i ? <Minus /> : <Plus />}
              </button>
            </h3>
            <div className="faq__a">
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="faq__more">
          More questions? <a href="#schedule">See all answers and reviews</a>
        </p>
      </Reveal>
    </section>
  );
}
