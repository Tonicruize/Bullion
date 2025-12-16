import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-accent" />
              <span className="font-serif text-lg font-bold">CAPITAL BONDS GROUP</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premier investment solutions for the modern investor. Providing stability, growth, and trust since 2008.
            </p>
            <div className="text-slate-400 text-sm">
              <p>123 Financial District</p>
              <p>Canary Wharf, London</p>
              <p>E14 5AB, United Kingdom</p>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-serif font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Investment Products</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Latest Insights</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-serif font-bold text-lg mb-6 text-white">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Risk Warning</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sitemap</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
             <h4 className="font-serif font-bold text-lg mb-6 text-white">Contact</h4>
             <p className="text-slate-400 text-sm mb-4">
               Have questions? Our team is available Mon-Fri, 9am-6pm.
             </p>
             <p className="text-accent text-lg font-medium mb-2">+44 (0) 20 7123 4567</p>
             <p className="text-slate-400 text-sm">info@capitalbondsgroup.com</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-xs text-slate-500 text-justify leading-relaxed">
          <p className="mb-4">
            <strong>Risk Warning:</strong> Investment involves risk. The value of investments and the income from them can go down as well as up and you may not get back the amount originally invested. Past performance is not a reliable indicator of future performance. The information provided on this website is for information purposes only and does not constitute financial advice. We recommend that you seek independent financial advice before making any investment decisions.
          </p>
          <p>
            Capital Bonds Group is a trading name of CBG Holdings Ltd, registered in England and Wales (Company No. 12345678). Registered Office: 123 Financial District, Canary Wharf, London, E14 5AB.
          </p>
          <div className="mt-8 text-center pt-8 border-t border-white/5">
             &copy; {new Date().getFullYear()} Capital Bonds Group. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
