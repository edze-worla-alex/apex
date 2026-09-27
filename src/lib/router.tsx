import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

/**
 * Minimal history-API router. The site is a handful of static routes, so a
 * ~60-line router keeps the bundle small and avoids a dependency.
 */
type Ctx = { path: string; navigate: (to: string) => void };

const RouterCtx = createContext<Ctx>({ path: "/", navigate: () => {} });

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() =>
    typeof window === "undefined" ? "/" : window.location.pathname,
  );

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Honour a hash present on first load (e.g. someone opens /#schedule).
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    }, 250);
    return () => window.clearTimeout(t);
  }, []);

  const navigate = useCallback((to: string) => {
    const [pathname, hash] = to.split("#");
    const target = pathname || window.location.pathname;

    const goToHash = () => {
      if (!hash) return;
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (target === window.location.pathname) {
      window.history.replaceState({}, "", to);
      if (hash) goToHash();
      else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.history.pushState({}, "", to);
    setPath(target);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    // The new route needs a paint before the anchor exists.
    if (hash) window.setTimeout(goToHash, 120);
  }, []);

  return (
    <RouterCtx.Provider value={{ path, navigate }}>
      {children}
    </RouterCtx.Provider>
  );
}

export function useRouter() {
  return useContext(RouterCtx);
}

/** Normalised current path, without a trailing slash. */
export function usePath() {
  const { path } = useRouter();
  return path.length > 1 ? path.replace(/\/+$/, "") : "/";
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter();
  const external = /^(https?:|mailto:|tel:)/.test(to);
  const hash = to.startsWith("#");

  return (
    <a
      href={to}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (external || hash || e.defaultPrevented) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}
