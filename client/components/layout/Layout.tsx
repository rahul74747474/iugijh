import { PropsWithChildren, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Instagram, Mail, Phone, ArrowUp, MessageCircle } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={cn("sticky top-0 z-40 w-full transition-all", scrolled ? "backdrop-blur bg-white/70 border-b" : "bg-transparent")}> 
      <div className="container flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-display text-lg font-semibold">
        <img src="https://i.ibb.co/0pyZ39sC/IMG-20251015-173643.jpg" alt="Bright Minds Tuition" className="h-10 w-auto" />
        
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-accent-foreground/80">About</a>
          <a href="#classes" className="hover:text-accent-foreground/80">Classes</a>
          <a href="#why" className="hover:text-accent-foreground/80">Why Us</a>
          <a href="#testimonials" className="hover:text-accent-foreground/80">Testimonials</a>
          <a href="#contact" className="hover:text-accent-foreground/80">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-pill bg-accent text-white shadow-soft hover:opacity-90">Enroll Now</a>
        </div>
        <div className="md:hidden">
          <a href="#contact" className="btn-pill bg-accent text-white">Enroll</a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="inline-block h-8 w-8 rounded-xl bg-accent" />
            <span>Bright Minds Tuition</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">Empowering students to learn, grow, and excel through concept clarity, personal attention, and consistent assessments.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-accent">About</a></li>
            <li><a href="#classes" className="hover:text-accent">What We Teach</a></li>
            <li><a href="#why" className="hover:text-accent">Why Choose Us</a></li>
            <li><a href="#testimonials" className="hover:text-accent">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <div className="space-y-2 text-sm">
            <a href="mailto:info@brightminds.tuition" className="flex items-center gap-2 hover:text-accent"><Mail size={16}/> info@brightminds.tuition</a>
            <a href="tel:+0000000000" className="flex items-center gap-2 hover:text-accent"><Phone size={16}/> +00 0000 0000</a>
            <div className="flex items-center gap-3 pt-2">
              <a aria-label="Instagram" href="#" className="p-2 rounded-full border hover:bg-secondary"><Instagram size={18} /></a>
              <a aria-label="WhatsApp" href="#" className="p-2 rounded-full border hover:bg-secondary"><MessageCircle size={18} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">© 2025 Bright Minds Tuition • All rights reserved • <a href="#" className="underline hover:text-accent">Privacy Policy</a></div>
    </footer>
  );
}

function ScrollTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-accent text-white shadow-soft transition-all",
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2",
      )}
    >
      <ArrowUp />
    </button>
  );
}

function WhatsAppButton() {
  return (
    <a
      aria-label="Chat on WhatsApp"
      href="https://wa.me/0000000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-green-500 text-white shadow-soft hover:bg-green-600"
    >
      <MessageCircle />
    </a>
  );
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollTop />
      <WhatsAppButton />
    </div>
  );
}
