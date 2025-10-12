import { useReveal } from "@/hooks/use-reveal";

export default function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div ref={ref}>
          <img src="/placeholder.svg" alt="Tutor" className="rounded-3xl border shadow-soft" />
        </div>
        <div className="reveal" ref={useReveal<HTMLDivElement>()}>
          <p className="text-sm font-medium text-accent mb-2">Meet Our Master Teacher</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Dedicated to building strong fundamentals</h2>
          <p className="mt-4 text-muted-foreground">With over 10 years of experience in mentoring students, Mr. Rohan Mehta believes in building strong fundamentals and instilling curiosity in every learner.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border bg-secondary p-4 text-center card-hover">
              <div className="text-2xl">🎓</div>
              <div className="mt-2 font-semibold">10+ Years</div>
              <p className="text-xs text-muted-foreground">Experience</p>
            </div>
            <div className="rounded-2xl border bg-secondary p-4 text-center card-hover">
              <div className="text-2xl">📘</div>
              <div className="mt-2 font-semibold">1000+ Students</div>
              <p className="text-xs text-muted-foreground">Mentored</p>
            </div>
            <div className="rounded-2xl border bg-secondary p-4 text-center card-hover">
              <div className="text-2xl">🏆</div>
              <div className="mt-2 font-semibold">Top Results</div>
              <p className="text-xs text-muted-foreground">Every Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
