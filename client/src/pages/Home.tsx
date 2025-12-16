import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-accent/30">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <WhyChooseUs />
        {/* Call to Action Section */}
        <section className="py-24 bg-muted text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-serif font-bold text-primary mb-6">Ready to Start Investing?</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                    Join thousands of satisfied investors who trust Capital Bonds Group with their financial future.
                </p>
                <button className="bg-primary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg">
                    Request Information Pack
                </button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
