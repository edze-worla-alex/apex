import { useEffect, useState, type ReactNode } from "react";
import { NAV, PHONE, PHONE_HREF } from "../lib/content";
import { SERVICES } from "../lib/services";
import { useScrolled } from "../lib/hooks";
import { Link, usePath } from "../lib/router";
import { ApexMark, ChevronDown, Close, Phone } from "./icons";
import { Closing, Footer, Strip } from "./Schedule";

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

export function Header({ overlay = false }: { overlay?: boolean }) {
  const stuck = useScrolled(60);
  const path = usePath();
  const [menu, setMenu] = useState(false);

  useEffect(() => setMenu(false), [path]);

  const isActive = (href: string) =>
    href !== "/" && href.startsWith("/") && path.startsWith(href);

  return (
    <header
      className={[
        "header",
        stuck ? "is-stuck" : "",
        overlay ? "header--overlay" : "header--solid",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="header__inner">
        <Link className="brand" to="/">
          <ApexMark style={{ color: "var(--accent-bright)" }} />
          Apex
        </Link>

        <nav className="nav" aria-label="Main">
          <div
            className="nav__group"
            onMouseEnter={() => setMenu(true)}
            onMouseLeave={() => setMenu(false)}
          >
            <Link
              to="/services"
              className={isActive("/services") ? "is-active" : undefined}
              aria-expanded={menu}
            >
              Services
              <ChevronDown />
            </Link>

            <div className={`nav__menu ${menu ? "is-open" : ""}`}>
              {SERVICES.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`}>
                  <img src={s.hero} alt="" />
                  <span>
                    <b>{s.name}</b>
                    {s.blurb}
                  </span>
                </Link>
              ))}
              <Link className="nav__menu-all" to="/services">
                All services
                <ChevronDown style={{ transform: "rotate(-90deg)" }} />
              </Link>
            </div>
          </div>

          {NAV.slice(1).map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={isActive(item.href) ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <a className="header__phone" href={PHONE_HREF}>
            <Phone />
            {PHONE}
          </a>
          <Link className="btn btn--light" to="/#schedule">
            Free Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}

/** Page chrome shared by every route. */
export function Layout({
  children,
  overlayHeader = false,
}: {
  children: ReactNode;
  overlayHeader?: boolean;
}) {
  return (
    <>
      <a className="skip" href="#main-content">
        Skip to content
      </a>
      <PromoBanner />
      <Header overlay={overlayHeader} />
      <main id="main-content">{children}</main>
      <Closing />
      <Strip />
      <Footer />
    </>
  );
}

/** Small "Home / Services / Roofing" trail used on inner pages. */
export function Breadcrumb({
  trail,
}: {
  trail: { label: string; to?: string }[];
}) {
  return (
    <nav className="crumb" aria-label="Breadcrumb">
      {trail.map((item, i) => (
        <span key={item.label}>
          {item.to ? <Link to={item.to}>{item.label}</Link> : <b>{item.label}</b>}
          {i < trail.length - 1 && <span aria-hidden>/</span>}
        </span>
      ))}
    </nav>
  );
}
