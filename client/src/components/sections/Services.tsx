import { Shield, TrendingUp, PieChart, Landmark, Leaf, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    title: "Corporate Bonds",
    description: "Invest in established corporations with fixed interest rates and defined maturity dates. Ideal for income-focused portfolios.",
    icon: Building2,
    features: ["Fixed Income", "Investment Grade", "3-5 Year Terms"],
  },
  {
    title: "ISA Investments",
    description: "Tax-efficient savings accounts designed to maximize your returns while minimizing your tax liability.",
    icon: PieChart,
    features: ["Tax Free Growth", "Flexible Access", "Compound Interest"],
  },
  {
    title: "Green Energy Bonds",
    description: "Support sustainable development while earning competitive returns. Invest in the future of energy.",
    icon: Leaf,
    features: ["ESG Compliant", "Sustainable Impact", "Government Backed"],
  },
  {
    title: "Wealth Management",
    description: "Comprehensive financial planning and portfolio management tailored to your specific life goals.",
    icon: Landmark,
    features: ["Personal Advisor", "Holistic Strategy", "Estate Planning"],
  },
];

export function Services() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
            Investment Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored financial products designed to meet the diverse needs of modern investors, from capital preservation to aggressive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-background p-8 rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="h-12 w-12 bg-primary/5 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/solutions">
                <Button variant="outline" className="w-full group-hover:border-accent group-hover:text-accent transition-colors">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
