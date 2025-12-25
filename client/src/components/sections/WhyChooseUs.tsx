import { Check } from "lucide-react";
import bgImage from "@assets/generated_images/abstract_blue_and_gold_financial_data_waves.png";

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary text-white">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <img src={bgImage} className="w-full h-full object-cover" alt="" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
              Why Investors Trust <br />
              <span className="text-accent">Elite Bonds Group</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              In a landscape of uncertainty, we offer clarity. Our rigorous due diligence process and partnership with top-tier financial institutions ensure that your capital is deployed with the utmost care and strategy.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                "FCA Authorized Partners",
                "Transparent Fee Structure",
                "Dedicated Account Manager",
                "Quarterly Performance Reports",
                "Capital Protection Focus",
                "Exclusive Market Access"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-accent/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="font-medium text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border-[20px] border-white/5 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 border-[2px] border-accent/20 rounded-full" />
              
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12">
                <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed text-white/90 mb-8">
                  "Our mission is simple: to provide stable, high-yield returns that allow our clients to sleep soundly at night, knowing their future is secure."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl font-serif">
                    J
                  </div>
                  <div>
                    <div className="font-bold text-white">James Sterling</div>
                    <div className="text-accent text-sm uppercase tracking-wider">Chief Investment Officer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
