

import { useReveal } from "@/hooks/use-reveal";

export default function Timetable() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="timetable" className="py-20 bg-white">
      <div className="container">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium text-accent">Plan Ahead</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Timetable / Batches
          </h2>
        </div>

        <div ref={ref} className="rounded-2xl border overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 bg-secondary text-sm font-medium">
            <div className="p-3 col-span-2">Days</div>
            <div className="p-3 col-span-2">Time</div>
          </div>

          {/* Rows */}
          {[{ d: "Mon, Tue, Wed, Thu, Fri, Sat", t: "10:00 AM –12:30 PM | 5:00–8:00 PM" }].map(
            (r, i) => (
              <div key={i} className="grid grid-cols-4 border-t text-sm">
                <div className="p-3 col-span-2">{r.d}</div>
                <div className="p-3 col-span-2">{r.t}</div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}


