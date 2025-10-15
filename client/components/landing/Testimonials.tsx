import { useReveal } from "@/hooks/use-reveal";

const quotes = [
  { name: "Parent of Grade 4 student", text: "My daughter has improved so much in Maths, thanks to Ms. Vatyani's patience & clear teaching." },
  { name: "Student, Grade 3", text: "I love how every subject is taught - I don't have to go to different teachers." },
  { name: "Student, Class 5", text: "Personal attention helped me excel in School exams with confidence." },
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
