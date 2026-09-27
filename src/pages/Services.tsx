import { Display, Reveal } from "../components/Display";
import { Compare } from "../components/Compare";
import { Breadcrumb } from "../components/Layout";
import { ApexMark, ArrowUpRight, Check, Phone, Star } from "../components/icons";
import { Link } from "../lib/router";
import { PHONE, PHONE_HREF } from "../lib/content";
import {
  MANUFACTURERS,
  SERVICES,
  SERVICE_CREW,
  getService,
} from "../lib/services";

/* ------------------------------------------------------------- /services */

export default function Services() {
  return (
    <>
      <section className="section container" style={{ paddingBottom: 40 }}>
        <Reveal>
          <span className="pill">Our services</span>
        </Reveal>
        <Display
          as="h1"
          lines={[
            { text: "The whole exterior." },
            { text: "One local crew.", variant: "serif" },
          ]}
        />
        <Reveal delay={120}>
          <p className="lead" style={{ marginTop: 22, fontSize: 18 }}>
            Roofing, gutters, siding, windows, and masonry. One local licensed
            crew for the whole outside of your home, and every job backed by a
            written warranty.
          </p>
          <div className="work__actions">
            <Link className="btn btn--dark" to="/#schedule">
              <ApexMark size={16} style={{ color: "var(--accent-bright)" }} />
              Get a free estimate
            </Link>
            <a className="btn btn--ghost" href={PHONE_HREF}>
              <Phone />
              {PHONE}
            </a>
          </div>
        </Reveal>
      </section>

      {SERVICES.map((s, i) => (
        <section
          key={s.slug}
          className={`svc-row ${i % 2 ? "svc-row--alt" : ""}`}
        >
          <div className="container svc-row__inner">
            <div>
              <Reveal>
                <span className="eyebrow">{s.name}</span>
              </Reveal>
              <Display size="sm" lines={[{ text: s.tagline }]} />
              <Reveal delay={100}>
                <p className="lead" style={{ marginTop: 18 }}>
                  {s.intro}
                </p>
                <ul className="ticks">
                  {s.bullets.map((b) => (
                    <li key={b}>
                      <Check style={{ color: "var(--accent)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link className="btn btn--dark" to={`/services/${s.slug}`}>
                  See {s.name.toLowerCase()}
                  <ArrowUpRight />
                </Link>
              </Reveal>
            </div>

            <Reveal className="svc-row__pairs" delay={120} scale>
              {s.pairs.slice(0, 4).map((p) => (
                <Compare
                  key={p.before}
                  before={p.before}
                  after={p.after}
                  labels={["before", "after"]}
                  variant="card"
                  start={52}
                  className="svc-row__pair"
                />
              ))}
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}

/* ------------------------------------------------ /services/:slug detail */

export function ServiceDetail({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) return <NotFoundBody />;

  const others = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <div className="container" style={{ paddingTop: 32 }}>
        <Breadcrumb
          trail={[
            { label: "Home", to: "/" },
            { label: "Services", to: "/services" },
            { label: service.name },
          ]}
        />
      </div>

      {/* hero */}
      <section className="container svc-hero">
        <div>
          <Reveal>
            <span className="eyebrow">{service.name}</span>
          </Reveal>
          <Display as="h1" lines={[{ text: service.tagline }]} />
          <Reveal delay={100}>
            <p className="lead" style={{ marginTop: 22, fontSize: 18 }}>
              {service.intro}
            </p>
            <Link className="btn btn--dark btn--lg" to="/#schedule" style={{ marginTop: 28 }}>
              <ApexMark size={16} style={{ color: "var(--accent-bright)" }} />
              Get a free estimate
            </Link>
          </Reveal>
        </div>

        <Reveal className="svc-hero__card" delay={140} scale>
          <img src={service.hero} alt={service.heroAlt} />
          <div className="svc-hero__panel">
            <p>
              An honest look and a fixed written quote within 24 hours —
              whether or not you hire us.
            </p>
            <Link className="btn btn--accent" to="/#schedule">
              Get My Free Estimate
            </Link>
            <a className="svc-hero__phone" href={PHONE_HREF}>
              <Phone />
              {PHONE}
            </a>
            <p className="svc-hero__rating">
              <Star size={16} style={{ color: "var(--accent-bright)" }} />
              <b>4.9</b> from 1,200+ homeowners
            </p>
          </div>
        </Reveal>
      </section>

      {/* what we do */}
      <div className="frame">
        <section className="panel panel--muted section">
          <div className="container">
            <Display
              lines={[
                { text: "What we do." },
                { text: "All of it, in-house.", variant: "serif" },
              ]}
            />
            <Reveal delay={120}>
              <p className="lead" style={{ marginTop: 20 }}>
                One licensed local crew handles every job — no subcontractors,
                ever.
              </p>
            </Reveal>

            <ul className="svc-items">
              {service.items.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 80} scale>
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* how we build it */}
      <section className="section container svc-build">
        <div>
          <Display
            lines={[
              { text: `${service.name}.` },
              { text: "How we build it.", variant: "serif" },
            ]}
          />
          <Reveal delay={120} className="work__actions">
            <Link className="btn btn--dark" to="/#schedule">
              Get a free estimate
            </Link>
            <a className="btn btn--ghost" href={PHONE_HREF}>
              <Phone />
              {PHONE}
            </a>
          </Reveal>
        </div>

        <div className="svc-build__grid">
          <Reveal className="svc-build__card">
            <span className="eyebrow">The job</span>
            <p>
              One crew, one point of contact, and you approve every dollar
              before it's spent.
            </p>
          </Reveal>
          <Reveal className="svc-build__card" delay={80}>
            <span className="eyebrow">Repair or replace, honestly</span>
            <p>
              Two out of three roofs we're called to look at get a repair, not
              a replacement. We'd rather earn the replacement later than sell
              it early.
            </p>
          </Reveal>
          <Reveal className="svc-build__card svc-build__card--list" delay={140}>
            <span className="eyebrow">{service.blurb}</span>
            <ul className="ticks">
              {service.bullets.map((b) => (
                <li key={b}>
                  <Check style={{ color: "var(--accent)" }} />
                  {b}
                </li>
              ))}
            </ul>
            <Link className="btn btn--dark" to="/#schedule">
              Book a free inspection
            </Link>
          </Reveal>
          <Reveal className="svc-build__card svc-build__card--stat" delay={200}>
            <b>4.9</b>
            <span>Homeowner rating · 1,200+ reviews</span>
            <p>No subcontractors, ever. Every job backed by a written warranty.</p>
          </Reveal>
        </div>
      </section>

      {/* the work */}
      <section className="section container">
        <div className="ba__head">
          <Display
            lines={[
              { text: "See the work" },
              { text: "for yourself.", variant: "serif" },
            ]}
          />
          <Reveal delay={120}>
            <p className="lead" style={{ textAlign: "right", marginLeft: "auto" }}>
              Real {service.name.toLowerCase()} jobs across the Texas Hill
              Country. Slide across and look close.
            </p>
          </Reveal>
        </div>
        <div className="svc-gallery">
          {service.pairs.map((p, i) => (
            <Reveal key={p.before} delay={i * 80} scale>
              <Compare
                before={p.before}
                after={p.after}
                labels={["before", "after"]}
                start={50}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* warranty + crew */}
      <div className="frame">
        <section className="panel panel--dark section">
          <div className="container svc-warranty">
            <div>
              <Reveal>
                <span className="pill pill--dark">Warranty</span>
              </Reveal>
              <Display
                lines={[
                  { text: "The crew behind" },
                  { text: "the warranty.", variant: "serif" },
                ]}
              />
              <Reveal delay={120}>
                <p className="lead">
                  25 years on our workmanship, in writing, and it transfers to
                  the new owner if you sell your home. The manufacturer covers
                  the materials on top of that. If a leak is our fault, we fix
                  it for free. No fine print.
                </p>
                <Link className="btn btn--accent" to="/#schedule" style={{ marginTop: 26 }}>
                  Get a free estimate
                </Link>
              </Reveal>
            </div>

            <ul className="svc-crew">
              {SERVICE_CREW.map((c, i) => (
                <Reveal as="li" key={c.name} delay={i * 70} scale>
                  <img src={c.img} alt={`Portrait of ${c.name}`} />
                  <b>{c.name}</b>
                  <span>{c.role}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="container">
            <Reveal className="makers">
              <p className="eyebrow">
                Certified by the manufacturers we install
              </p>
              <div className="makers__track">
                {[...MANUFACTURERS, ...MANUFACTURERS].map((m, i) => (
                  <span key={`${m}-${i}`}>{m}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      {/* other services */}
      <section className="section container svc-more">
        <div className="services__head">
          <Display
            lines={[{ text: "More ways" }, { text: "we can help" }]}
          />
          <Reveal delay={100}>
            <Link className="btn btn--ghost" to="/services">
              All services
              <ArrowUpRight />
            </Link>
          </Reveal>
        </div>
        <ul className="svc-more__grid">
          {others.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 70} scale>
              <Link to={`/services/${s.slug}`}>
                <img src={s.hero} alt={s.heroAlt} />
                <div>
                  <h3>
                    {s.name}
                    <ArrowUpRight />
                  </h3>
                  <p>{s.blurb}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}

export function NotFoundBody() {
  return (
    <section className="section container" style={{ textAlign: "center" }}>
      <Display
        as="h1"
        lines={[{ text: "Page not found." }, { text: "Let's get you back.", variant: "serif" }]}
      />
      <Reveal delay={120}>
        <p className="lead" style={{ margin: "20px auto 28px", textAlign: "center" }}>
          That page doesn't exist — but the estimate is still free.
        </p>
        <Link className="btn btn--dark btn--lg" to="/">
          Back to home
        </Link>
      </Reveal>
    </section>
  );
}
