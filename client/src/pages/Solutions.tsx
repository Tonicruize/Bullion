import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, ArrowRight, Download, FileText, Lock } from "lucide-react";

export default function Solutions() {
  const products = [
    {
      title: "Fixed Rate Corporate Bonds",
      rate: "7.5% - 8.5%",
      term: "3 - 5 Years",
      minInvest: "£10,000",
      risk: "Moderate",
      features: ["Quarterly Interest Payments", "Asset Backed Security", "Early Exit Options"],
      popular: true
    },
    {
      title: "Sustainable Green Energy Bond",
      rate: "6.0% - 7.2%",
      term: "2 - 4 Years",
      minInvest: "£5,000",
      risk: "Low-Moderate",
      features: ["ESG Compliant", "Government Incentives", "Semi-Annual Payouts"],
      popular: false
    },
    {
      title: "High Yield Property Bond",
      rate: "8.0% - 9.5%",
      term: "18 - 36 Months",
      minInvest: "£25,000",
      risk: "Moderate-High",
      features: ["First Legal Charge", "Development Projects", "Compounded Growth Option"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Investment Solutions</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover our range of carefully curated fixed-income products designed to deliver stable, predictable returns in an unpredictable market.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className={cn("relative border-border/50 transition-all duration-300 hover:shadow-xl hover:border-accent/50", product.popular && "border-accent shadow-lg")}>
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="font-serif text-2xl mb-2 min-h-[64px] flex items-center justify-center">{product.title}</CardTitle>
                  <div className="text-4xl font-bold text-primary my-4">{product.rate} <span className="text-sm font-normal text-muted-foreground">p.a.</span></div>
                  <CardDescription>Target Return</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm border-b border-border/50 py-2">
                      <span className="text-muted-foreground">Term</span>
                      <span className="font-semibold">{product.term}</span>
                    </div>
                    <div className="flex justify-between text-sm border-b border-border/50 py-2">
                      <span className="text-muted-foreground">Min. Investment</span>
                      <span className="font-semibold">{product.minInvest}</span>
                    </div>
                    <div className="flex justify-between text-sm border-b border-border/50 py-2">
                      <span className="text-muted-foreground">Risk Profile</span>
                      <span className="font-semibold">{product.risk}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-primary hover:bg-primary/90">Request Fact Sheet</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Documentation Section */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-serif font-bold text-primary mb-4">Due Diligence & Documentation</h3>
                <p className="text-muted-foreground mb-6">
                  Transparency is at the core of our business. Registered users can access full prospectuses, legal documentation, and third-party audit reports for all our investment vehicles.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
                    <FileText className="h-6 w-6 text-accent" />
                    <div className="flex-grow">
                      <div className="font-semibold">Sample Investment Memorandum</div>
                      <div className="text-xs text-muted-foreground">PDF • 2.4 MB</div>
                    </div>
                    <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
                    <Lock className="h-6 w-6 text-muted-foreground" />
                    <div className="flex-grow">
                      <div className="font-semibold text-muted-foreground">Full Due Diligence Pack</div>
                      <div className="text-xs text-muted-foreground">Requires Client Login</div>
                    </div>
                    <Button variant="outline" size="sm" disabled>Locked</Button>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-primary p-10 rounded-2xl text-white text-center">
                <h4 className="text-2xl font-serif font-bold mb-4">Not sure which option is right for you?</h4>
                <p className="text-white/70 mb-8">
                  Our dedicated investment advisors are available to discuss your financial goals and help you build a diversified portfolio.
                </p>
                <Button className="bg-accent text-white hover:bg-accent/90 w-full md:w-auto">
                  Schedule a Call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Helper for cn in this file if not imported (it was imported in Navbar, adding here to be safe if copy-pasted separately, but since we are writing file content, I need to make sure imports are clean)
// Actually I missed importing cn at the top. Let me add it.
import { cn } from "@/lib/utils";
