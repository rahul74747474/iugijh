import { useReveal } from "@/hooks/use-reveal";

const quotes = [
  { name: "Aarav, Class 10", text: "The concepts became crystal clear. My scores improved drastically!" },
  { name: "Sara, Class 8", text: "I love the friendly environment and regular tests." },
  { name: "Ritika, Class 12", text: "Personal attention helped me crack my boards with confidence." },
];

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="testimonials" className="py-20 bg-primary/40">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium text-accent">What Our Students Say</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Testimonials</h2>
        </div>
        <div ref={ref} className="grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl border bg-white p-6 card-hover">
              <div className="flex items-center gap-3">
                <img src="/placeholder.svg" alt="Student" className="h-10 w-10 rounded-full border" />
                <figcaption className="font-medium">{q.name}</figcaption>
              </div>
              <blockquote className="mt-3 text-sm text-muted-foreground">“{q.text}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
