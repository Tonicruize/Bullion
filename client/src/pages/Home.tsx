import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero, Introduction } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-accent/30">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Introduction />
        <Stats />
        <Services />
        
        {/* Featured Opportunities Preview */}
        <section className="py-24 bg-slate-50">
           <div className="container mx-auto px-6">
              <div className="flex justify-between items-end mb-16">
                 <div>
                    <h2 className="text-4xl font-serif font-bold text-primary mb-4">Current Opportunities</h2>
                    <p className="text-muted-foreground max-w-2xl">A selection of our currently open investment vehicles.</p>
                 </div>
                 <Button variant="link" className="text-accent font-bold text-lg hidden md:flex">
                    View All Products <ArrowRight className="ml-2 h-5 w-5" />
                 </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                    { title: "Strategic Corporate Bond IV", rate: "8.5%", term: "3 Years", status: "Open" },
                    { title: "Green Energy Infrastructure", rate: "7.2%", term: "4 Years", status: "Open" },
                    { title: "Prime UK Property Debt", rate: "9.0%", term: "24 Months", status: "Limited" }
                 ].map((item, i) => (
                    <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-border/50">
                       <CardHeader>
                          <div className="flex justify-between items-start mb-4">
                             <Badge variant={item.status === "Limited" ? "destructive" : "secondary"}>{item.status}</Badge>
                             <div className="text-right">
                                <div className="text-3xl font-bold text-primary">{item.rate}</div>
                                <div className="text-xs text-muted-foreground">Target Return</div>
                             </div>
                          </div>
                          <CardTitle className="font-serif text-xl group-hover:text-accent transition-colors">{item.title}</CardTitle>
                       </CardHeader>
                       <CardContent className="text-sm text-muted-foreground space-y-2">
                          <div className="flex justify-between border-b border-border/50 py-2">
                             <span>Term</span>
                             <span className="font-semibold text-foreground">{item.term}</span>
                          </div>
                          <div className="flex justify-between border-b border-border/50 py-2">
                             <span>Security</span>
                             <span className="font-semibold text-foreground">First Legal Charge</span>
                          </div>
                          <div className="flex justify-between border-b border-border/50 py-2">
                             <span>Min. Investment</span>
                             <span className="font-semibold text-foreground">£10,000</span>
                          </div>
                       </CardContent>
                       <CardFooter>
                          <Button className="w-full bg-primary group-hover:bg-accent transition-colors">Request Info</Button>
                       </CardFooter>
                    </Card>
                 ))}
              </div>
           </div>
        </section>

        <WhyChooseUs />
        
        {/* Latest News Preview */}
        <section className="py-24 bg-white">
           <div className="container mx-auto px-6">
              <h2 className="text-4xl font-serif font-bold text-primary mb-12 text-center">Market Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="relative group overflow-hidden rounded-xl h-[400px] bg-slate-900 flex items-end p-8">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10" />
                    {/* Placeholder for news image */}
                    <div className="relative z-20 text-white">
                       <div className="text-accent text-sm font-bold uppercase mb-2">Market Commentary</div>
                       <h3 className="text-2xl font-serif font-bold mb-4">Interest Rates: The Peak is in Sight</h3>
                       <p className="text-white/70 mb-6 line-clamp-2">Our analysis of the latest Bank of England decision and what it means for fixed income yields moving into Q1 2025.</p>
                       <Button variant="link" className="text-white p-0 hover:text-accent">Read Article <ArrowRight className="ml-2 h-4 w-4" /></Button>
                    </div>
                 </div>
                 <div className="space-y-8">
                    {[1, 2, 3].map((_, i) => (
                       <div key={i} className="flex gap-6 group cursor-pointer">
                          <div className="w-24 h-24 bg-muted/50 rounded-lg shrink-0 flex items-center justify-center text-muted-foreground">
                             <Newspaper className="h-8 w-8" />
                          </div>
                          <div>
                             <div className="text-xs text-muted-foreground mb-1">Nov 2{i}, 2024</div>
                             <h4 className="text-lg font-bold font-serif text-primary group-hover:text-accent transition-colors mb-2">
                                UK Inflation Data: A Turning Point for Savers?
                             </h4>
                             <p className="text-sm text-muted-foreground line-clamp-2">
                                With inflation finally cooling, real returns on bonds are looking increasingly attractive for prudent investors.
                             </p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 bg-primary text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 to-transparent opacity-50" />
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Start Your Journey With Us</h2>
                <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                    Join an exclusive community of investors who prioritize security, transparency, and consistent returns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <Button className="bg-accent text-white px-10 py-6 rounded-sm text-lg font-semibold hover:bg-accent/90 transition-colors shadow-lg">
                       Request Information Pack
                   </Button>
                   <Button variant="outline" className="border-white/20 text-white px-10 py-6 rounded-sm text-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                       Speak to an Advisor
                   </Button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
