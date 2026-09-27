import { Layout } from "./components/Layout";
import { RouterProvider, usePath } from "./lib/router";
import Home from "./pages/Home";
import About from "./pages/About";
import Services, { NotFoundBody, ServiceDetail } from "./pages/Services";
import Blog, { FaqPage, LegalPage } from "./pages/Blog";

function Routes() {
  const path = usePath();

  if (path === "/") {
    return (
      <Layout overlayHeader>
        <Home />
      </Layout>
    );
  }

  let body = <NotFoundBody />;

  if (path === "/about") body = <About />;
  else if (path === "/blog") body = <Blog />;
  else if (path === "/faq") body = <FaqPage />;
  else if (path === "/services") body = <Services />;
  else if (path.startsWith("/services/"))
    body = <ServiceDetail slug={path.slice("/services/".length)} />;
  else if (path.startsWith("/legal/"))
    body = <LegalPage slug={path.slice("/legal/".length)} />;

  return <Layout>{body}</Layout>;
}

export default function App() {
  return (
    <RouterProvider>
      <Routes />
    </RouterProvider>
  );
}
