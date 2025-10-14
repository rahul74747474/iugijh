import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary to-white" />
      <div className="container py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-medium text-accent mb-3">Vatyani Tuition Center</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">Nurturing Young Minds to Learn, Grow & Shine.</h1>
          <p className="mt-4 text-muted-foreground max-w-prose">Personalized tuition for Classes 1–5 in Maths, English, Science, and Hindi.
Clear concepts, caring guidance, and regular progress tracking to build a strong academic foundation.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-pill bg-accent text-white shadow-soft inline-flex items-center gap-2">
              Enroll Now <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn-pill border border-accent/40 text-foreground hover:bg-secondary">Learn More</a>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-3xl bg-white p-3 shadow-soft">
            <img src="/placeholder.svg" alt="Students studying" className="h-auto w-full rounded-2xl object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-3xl bg-accent/20 blur-2xl" />
          <div className="absolute -top-8 -right-8 -z-10 h-40 w-40 rounded-3xl bg-primary/80 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
