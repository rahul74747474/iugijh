import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Classes from "@/components/landing/Classes";
import WhyUs from "@/components/landing/WhyUs";
import Timetable from "@/components/landing/Timetable";
import Testimonials from "@/components/landing/Testimonials";
import Contact from "@/components/landing/Contact";

export default function Index() {
  return (
    <div>
      <Hero />
      <About />
      <Classes />
      <WhyUs />
      <Timetable />
      <Testimonials />
      <Contact />
    </div>
  );
}
