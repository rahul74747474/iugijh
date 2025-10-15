
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = {
      name: (form[0] as HTMLInputElement).value,
      className: (form[1] as HTMLInputElement).value,
      subject: (form[2] as HTMLInputElement).value,
      contact: (form[3] as HTMLInputElement).value,
      message: (form[4] as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("https://vatyanituitioncenter.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Thanks! We'll contact you soon.");
        form.reset();
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-sm font-medium text-accent mb-2">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Contact / Enrollment</h2>
          <p className="mt-3 text-muted-foreground">
            Fill the form and we'll reach out shortly. You can also call or email us directly.
          </p>
          <div className="mt-6 grid gap-3 text-sm">
            <div><span className="font-medium">Email:</span> info@brightminds.tuition</div>
            <div><span className="font-medium">Phone:</span> +00 0000 0000</div>
            <div className="rounded-2xl border bg-white p-4 mt-4 text-center text-sm text-muted-foreground">
              Google Map Placeholder
            </div>
          </div>
        </div>
        <form
          className="rounded-2xl border bg-white p-6 shadow-soft space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">Name</label>
              <input
                required
                className="h-11 w-full rounded-xl border px-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Class</label>
              <input
                className="h-11 w-full rounded-xl border px-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="e.g., 10"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">Subject</label>
              <input
                className="h-11 w-full rounded-xl border px-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Maths / Science / English"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Phone / Email</label>
              <input
                required
                type="text"
                className="h-11 w-full rounded-xl border px-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Contact"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows={4}
              className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Tell us about your needs"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              className="btn-pill bg-accent text-white shadow-soft"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
            {status && <span className="text-sm text-green-600">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}

