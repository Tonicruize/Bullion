import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logoImage from "@assets/Untitled-1_1766750699566.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

  const isTransparent = false;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        isScrolled || location !== "/"
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3 border-b border-border/50"
          : "bg-transparent py-6 border-b border-white/10"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3 group relative z-50">
            <div className={cn("rounded-sm overflow-hidden transition-all duration-300", isTransparent ? "shadow-lg" : "")}>
              <img src={logoImage} alt="Elite Bonds Group Logo" className="h-6 lg:h-8 w-auto object-contain" />
            </div>
          </a>
        </Link>

        {/* Desktop Nav - Using NavigationMenu for Mega Menus */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className={cn("gap-2", isTransparent ? "text-white" : "text-foreground")}>
              
              <NavigationMenuItem>
                <Link href="/solutions">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 hover:text-accent cursor-pointer", !isTransparent && "hover:bg-muted text-foreground")}>
                    Investment Solutions
                  </NavigationMenuLink>
                </Link>
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
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <button
              className="lg:hidden p-2 text-foreground relative z-50 focus:outline-none"
            >
              <Menu className={cn("h-6 w-6 transition-colors", isTransparent ? "text-white" : "text-foreground")} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-l border-border/50 bg-background/95 backdrop-blur-xl z-[150]">
            <SheetHeader className="flex items-center justify-between px-6 py-6 border-b border-border/50">
               <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
               <Link href="/">
                  <a className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                     <img src={logoImage} alt="Elite Bonds Group Logo" className="h-6 w-auto object-contain" />
                  </a>
               </Link>
            </SheetHeader>

            <div className="flex flex-col gap-6 px-6 pt-8 pb-12 overflow-y-auto h-[calc(100vh-80px)]">
              <Link href="/solutions">
                <a className="text-xl font-serif font-bold text-foreground hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Investment Solutions</a>
              </Link>
              
              <Link href="/about">
                <a className="text-xl font-serif font-bold text-foreground hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</a>
              </Link>
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-accent/20 ml-2">
                 <Link href="/about#team"><a className="text-base text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Our Team</a></Link>
                 <Link href="/about#offices"><a className="text-base text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Global Offices</a></Link>
              </div>

              <Link href="/approach">
                <a className="text-xl font-serif font-bold text-foreground hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Our Approach</a>
              </Link>
              
              <Link href="/insights">
                <a className="text-xl font-serif font-bold text-foreground hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Insights</a>
              </Link>
              
              <Link href="/contact">
                <a className="text-xl font-serif font-bold text-foreground hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </Link>

              <div className="mt-auto pt-8 flex flex-col gap-4">
                <Link href="/login">
                  <Button variant="outline" className="w-full h-12 text-lg font-medium border-primary/20 hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>Client Login</Button>
                </Link>
                <Link href="/contact">
                  <Button className="w-full h-12 text-lg bg-accent text-white hover:bg-accent/90 shadow-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Enquire Now</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
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
