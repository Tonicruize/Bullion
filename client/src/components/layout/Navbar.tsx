import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-4 border-b border-border/50"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-sm group-hover:bg-primary/20 transition-colors">
              <Shield className="h-8 w-8 text-primary" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className={cn("font-serif text-xl font-bold tracking-tight leading-none text-foreground", !isScrolled && "text-white")}>
                CAPITAL BONDS
              </span>
              <span className={cn("text-[0.65rem] uppercase tracking-widest text-muted-foreground font-medium", !isScrolled && "text-white/80")}>
                GROUP
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Investment Solutions", "Our Approach", "Insights", "About Us"].map((item) => (
            <a
              key={item}
              href="#"
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                isScrolled ? "text-foreground/80" : "text-white/90"
              )}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost" 
            className={cn("font-medium", isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10 hover:text-white")}
          >
            Client Login
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-6 shadow-lg shadow-accent/20">
            Enquire Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={cn("h-6 w-6", !isScrolled && "text-white")} />
          ) : (
            <Menu className={cn("h-6 w-6", !isScrolled && "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {["Investment Solutions", "Our Approach", "Insights", "About Us"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-lg font-medium text-foreground/80 hover:text-primary py-2 border-b border-border/50"
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Button variant="outline" className="w-full justify-center">
                Client Login
              </Button>
              <Button className="w-full justify-center bg-accent text-white">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
