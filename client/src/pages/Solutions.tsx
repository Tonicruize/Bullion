import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, ArrowRight, Download, FileText, Lock, DollarSign, Calendar, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function Solutions() {
  const products = [
    {
      title: "Products and Stocks Sector",
      rate: "1.2%",
      rateType: "Daily Profit",
      term: "14 Days",
      minInvest: "$1,000",
      maxInvest: "$4,999",
      features: ["Daily Withdrawal", "4% Referral Bonus", "Principal Returned", "24/7 Support"],
      popular: false,
      color: "bg-blue-500"
    },
    {
      title: "Private Company Properties",
      rate: "1.9%",
      rateType: "Daily Profit",
      term: "14 Days",
      minInvest: "$5,000",
      maxInvest: "$9,999",
      features: ["Daily Withdrawal", "4% Referral Bonus", "Principal Returned", "Dedicated Advisor"],
      popular: true,
      color: "bg-emerald-500"
    },
    {
      title: "Private Real Estate Sector",
      rate: "2.0%",
      rateType: "Daily Profit",
      term: "14 Days",
      minInvest: "$10,000",
      maxInvest: "$49,999",
      features: ["Daily Withdrawal", "4% Referral Bonus", "Principal Returned", "Priority Access"],
      popular: false,
      color: "bg-amber-500"
    },
    {
      title: "Private Infrastructure Sector",
      rate: "2.2%",
      rateType: "Daily Profit",
      term: "14 Days",
      minInvest: "$50,000",
      maxInvest: "$500,000",
      features: ["Daily Withdrawal", "4% Referral Bonus", "Principal Returned", "VIP Wealth Management"],
      popular: false,
      color: "bg-purple-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Investment Plans</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore our tailored investment strategies designed to maximize your growth potential with secure, high-yield opportunities.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className={cn("relative border-border/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col", product.popular && "border-accent shadow-lg ring-1 ring-accent/20")}>
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md z-10">
                    Most Popular
                  </div>
                )}
                
                {/* Header with Color Accent */}
                <div className={`h-2 w-full ${product.color} rounded-t-xl`} />
                
                <CardHeader className="text-center pb-6 pt-8">
                  <CardTitle className="font-serif text-xl mb-4 h-[56px] flex items-center justify-center leading-tight">
                    {product.title}
                  </CardTitle>
                  <div className="flex flex-col items-center justify-center bg-muted/30 py-6 rounded-lg border border-border/50">
                    <div className="text-5xl font-bold text-primary tracking-tighter">{product.rate}</div>
                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide mt-1">{product.rateType}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm border-b border-border/50 py-3">
                      <span className="text-muted-foreground flex items-center gap-2"><Calendar className="h-4 w-4" /> Duration</span>
                      <span className="font-bold text-foreground">{product.term}</span>
                    </div>
                    <div className="flex justify-between text-sm border-b border-border/50 py-3">
                      <span className="text-muted-foreground flex items-center gap-2"><DollarSign className="h-4 w-4" /> Min Deposit</span>
                      <span className="font-bold text-foreground">{product.minInvest}</span>
                    </div>
                    <div className="flex justify-between text-sm border-b border-border/50 py-3">
                      <span className="text-muted-foreground flex items-center gap-2"><TrendingUp className="h-4 w-4" /> Max Deposit</span>
                      <span className="font-bold text-foreground">{product.maxInvest}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="mt-0.5 bg-accent/10 rounded-full p-0.5">
                           <Check className="h-3 w-3 text-accent shrink-0" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg h-12 shadow-lg hover:shadow-xl transition-all">
                    Invest Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Documentation Section */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-serif font-bold text-primary mb-4">Investment Strategies</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our general investment strategies revolve around diversification, thorough due diligence, active portfolio management, and sustainable practices.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border shadow-sm">
                    <TrendingUp className="h-6 w-6 text-accent" />
                    <div className="flex-grow">
                      <div className="font-semibold">Active Portfolio Management</div>
                      <div className="text-xs text-muted-foreground">Continual monitoring and adjustment</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border shadow-sm">
                    <Check className="h-6 w-6 text-emerald-500" />
                    <div className="flex-grow">
                      <div className="font-semibold">Sustainable Investing</div>
                      <div className="text-xs text-muted-foreground">ESG integration for positive impact</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-primary p-10 rounded-2xl text-white text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                   <h4 className="text-2xl font-serif font-bold mb-4">Ready to Grow Your Wealth?</h4>
                   <p className="text-white/70 mb-8 leading-relaxed">
                     Join Elite Bonds Group and partner with us in shaping a future of growth and impact.
                   </p>
                   <Button className="bg-accent text-white hover:bg-accent/90 w-full md:w-auto h-12 px-8 text-lg font-semibold">
                     Open an Account <ArrowRight className="ml-2 h-4 w-4" />
                   </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
