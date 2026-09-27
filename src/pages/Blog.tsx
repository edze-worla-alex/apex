import { useState } from "react";
import { Display, Reveal } from "../components/Display";
import { Breadcrumb } from "../components/Layout";
import { ApexMark, ArrowUpRight, Minus, Phone, Plus, Star } from "../components/icons";
import { Link } from "../lib/router";
import { PHONE, PHONE_HREF } from "../lib/content";
import { NotFoundBody } from "./Services";
import {
  FAQ_GROUPS,
  GLOSSARY,
  GOOGLE_REVIEWS,
  POSTS,
  getLegal,
} from "../lib/pages";

/* ----------------------------------------------------------------- /blog */

export default function Blog() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <section className="section container" style={{ paddingBottom: 48 }}>
        <Reveal>
          <span className="pill">Blog</span>
        </Reveal>
        <Display
          as="h1"
          lines={[
            { text: "Roofing advice" },
            { text: "you can actually use.", variant: "serif" },
          ]}
        />
        <Reveal delay={120}>
          <p className="lead" style={{ marginTop: 22, fontSize: 18 }}>
            Costs, storm damage, insurance claims, and how roofs actually work
            — written by the crew that builds them.
          </p>
        </Reveal>
      </section>

      <section className="container" style={{ paddingBottom: 96 }}>
        <Reveal className="post post--lead" scale>
          <img src={featured.img} alt="" />
          <div>
            <p className="post__meta">
              <span className="tag tag--light">{featured.category}</span>
              {featured.date} · {featured.read}
            </p>
            <h2>{featured.title}</h2>
            <p className="lead">{featured.excerpt}</p>
            <div className="post__foot">
              <Author post={featured} />
              <span className="post__cta">
                Read the article
                <ArrowUpRight />
              </span>
            </div>
          </div>
        </Reveal>

        <ul className="posts">
          {rest.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 70} scale className="post">
              <img src={p.img} alt="" />
              <div>
                <p className="post__meta">
                  <span className="tag tag--light">{p.category}</span>
                  {p.date} · {p.read}
                </p>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <Author post={p} />
              </div>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}

function Author({ post }: { post: (typeof POSTS)[number] }) {
  return (
    <span className="author">
      <img src={post.avatar} alt="" />
      <span>
        <b>{post.author}</b>
        {post.role}
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ /faq */

export function FaqPage() {
  const [group, setGroup] = useState(FAQ_GROUPS[0].id);
  const [open, setOpen] = useState<string>(FAQ_GROUPS[0].items[0].q);
  const active = FAQ_GROUPS.find((g) => g.id === group)!;

  return (
    <>
      <section className="section container" style={{ paddingBottom: 40 }}>
        <Reveal>
          <span className="pill">FAQ</span>
        </Reveal>
        <Display
          as="h1"
          lines={[
            { text: "Common questions" },
            { text: "from homeowners.", variant: "serif" },
          ]}
        />
        <Reveal delay={120}>
          <p className="lead" style={{ marginTop: 22, fontSize: 18 }}>
            Costs, timelines, insurance, warranties, and what to expect on
            install day — answered the way we'd explain it to a neighbor.
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

      <section className="container" style={{ paddingBottom: 96 }}>
        <Reveal className="tabs">
          {FAQ_GROUPS.map((g) => (
            <button
              key={g.id}
              aria-pressed={g.id === group}
              onClick={() => {
                setGroup(g.id);
                setOpen(g.items[0].q);
              }}
            >
              {g.label}
            </button>
          ))}
          <p className="tabs__rating">
            <Star size={16} style={{ color: "var(--accent)" }} />
            <b>4.9</b> from 1,200+ Google reviews
          </p>
        </Reveal>

        <div className="faq__list" style={{ maxWidth: 860 }}>
          {active.items.map((item, i) => (
            <Reveal
              key={item.q}
              delay={i * 50}
              className={`faq__item ${open === item.q ? "is-open" : ""}`}
            >
              <h3 style={{ margin: 0, fontWeight: 400 }}>
                <button
                  className="faq__q"
                  aria-expanded={open === item.q}
                  onClick={() => setOpen(open === item.q ? "" : item.q)}
                >
                  {item.q}
                  {open === item.q ? <Minus /> : <Plus />}
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
      </section>

      {/* google reviews */}
      <section className="band band--muted">
        <div className="container" style={{ textAlign: "center" }}>
          <Display
            lines={[
              { text: "Don't take our word." },
              { text: "Take theirs.", variant: "serif" },
            ]}
          />
          <Reveal delay={100}>
            <p className="lead" style={{ margin: "20px auto 0", textAlign: "center" }}>
              <Star size={16} style={{ color: "var(--accent)", verticalAlign: "-2px" }} />{" "}
              <b>4.9</b> from 1,200+ Google reviews
            </p>
          </Reveal>

          <ul className="reviews">
            {GOOGLE_REVIEWS.map((r, i) => (
              <Reveal as="li" key={r.name} delay={i * 60}>
                <div className="reviews__head">
                  <span className="avatar-initials">
                    {r.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <span>
                    <b>{r.name}</b>
                    {r.when}
                  </span>
                </div>
                <p>{r.text}</p>
                <span className="reviews__src">Posted on Google</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* glossary */}
      <section className="section container">
        <Display
          lines={[
            { text: "Commonly-used" },
            { text: "roofing terms.", variant: "serif" },
          ]}
        />
        <Reveal delay={120}>
          <p className="lead" style={{ marginTop: 22 }}>
            The words you'll see on your estimate, each explained in one simple
            sentence.
          </p>
        </Reveal>
        <dl className="glossary">
          {GLOSSARY.map(([term, def], i) => (
            <Reveal as="div" key={term} delay={i * 45}>
              <dt>{term}</dt>
              <dd>{def}</dd>
            </Reveal>
          ))}
        </dl>
      </section>
    </>
  );
}

/* ---------------------------------------------------------------- /legal */

export function LegalPage({ slug }: { slug: string }) {
  const doc = getLegal(slug);
  if (!doc) return <NotFoundBody />;

  return (
    <>
      <div className="container" style={{ paddingTop: 32 }}>
        <Breadcrumb
          trail={[{ label: "Home", to: "/" }, { label: "Legal" }, { label: doc.title }]}
        />
      </div>

      <section className="section container legal">
        <Reveal>
          <span className="pill">Legal</span>
        </Reveal>
        <Display as="h1" size="sm" lines={[{ text: doc.title }]} />
        <Reveal delay={100}>
          <p className="lead" style={{ marginTop: 20 }}>
            {doc.intro}
          </p>
          <p className="legal__updated">Last updated {doc.updated}</p>
        </Reveal>

        <div className="legal__body">
          {doc.blocks.map((block, i) => {
            if (block.type === "h")
              return (
                <Reveal key={i} delay={20}>
                  <h2>{block.text}</h2>
                </Reveal>
              );
            if (block.type === "ul")
              return (
                <Reveal key={i} delay={20}>
                  <ul>
                    {block.items.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                </Reveal>
              );
            return (
              <Reveal key={i} delay={20}>
                <p>{block.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
