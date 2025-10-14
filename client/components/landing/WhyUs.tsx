import { useReveal } from "@/hooks/use-reveal";

const items = [
  { icon: "", title: "Strong Foundation", desc: "Clear concepts and structured lessons for confident learners." },
  { icon: "", title: "Doubt Solving", desc: "Every question is answered with patience and clarity." },
  { icon: "", title: "Regular Feedback", desc: "Progress reports and communication with parents." },
  { icon: "", title: "Personalised Attention", desc: "Small groups and one-to-one focus where needed."},
  { icon: "", title: "Comfortable Environment", desc: "Friendly, safe, and encouraging learning atmosphere."}
];

export default function WhyUs() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="why" className="py-20 bg-white">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium text-accent">Why Parents Trust Vatyani Tuition Center</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Why Choose Us</h2>
        </div>
        <div ref={ref} className="grid gap-6 md:grid-cols-5">
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
