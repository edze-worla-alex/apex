import { Header, Hero, PromoBanner } from "./components/Hero";
import { RecentWork, RoofSystem, ServicesCarousel } from "./components/Sections";
import { BeforeAfter, CompareMarquee, Process } from "./components/Process";
import { Faq, Testimonials, WhyApex } from "./components/Testimonials";
import { Closing, Footer, Schedule, Strip } from "./components/Schedule";

export default function App() {
  return (
    <>
      <a className="skip" href="#main-content">
        Skip to content
      </a>
      <PromoBanner />
      <Header />

      <main id="main-content">
        <Hero />
        <RoofSystem />

        <div className="frame">
          <section className="panel panel--muted">
            <ServicesCarousel />
          </section>
        </div>

        <RecentWork />
        <Process />
        <BeforeAfter />
        <CompareMarquee />
        <Testimonials />
        <WhyApex />
        <Faq />
        <Schedule />
      </main>

      <Closing />
      <Strip />
      <Footer />
    </>
  );
}
