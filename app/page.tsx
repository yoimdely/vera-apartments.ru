import { Hero } from "@/components/hero";
import { Concept } from "@/components/concept";
import { Cta } from "@/components/cta"; // This is the Quiz now
import { Investment } from "@/components/investment";
import { Medicine } from "@/components/medicine";
import { Location } from "@/components/location";
import { Gallery } from "@/components/gallery";
import { Faq } from "@/components/faq";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-background">
      <Hero />
      <Separator />
      <Concept />
      <Separator />
      {/* Quiz moved up */}
      <Cta />
      <Separator />
      <Investment />
      <Separator />
      <Medicine />
      <Separator />
      <Location />
      <Separator />
      <Faq />
      <ContactForm />
      <Footer />

      {/* Floating Call Button */}
      <a 
        href="tel:88005505120"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pl-4 pr-2 py-2 bg-white text-brand-charcoal rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform group animate-bounce-slow border border-white/20"
      >
        <span className="font-bold hidden sm:block">8 (800) 550-51-20</span>
        <div className="w-10 h-10 bg-brand-charcoal text-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
          <Phone className="w-5 h-5" />
        </div>
      </a>
    </main>
  );
}
