import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Investment Solutions", href: "/solutions" },
    { label: "Our Approach", href: "/approach" },
    { label: "Insights", href: "/insights" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  // Helper to check if link is active
  const isActive = (path: string) => location === path;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || location !== "/"
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
              <span className={cn("font-serif text-xl font-bold tracking-tight leading-none text-foreground", !isScrolled && location === "/" && "text-white")}>
                CAPITAL BONDS
              </span>
              <span className={cn("text-[0.65rem] uppercase tracking-widest text-muted-foreground font-medium", !isScrolled && location === "/" && "text-white/80")}>
                GROUP
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent relative group",
                  isActive(item.href) ? "text-accent" : (isScrolled || location !== "/" ? "text-foreground/80" : "text-white/90")
                )}
              >
                {item.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full",
                  isActive(item.href) && "w-full"
                )} />
              </a>
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button 
              variant="ghost" 
              className={cn("font-medium", isScrolled || location !== "/" ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10 hover:text-white")}
            >
              Client Login
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-6 shadow-lg shadow-accent/20">
              Enquire Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={cn("h-6 w-6", !isScrolled && location === "/" && "text-white")} />
          ) : (
            <Menu className={cn("h-6 w-6", !isScrolled && location === "/" && "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="text-lg font-medium text-foreground/80 hover:text-primary py-2 border-b border-border/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Link href="/login">
                <Button variant="outline" className="w-full justify-center">
                  Client Login
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="w-full justify-center bg-accent text-white">
                  Enquire Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
