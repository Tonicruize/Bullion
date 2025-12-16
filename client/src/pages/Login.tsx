import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, ArrowLeft } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Panel - Image/Brand */}
      <div className="hidden lg:flex w-1/2 bg-primary relative items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-primary to-primary" />
        <div className="relative z-10 text-white max-w-lg">
          <Shield className="h-16 w-16 text-accent mb-8" />
          <h1 className="text-5xl font-serif font-bold mb-6">Welcome Back</h1>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Access your portfolio performance, view documentation, and discover new investment opportunities.
          </p>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
            <p className="text-sm font-light">
              "The most important quality for an investor is temperament, not intellect."
            </p>
            <p className="text-xs font-bold mt-2 text-accent">— Warren Buffett</p>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-24 justify-center">
        <Link href="/">
          <a className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </a>
        </Link>
        
        <div className="max-w-md w-full mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">Client Login</h2>
            <p className="text-muted-foreground">Please enter your credentials to access the portal.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="name@company.com" className="h-12" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-sm text-accent hover:underline font-medium">Forgot password?</a>
              </div>
              <Input id="password" type="password" className="h-12" />
            </div>

            <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90">Sign In</Button>
          </form>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Don't have an account yet?</p>
            <Link href="/contact">
              <a className="text-accent font-bold hover:underline">Request Access</a>
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-xs text-center text-muted-foreground">
            <p>Protected by 256-bit SSL Encryption.</p>
            <p>Unauthorised access is prohibited.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
