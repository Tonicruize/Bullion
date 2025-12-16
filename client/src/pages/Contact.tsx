import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Our team of investment specialists is ready to answer your questions and help you build a stronger portfolio.
            </p>
          </div>
        </section>

        <section className="py-20 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <div className="mb-10">
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you are an existing client or looking to make your first investment, we are here to help. Schedule a call or visit our offices.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg text-accent">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Phone</div>
                      <div className="text-muted-foreground">+44 (0) 20 7123 4567</div>
                      <div className="text-xs text-muted-foreground mt-1">Mon-Fri, 9am - 6pm GMT</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg text-accent">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Email</div>
                      <div className="text-muted-foreground">invest@capitalbondsgroup.com</div>
                      <div className="text-xs text-muted-foreground mt-1">We aim to respond within 24 hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg text-accent">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">London Head Office</div>
                      <div className="text-muted-foreground">
                        123 Financial District<br />
                        Canary Wharf<br />
                        London, E14 5AB
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-slate-100 rounded-xl border border-border flex items-center justify-center text-muted-foreground">
                [Interactive Map Integration]
              </div>
            </div>

            {/* Form */}
            <div className="bg-card shadow-xl border border-border rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">Send us a Message</h3>
              <p className="text-muted-foreground mb-8">Fill out the form below and an advisor will contact you shortly.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input placeholder="+44 7700 900000" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Interest</label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>Corporate Bonds</option>
                    <option>ISA Investments</option>
                    <option>Wealth Management</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="How can we help you?" className="min-h-[120px]" />
                </div>

                <Button className="w-full bg-accent text-white hover:bg-accent/90 py-6 text-lg">
                  Submit Enquiry
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to our Privacy Policy. Your data is secure.
                </p>
              </form>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
