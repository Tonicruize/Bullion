import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/modern_london_financial_district_skyline_at_dusk_with_blue_and_gold_tones.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="London Financial District"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />
      </div>

      <div className="container relative z-10 px-6 pt-20">
        <div className="max-w-3xl animate-in slide-in-from-bottom-10 fade-in duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Leading Fixed Income Specialists
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 drop-shadow-sm">
            Secure Your Future with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
              Institutional Grade Bonds
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl font-light">
            Capital Bonds Group provides access to exclusive fixed-rate investment opportunities. 
            Protect your wealth and achieve stable, predictable returns in today's volatile markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 h-14 text-lg shadow-xl shadow-black/10">
              View Current Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white h-14 px-8 text-lg backdrop-blur-sm">
              Schedule a Consultation
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-white/70 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span>FCA Regulated Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span>Capital Protection Options</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span>Fixed Returns up to 8.5% p.a.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
