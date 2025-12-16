import { Card, CardContent } from "@/components/ui/card";
import { Building2, TrendingUp, ShieldCheck, Globe } from "lucide-react";

const stats = [
  {
    label: "Assets Under Management",
    value: "£2.4B+",
    icon: Building2,
  },
  {
    label: "Client Satisfaction",
    value: "98%",
    icon: ShieldCheck,
  },
  {
    label: "Years of Excellence",
    value: "15+",
    icon: TrendingUp,
  },
  {
    label: "Global Markets",
    value: "24",
    icon: Globe,
  },
];

export function Stats() {
  return (
    <section className="py-20 bg-background relative z-20 -mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-xl bg-card hover:bg-card/50 transition-colors duration-300">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/5 rounded-full text-primary mb-2">
                  <stat.icon className="h-6 w-6" />
                </div>
                <h3 className="text-4xl font-serif font-bold text-primary tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
