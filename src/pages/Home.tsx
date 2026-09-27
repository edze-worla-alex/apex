import { Hero } from "../components/Hero";
import {
  RecentWork,
  RoofSystem,
  ServicesCarousel,
} from "../components/Sections";
import { BeforeAfter, CompareMarquee, Process } from "../components/Process";
import { Faq, Testimonials, WhyApex } from "../components/Testimonials";
import { Schedule } from "../components/Schedule";

export default function Home() {
  return (
    <>
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
    </>
  );
}
