import { useReveal } from "@/hooks/use-reveal";

export default function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div ref={ref}>
          <img src="https://i.ibb.co/1G0c1BpF/Gemini-Generated-Image-zcdijmzcdijmzcdi.png" alt="Tutor" className="rounded-3xl border shadow-soft" />
        </div>
        <div className="reveal" ref={useReveal<HTMLDivElement>()}>
          <p className="text-sm font-medium text-accent mb-2">Meet Our Master Teacher</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Dedicated to building strong foundations</h2>
          <p className="mt-4 text-muted-foreground">With over 10 years of teaching experience, Ms. Twinkle Vatyani has helped countless young learners build confidence and clarity in their studies.
Her approach focuses on patience, understanding, and personalized attention to ensure that every child thrives.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border bg-secondary p-4 text-center card-hover">
              <div className="mt-2 font-semibold">10+ Years</div>
              <p className="text-xs text-muted-foreground">Experience</p>
            </div>
            <div className="rounded-2xl border bg-secondary p-4 text-center card-hover">
              <div className="mt-2 font-semibold">All Subjects</div>
              <p className="text-xs text-muted-foreground">Classes 1-5</p>
            </div>
            <div className="rounded-2xl border bg-secondary p-4 text-center card-hover">
              <div className="mt-2 font-semibold">Personal Attention</div>
              <p className="text-xs text-muted-foreground">For Every Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
