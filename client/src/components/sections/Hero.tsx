import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, Building2, Globe, Shield, Scale, Clock, Award, FileText } from "lucide-react";
import heroImage from "@assets/generated_images/modern_london_financial_district_skyline_at_dusk_with_blue_and_gold_tones.png";
import officeImage from "@assets/generated_images/modern_office_reception_with_elite_bonds_group_gold_logo.png";
import certificateImage from "@assets/generated_images/certificate_of_incorporation_for_elite_bonds_group.png";
import { Link } from "wouter";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="London Financial District"
          className="w-full h-full object-cover animate-in fade-in duration-1000"
        />
        {/* Complex Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />
      </div>

      <div className="container relative z-10 px-6 pt-24 pb-12">
        <div className="max-w-4xl animate-in slide-in-from-bottom-10 fade-in duration-700">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/90 text-sm font-medium uppercase tracking-wider mb-8 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="w-px h-4 bg-white/20" />
            <span>FCA Regulated Partners</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.05] mb-8 drop-shadow-lg tracking-tight">
            Wealth Preservation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white">
              Through Stability
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl font-light">
            Exclusive access to institutional-grade fixed income bonds. 
            Achieve predictable yields of <span className="text-white font-semibold">7.5% - 9.5% p.a.</span> with asset-backed security.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <Link href="/solutions">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-10 h-16 text-lg shadow-xl shadow-accent/20 border border-white/10 rounded-sm">
                View Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/approach">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white h-16 px-10 text-lg backdrop-blur-sm rounded-sm">
                Our Methodology
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white/80 border-t border-white/10 pt-8">
            <div className="space-y-1">
              <div className="text-3xl font-serif font-bold text-white">£2.4B+</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Assets Managed</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-serif font-bold text-white">15yr</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Track Record</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-serif font-bold text-white">100%</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Payment History</div>
            </div>
            <div className="space-y-1">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-primary" />
                  ))}
               </div>
               <div className="text-xs uppercase tracking-widest opacity-70 mt-2">4.5k+ Investors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Introduction() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
           <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
                 <img src={officeImage} alt="Elite Bonds Group Office" className="w-full h-auto" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-accent/20 z-0" />
              <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-sm shadow-xl z-20 max-w-xs text-white">
                 <Award className="h-10 w-10 text-accent mb-4" />
                 <div className="font-serif font-bold text-xl mb-2">Award Winning</div>
                 <p className="text-sm opacity-80">Recognised as the UK's leading fixed-income specialist for 3 consecutive years.</p>
              </div>
           </div>
           
           <div className="lg:w-1/2">
              <div className="text-accent font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                 <span className="w-8 h-px bg-accent"></span>
                 Who We Are
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                 Navigating Complex Markets with <span className="italic text-accent">Certainty</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                 <p>
                    In an era of economic volatility, Elite Bonds Group stands as a bastion of stability. We specialise in identifying, structuring, and managing high-yield fixed-income opportunities that are typically reserved for institutional investors.
                 </p>
                 <p>
                    Our philosophy is simple: <strong>Capital preservation constitutes the foundation of wealth creation.</strong> We do not chase speculative trends. Instead, we focus on tangible assets, robust covenants, and transparent cash flows.
                 </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                 <div className="flex items-start gap-4">
                    <Scale className="h-8 w-8 text-primary mt-1" />
                    <div>
                       <h4 className="font-bold text-foreground mb-1">Due Diligence</h4>
                       <p className="text-sm text-muted-foreground">Rigorous 40-point check on every bond.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 text-primary mt-1" />
                    <div>
                       <h4 className="font-bold text-foreground mb-1">Timely Returns</h4>
                       <p className="text-sm text-muted-foreground">Quarterly interest payments, never missed.</p>
                    </div>
                 </div>
              </div>

              <div className="mt-12 flex gap-4">
                 <Link href="/about">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 h-12 text-base rounded-sm">
                       Learn More About Us
                    </Button>
                 </Link>
                 
                 <Dialog>
                   <DialogTrigger asChild>
                     <Button variant="ghost" className="h-12 text-base text-muted-foreground hover:text-primary gap-2">
                       <FileText className="h-5 w-5" /> View Certificate
                     </Button>
                   </DialogTrigger>
                   <DialogContent className="max-w-3xl bg-white p-0 overflow-hidden border-none">
                     <img src={certificateImage} alt="Certificate of Incorporation" className="w-full h-auto" />
                   </DialogContent>
                 </Dialog>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
