import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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

  const isTransparent = !isScrolled && location === "/";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || location !== "/"
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3 border-b border-border/50"
          : "bg-transparent py-6 border-b border-white/10"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3 group relative z-50">
            <div className={cn("p-2 rounded-sm transition-colors duration-300", isTransparent ? "bg-white/10 group-hover:bg-white/20" : "bg-primary/5 group-hover:bg-primary/10")}>
              <Shield className={cn("h-8 w-8 transition-colors", isTransparent ? "text-white" : "text-primary")} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className={cn("font-serif text-xl font-bold tracking-tight leading-none transition-colors", isTransparent ? "text-white" : "text-foreground")}>
                ELITE BONDS
              </span>
              <span className={cn("text-[0.65rem] uppercase tracking-[0.2em] font-medium transition-colors", isTransparent ? "text-white/80" : "text-muted-foreground")}>
                GROUP
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav - Using NavigationMenu for Mega Menus */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className={cn("gap-2", isTransparent ? "text-white" : "text-foreground")}>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn("bg-transparent hover:bg-white/10 hover:text-accent focus:bg-white/10 data-[active]:bg-white/10 data-[state=open]:bg-white/10", !isTransparent && "hover:bg-muted focus:bg-muted data-[active]:bg-muted data-[state=open]:bg-muted text-foreground")}>
                  Investment Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                          href="/solutions"
                        >
                          <Shield className="h-6 w-6 text-white mb-4" />
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Investment Products
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Explore our range of fixed-rate bonds designed for capital preservation and growth.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/solutions#corporate" title="Corporate Bonds">
                      Fixed income from established UK entities.
                    </ListItem>
                    <ListItem href="/solutions#green" title="Green Energy">
                      Sustainable investments with government backing.
                    </ListItem>
                    <ListItem href="/solutions#property" title="Property Bonds">
                      High-yield asset-backed development loans.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn("bg-transparent hover:bg-white/10 hover:text-accent", !isTransparent && "hover:bg-muted text-foreground")}>
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/about" title="Our Heritage">
                      Learn about our history and mission since 2008.
                    </ListItem>
                    <ListItem href="/about#team" title="Leadership Team">
                      Meet the experts managing your portfolio.
                    </ListItem>
                    <ListItem href="/about#offices" title="Our Offices">
                      Visit us in London, Edinburgh, or Manchester.
                    </ListItem>
                    <ListItem href="/about#careers" title="Careers">
                      Join our growing team of financial professionals.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/approach">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 hover:text-accent cursor-pointer", !isTransparent && "hover:bg-muted text-foreground")}>
                    Our Approach
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/insights">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 hover:text-accent cursor-pointer", !isTransparent && "hover:bg-muted text-foreground")}>
                    Insights
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 hover:text-accent cursor-pointer", !isTransparent && "hover:bg-muted text-foreground")}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login">
            <Button 
              variant="ghost" 
              className={cn("font-medium", !isTransparent ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10 hover:text-white")}
            >
              Client Login
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-6 shadow-lg shadow-accent/20 border border-white/10">
              Enquire Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={cn("h-6 w-6 text-foreground")} />
          ) : (
            <Menu className={cn("h-6 w-6 transition-colors", isTransparent ? "text-white" : "text-foreground")} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl animate-in slide-in-from-right-10 flex flex-col pt-24 px-6">
          <div className="flex flex-col gap-6 text-center">
            <Link href="/solutions">
              <a className="text-2xl font-serif font-bold text-foreground" onClick={() => setMobileMenuOpen(false)}>Investment Solutions</a>
            </Link>
            <div className="flex flex-col gap-2 pl-4 text-base text-muted-foreground border-l border-border/50 ml-8 text-left">
               <Link href="/solutions#corporate"><a onClick={() => setMobileMenuOpen(false)}>Corporate Bonds</a></Link>
               <Link href="/solutions#green"><a onClick={() => setMobileMenuOpen(false)}>Green Energy</a></Link>
               <Link href="/solutions#property"><a onClick={() => setMobileMenuOpen(false)}>Property Bonds</a></Link>
            </div>

            <Link href="/about">
              <a className="text-2xl font-serif font-bold text-foreground" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            </Link>
            <div className="flex flex-col gap-2 pl-4 text-base text-muted-foreground border-l border-border/50 ml-8 text-left">
               <Link href="/about#team"><a onClick={() => setMobileMenuOpen(false)}>Team</a></Link>
               <Link href="/about#offices"><a onClick={() => setMobileMenuOpen(false)}>Offices</a></Link>
            </div>

            <Link href="/approach">
              <a className="text-2xl font-serif font-bold text-foreground" onClick={() => setMobileMenuOpen(false)}>Our Approach</a>
            </Link>
            <Link href="/insights">
              <a className="text-2xl font-serif font-bold text-foreground" onClick={() => setMobileMenuOpen(false)}>Insights</a>
            </Link>
            <Link href="/contact">
              <a className="text-2xl font-serif font-bold text-foreground" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </Link>

            <div className="flex flex-col gap-4 mt-8">
              <Link href="/login">
                <Button variant="outline" className="w-full h-12 text-lg">Client Login</Button>
              </Link>
              <Link href="/contact">
                <Button className="w-full h-12 text-lg bg-accent text-white">Enquire Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

const ListItem = ({ className, title, children, href, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href || "#"}>
          <a
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
