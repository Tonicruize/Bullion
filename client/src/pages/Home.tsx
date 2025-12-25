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
import { cn } from "@/lib/utils";
import { TradingViewTickerTape, TradingViewMarketOverview, TradingViewStockHeatmap, TradingViewForexHeatmap } from "@/components/ui/tradingview-widget";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-accent/30">
      <Navbar />
      
      {/* Ticker Tape at the top, below Navbar */}
      <div className="fixed top-0 left-0 right-0 z-40 mt-[72px] lg:mt-[88px] opacity-95">
      </div>

      <main className="flex-grow pt-[80px]"> {/* Added padding-top to account for fixed navbar */}
        
        {/* TradingView Ticker Tape */}
        <div className="w-full h-[46px] overflow-hidden bg-background border-b border-border z-30 relative">
           <TradingViewTickerTape />
        </div>

        <Hero />
        <Introduction />
        <Stats />
        
        {/* Market Overview Section */}
        <section className="py-20 bg-slate-50 border-y border-border/50">
           <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                 <h2 className="text-3xl font-serif font-bold text-primary mb-4">Global Market Pulse</h2>
                 <p className="text-muted-foreground max-w-2xl mx-auto">
                    Stay connected to the world's financial heartbeat. Monitor key indices, commodities, and bond yields in real-time to make informed decisions.
                 </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg border border-border/50 h-[550px]">
                 <TradingViewMarketOverview />
              </div>
           </div>
        </section>

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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                    { title: "Products and Stocks", rate: "1.2% Daily", term: "14 Days", minInvest: "$1,000", color: "bg-blue-500" },
                    { title: "Company Properties", rate: "1.9% Daily", term: "14 Days", minInvest: "$5,000", color: "bg-emerald-500", popular: true },
                    { title: "Private Real Estate", rate: "2.0% Daily", term: "14 Days", minInvest: "$10,000", color: "bg-amber-500" },
                    { title: "Private Infrastructure", rate: "2.2% Daily", term: "14 Days", minInvest: "$50,000", color: "bg-purple-600" }
                 ].map((item, i) => (
                    <Card key={i} className={cn("group hover:shadow-2xl transition-all duration-300 border-border/50 relative overflow-hidden flex flex-col", item.popular && "border-accent shadow-lg")}>
                       {item.popular && (
                          <div className="absolute top-3 right-3 z-10">
                             <Badge className="bg-accent text-white hover:bg-accent">Popular</Badge>
                          </div>
                       )}
                       <div className={`h-1.5 w-full ${item.color}`} />
                       <CardHeader className="pb-2">
                          <CardTitle className="font-serif text-lg group-hover:text-primary transition-colors h-[48px] flex items-center">{item.title}</CardTitle>
                          <div className="mt-4">
                             <div className="text-3xl font-bold text-primary">{item.rate}</div>
                             <div className="text-xs text-muted-foreground uppercase tracking-wide">Target Return</div>
                          </div>
                       </CardHeader>
                       <CardContent className="text-sm text-muted-foreground space-y-3 flex-grow">
                          <div className="flex justify-between border-b border-border/50 py-2">
                             <span>Duration</span>
                             <span className="font-semibold text-foreground">{item.term}</span>
                          </div>
                          <div className="flex justify-between border-b border-border/50 py-2">
                             <span>Min. Deposit</span>
                             <span className="font-semibold text-foreground">{item.minInvest}</span>
                          </div>
                          <div className="flex justify-between border-b border-border/50 py-2">
                             <span>Withdrawals</span>
                             <span className="font-semibold text-foreground">Daily</span>
                          </div>
                       </CardContent>
                       <CardFooter className="pt-2">
                          <Button className="w-full bg-primary group-hover:bg-accent transition-colors">View Details</Button>
                       </CardFooter>
                    </Card>
                 ))}
              </div>
           </div>
        </section>

        <WhyChooseUs />

        {/* Ready to Join Us Section */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
           {/* Background decorative elements */}
           <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
           <div className="absolute bottom-0 left-0 w-1/3 h-full bg-accent/10 -skew-x-12 transform origin-bottom-left"></div>
           
           <div className="container mx-auto px-6 relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Join Us?</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                 Take the next step towards securing your financial future. Partner with a team dedicated to your growth and stability.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Button className="bg-accent hover:bg-accent/90 text-white px-10 py-7 text-lg font-semibold shadow-xl rounded-sm">
                    Open an Account Today <ArrowRight className="ml-2 h-5 w-5" />
                 </Button>
                 <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary px-10 py-7 text-lg font-semibold rounded-sm backdrop-blur-sm">
                    Schedule a Consultation
                 </Button>
              </div>
           </div>
        </section>

        {/* Market Heatmaps Section */}
        <section className="py-24 bg-slate-50 border-t border-border">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-primary mb-12 text-center">Market Heatmaps</h2>
            
            <div className="space-y-16">
              {/* Stock Heatmap */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                   <div className="h-8 w-1 bg-accent rounded-full"></div>
                   <h3 className="text-2xl font-serif font-bold text-foreground">Equities Performance</h3>
                </div>
                <div className="bg-white p-2 rounded-xl shadow-lg border border-border/50 h-[600px] overflow-hidden">
                  <TradingViewStockHeatmap />
                </div>
              </div>

              {/* Forex Heatmap */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                   <div className="h-8 w-1 bg-accent rounded-full"></div>
                   <h3 className="text-2xl font-serif font-bold text-foreground">Forex Cross Rates</h3>
                </div>
                <div className="bg-white p-2 rounded-xl shadow-lg border border-border/50 h-[500px] overflow-hidden">
                  <TradingViewForexHeatmap />
                </div>
              </div>
            </div>
          </div>
        </section>
        
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
