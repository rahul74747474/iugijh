import { useReveal } from "@/hooks/use-reveal";

const items = [
  { icon: "🧠", title: "Concept Clarity", desc: "Build strong fundamentals with structured lessons." },
  { icon: "💬", title: "Doubt Solving", desc: "Get your questions answered promptly." },
  { icon: "📈", title: "Regular Assessments", desc: "Track progress with tests and feedback." },
  { icon: "🤝", title: "Personal Attention", desc: "Small batches for individual focus." },
];

export default function WhyUs() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="why" className="py-20 bg-white">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium text-accent">Why Students Love Bright Minds Tuition</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Why Choose Us</h2>
        </div>
        <div ref={ref} className="grid gap-6 md:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border bg-secondary p-6 text-center card-hover">
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-3 font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
