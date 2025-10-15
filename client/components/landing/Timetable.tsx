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
    
            <div className="p-3">Days</div>
            <div className="p-3">Time</div>
          
          </div>
          {[{d:"Mon , Tue , Wed, Thur , Fri , Sat",t:"10:00–12:30 AM | 5:00-8:00 PM"}].map((r,i)=> (
            <div key={i} className="grid grid-cols-4 border-t text-sm">
            
              <div className="p-3">{r.d}</div>
              <div className="p-3">{r.t}</div>
        
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
