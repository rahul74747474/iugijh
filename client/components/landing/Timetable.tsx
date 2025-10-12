import { useReveal } from "@/hooks/use-reveal";

export default function Timetable() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="timetable" className="py-20 bg-white">
      <div className="container">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium text-accent">Plan Ahead</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Timetable / Batches</h2>
        </div>
        <div ref={ref} className="rounded-2xl border overflow-hidden">
          <div className="grid grid-cols-4 bg-secondary text-sm font-medium">
            <div className="p-3">Batch</div>
            <div className="p-3">Days</div>
            <div className="p-3">Time</div>
            <div className="p-3">Class</div>
          </div>
          {[{b:"Alpha",d:"Mon, Wed, Fri",t:"5:00–6:30 PM",c:"6–8"},{b:"Sigma",d:"Tue, Thu, Sat",t:"6:45–8:15 PM",c:"9–10"},{b:"Omega",d:"Sat, Sun",t:"9:00–11:00 AM",c:"11–12"}].map((r,i)=> (
            <div key={i} className="grid grid-cols-4 border-t text-sm">
              <div className="p-3">{r.b}</div>
              <div className="p-3">{r.d}</div>
              <div className="p-3">{r.t}</div>
              <div className="p-3">{r.c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
