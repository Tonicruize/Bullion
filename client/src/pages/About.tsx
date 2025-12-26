import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Users, Briefcase, Building } from "lucide-react";
import teamImage from "@assets/generated_images/professional_financial_team_meeting_in_glass_office.png";
import officeImage from "@assets/auth-banner_1766754930923.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
             <img src={teamImage} className="w-full h-full object-cover" alt="Our Team" />
             <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          </div>
          <div className="container relative z-10 px-6 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Our Heritage & Vision</h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
              Building lasting wealth through disciplined investment strategies and unwavering integrity.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="text-accent font-bold uppercase tracking-wider mb-2">Who We Are</div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">More Than Just Investment Managers</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded in 2008 during the global financial crisis, Elite Bonds Group emerged with a singular mission: to provide investors with a safe harbor in turbulent times.
                </p>
                <p>
                  We believe that capital preservation should never come at the expense of growth. By focusing on asset-backed fixed-income securities, we bridge the gap between low-yield savings accounts and high-volatility equity markets.
                </p>
                <p>
                  Our team consists of seasoned veterans from major investment banks, bringing institutional-grade expertise to private investors.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-6">
              <div className="bg-muted/30 p-8 rounded-xl text-center">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm font-medium uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="bg-muted/30 p-8 rounded-xl text-center">
                <div className="text-4xl font-bold text-accent mb-2">£2.4B</div>
                <div className="text-sm font-medium uppercase tracking-wide">Managed Assets</div>
              </div>
              <div className="bg-muted/30 p-8 rounded-xl text-center">
                <div className="text-4xl font-bold text-accent mb-2">4,500+</div>
                <div className="text-sm font-medium uppercase tracking-wide">Active Clients</div>
              </div>
              <div className="bg-muted/30 p-8 rounded-xl text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm font-medium uppercase tracking-wide">Independence</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section id="team" className="bg-slate-50 py-24 scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-primary mb-4">Leadership Team</h2>
              <p className="text-muted-foreground">Guided by decades of experience in global financial markets.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "James Sterling", role: "Chief Executive Officer", bio: "Former MD at Goldman Sachs with 25 years in fixed income markets." },
                { name: "Sarah Jenkins", role: "Head of Investments", bio: "Specialises in corporate debt structuring and sustainable finance." },
                { name: "Robert Chen", role: "Chief Risk Officer", bio: "Expert in risk modelling and regulatory compliance for global assets." }
              ].map((member, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all">
                  <div className="h-64 bg-slate-200 w-full relative group">
                     {/* Placeholder for headshot - using a colored block for now or generic pattern */}
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                       <div className="text-white">
                         <div className="font-bold text-xl">{member.name}</div>
                         <div className="text-accent text-sm font-medium">{member.role}</div>
                       </div>
                     </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {member.bio}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border flex gap-4">
                       {/* Social icons placeholder */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offices Section */}
        <section id="offices" className="py-24 container mx-auto px-6 scroll-mt-20">
           <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                 <div className="relative rounded-lg overflow-hidden shadow-2xl">
                    <img src={officeImage} alt="London Office" className="w-full h-full object-cover" />
                 </div>
              </div>
              <div className="md:w-1/2">
                 <h2 className="text-3xl font-serif font-bold text-primary mb-8">Our Offices</h2>
                 <div className="space-y-8">
                    <div className="flex gap-4">
                       <div className="bg-accent/10 p-3 h-fit rounded-lg">
                          <Building className="h-6 w-6 text-accent" />
                       </div>
                       <div>
                          <h3 className="font-bold text-lg">London HQ</h3>
                          <p className="text-muted-foreground">123 Financial District, Canary Wharf, London, E14 5AB</p>
                          <p className="text-sm text-primary font-medium mt-1">+44 (0) 20 7123 4567</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="bg-accent/10 p-3 h-fit rounded-lg">
                          <Building className="h-6 w-6 text-accent" />
                       </div>
                       <div>
                          <h3 className="font-bold text-lg">Edinburgh</h3>
                          <p className="text-muted-foreground">45 George Street, Edinburgh, EH2 2HT</p>
                          <p className="text-sm text-primary font-medium mt-1">+44 (0) 131 456 7890</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="bg-accent/10 p-3 h-fit rounded-lg">
                          <Building className="h-6 w-6 text-accent" />
                       </div>
                       <div>
                          <h3 className="font-bold text-lg">Manchester</h3>
                          <p className="text-muted-foreground">Spinningfields Square, Manchester, M3 3AP</p>
                          <p className="text-sm text-primary font-medium mt-1">+44 (0) 161 789 0123</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA */}
        <section id="careers" className="py-20 bg-primary text-white text-center scroll-mt-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold mb-6">Join Our Growing Team</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              We are always looking for exceptional talent to join our London and Edinburgh offices.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View Careers
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
