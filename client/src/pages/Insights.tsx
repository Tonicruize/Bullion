import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function Insights() {
  const articles = [
    {
      category: "Market Commentary",
      title: "Q4 2024 Market Outlook: Navigating Interest Rate Shifts",
      excerpt: "As central banks signal a pause in rate hikes, we analyse the implications for fixed-income portfolios and where the smart money is moving.",
      date: "Dec 12, 2024",
      author: "James Sterling",
      image: "bg-blue-900" 
    },
    {
      category: "Educational",
      title: "Understanding Corporate Bonds vs. Gilts",
      excerpt: "A comprehensive guide to the risk-reward trade-offs between government-backed securities and corporate debt instruments.",
      date: "Nov 28, 2024",
      author: "Sarah Jenkins",
      image: "bg-slate-800"
    },
    {
      category: "News",
      title: "Elite Bonds Group Expands Sustainable Energy Portfolio",
      excerpt: "We are proud to announce the addition of three new green energy infrastructure bonds to our core offering.",
      date: "Nov 15, 2024",
      author: "Press Team",
      image: "bg-emerald-900"
    },
    {
      category: "Strategy",
      title: "The Role of Fixed Income in a Diversified Portfolio",
      excerpt: "Why the traditional 60/40 portfolio is evolving and how modern investors can adapt to changing correlations.",
      date: "Oct 30, 2024",
      author: "Robert Chen",
      image: "bg-indigo-900"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="bg-slate-50 py-20 border-b border-border">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Insights & News</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Expert analysis, market updates, and educational resources to help you make informed investment decisions.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 container mx-auto px-6">
           <div className="relative rounded-2xl overflow-hidden bg-primary text-white grid md:grid-cols-2 min-h-[400px]">
              <div className="p-12 flex flex-col justify-center">
                 <Badge className="w-fit mb-4 bg-accent text-white hover:bg-accent">Featured Analysis</Badge>
                 <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Global Economic Forecast 2025</h2>
                 <p className="text-white/80 mb-8 leading-relaxed">
                   Our annual deep dive into the macroeconomic trends that will shape the investment landscape in the coming year. From geopolitical shifts to technological disruption.
                 </p>
                 <div className="flex items-center gap-4 text-sm text-white/60 mb-8">
                    <div className="flex items-center gap-2"><User className="h-4 w-4" /> Research Team</div>
                    <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Dec 15, 2024</div>
                 </div>
                 <button className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Read Full Report <ArrowRight className="h-4 w-4" />
                 </button>
              </div>
              <div className="bg-accent/20 h-full w-full relative">
                 {/* Abstract pattern or chart placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center text-white/10 text-9xl font-serif font-bold">2025</div>
              </div>
           </div>
        </section>

        {/* Article Grid */}
        <section className="py-12 container mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 group">
                <div className={`h-48 w-full ${article.image} relative`}>
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                   <Badge className="absolute top-4 left-4 bg-white/90 text-primary hover:bg-white">{article.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl group-hover:text-accent transition-colors">
                    <a href="#" className="after:absolute after:inset-0">{article.title}</a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground flex justify-between border-t border-border/50 pt-4 mx-6 px-0">
                   <span>{article.author}</span>
                   <span>{article.date}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
