import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, FileBarChart, PieChart, TrendingUp } from "lucide-react";
import contractImage from "@assets/generated_images/close_up_of_fountain_pen_signing_a_contract.png";

export default function Approach() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your financial situation, risk tolerance, and long-term goals. This foundational step ensures our recommendations are perfectly aligned with your needs.",
      icon: Search
    },
    {
      number: "02",
      title: "Strategy Formulation",
      description: "Our investment committee analyses current market conditions to identify opportunities that offer the best balance of risk and reward for your specific profile.",
      icon: PieChart
    },
    {
      number: "03",
      title: "Portfolio Construction",
      description: "We build a diversified portfolio using our exclusive access to institutional-grade bonds and fixed-income products, minimizing exposure to any single sector.",
      icon: TrendingUp
    },
    {
      number: "04",
      title: "Ongoing Management",
      description: "Markets change, and so do your needs. We provide continuous monitoring and quarterly reviews to ensure your investments remain on track.",
      icon: FileBarChart
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={contractImage} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="inline-block px-3 py-1 border border-white/30 rounded-full text-xs font-medium uppercase tracking-widest mb-4">Methodology</div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Approach</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A disciplined, research-driven process designed to protect capital and deliver consistent returns.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-24 container mx-auto px-6">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={cn("flex flex-col gap-12 items-center", index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}>
                <div className="md:w-1/2 relative">
                  <div className="absolute -top-10 -left-10 text-[10rem] font-serif font-bold text-muted/20 leading-none select-none">
                    {step.number}
                  </div>
                  <div className="relative z-10 bg-white p-8 rounded-2xl border border-border shadow-lg">
                     <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
                        <step.icon className="h-8 w-8" />
                     </div>
                     <h3 className="text-2xl font-serif font-bold text-primary mb-4">{step.title}</h3>
                     <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                     </p>
                  </div>
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h4 className="text-lg font-bold text-accent mb-2 uppercase tracking-wide">Step {index + 1}</h4>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                    {index === 0 && "Understanding You"}
                    {index === 1 && "Market Analysis"}
                    {index === 2 && "Asset Allocation"}
                    {index === 3 && "Active Monitoring"}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We don't believe in one-size-fits-all. Every decision is backed by rigorous data analysis and tailored to your unique objectives.
                  </p>
                  <Button variant="link" className="text-primary p-0 h-auto font-semibold hover:text-accent">
                    Learn more about this phase <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-6 text-center">
             <h2 className="text-3xl font-serif font-bold text-primary mb-12">Investment Philosophy</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-6">
                 <h3 className="text-xl font-bold mb-3">Capital Preservation First</h3>
                 <p className="text-muted-foreground">We prioritize the return <em>of</em> capital over the return <em>on</em> capital. Risk management is our starting point.</p>
               </div>
               <div className="p-6 border-l border-r border-border/50">
                 <h3 className="text-xl font-bold mb-3">Long-Term Perspective</h3>
                 <p className="text-muted-foreground">We ignore short-term market noise and focus on fundamental value and sustainable income streams.</p>
               </div>
               <div className="p-6">
                 <h3 className="text-xl font-bold mb-3">Aligned Interests</h3>
                 <p className="text-muted-foreground">Our partners invest alongside our clients. We only succeed when you do.</p>
               </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
import { cn } from "@/lib/utils";
