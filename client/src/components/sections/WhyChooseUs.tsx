import { Check, Globe, Briefcase, Lightbulb, Users, Target, Shield } from "lucide-react";
import bgImage from "@assets/generated_images/abstract_blue_and_gold_financial_data_waves.png";

export function WhyChooseUs() {
  const partnersFeatures = [
    {
      icon: <Briefcase className="h-6 w-6 text-accent" />,
      title: "Expertise Across Diverse Sectors",
      description: "Our comprehensive strategy enables us to operate across multiple sectors, offering you a balanced and diverse investment portfolio."
    },
    {
      icon: <Target className="h-6 w-6 text-accent" />,
      title: "Established History of Achievement",
      description: "Our achievements speak volumes. Our dedication to excellence and disciplined investment strategies have established us as an industry leader, gaining the trust of clients globally."
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Collaborative Investment Strategy",
      description: "We strategically partner in our investments. By supporting private companies, developing infrastructure, and navigating liquid markets, we work closely with our partners to generate value."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-accent" />,
      title: "Flexible and Creative Solutions",
      description: "We take pride in our adaptability and innovation. From traditional investments to exploring opportunities, we remain at the cutting edge of market trends."
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Client-Focused Strategy",
      description: "Your success is our priority. Our customer-focused strategy emphasizes transparency, open communication, and a deep understanding of your unique financial goals."
    },
    {
      icon: <Globe className="h-6 w-6 text-accent" />,
      title: "Worldwide Reach, Local Insight",
      description: "With a global presence, Capital Bonds Group merges international insights with local expertise, adeptly navigating regional nuances while understanding local opportunities."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            We're Your Go-To Investment Partner
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We distinguish ourselves as a reliable and forward-thinking investment partner for a variety of compelling reasons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnersFeatures.map((feature, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm border border-border group-hover:border-accent/50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
