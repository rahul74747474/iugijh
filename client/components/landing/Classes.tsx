import { useReveal } from "@/hooks/use-reveal";

const groups = [
  { title: "Classes 1–2", items: ["English (Reading , Writing , Grammar)", "Mathematics", "Environmental Studies", "Hindi (Reading & Writing)"] },
  { title: "Classes 3–5", items: ["Mathematics", "English", "Science", "Hindi","General Studies"] },

];

export default function Classes() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="classes" className="py-20 bg-primary/50">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium text-accent">What We Teach</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Classes & Subjects</h2>
        </div>
        <div ref={ref} className="grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border bg-white p-6 card-hover">
              <h3 className="font-semibold text-lg">{g.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2"><span className="text-accent">•</span> {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
