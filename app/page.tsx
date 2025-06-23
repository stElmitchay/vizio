import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VoucherCard } from "@/components/voucher-card";
import { CharacterSafeGraphic } from "@/components/character-safe-graphic";
import { MoneyBagGraphic } from "@/components/money-bag-graphic";
import { ArrowDown } from "lucide-react";

export default function Home() {
  const categories = [
    { name: "Entertainment", description: "Netflix, Spotify, Gaming", color: "bg-accent-purple" },
    { name: "Gaming", description: "Steam, PlayStation, Xbox", color: "bg-accent-green" },
    { name: "Telecom", description: "Airtime, Data bundles", color: "bg-accent-peach" },
    { name: "Shopping", description: "Amazon, eBay, Retail", color: "bg-accent-blue" },
    { name: "Food & Delivery", description: "DoorDash, Uber Eats", color: "bg-accent-yellow" },
    { name: "All Categories", description: "Explore everything", color: "bg-accent-pink" },
  ];

  const vouchers = [
    { brand: "Netflix", name: "Netflix Gift Card", price: "$25.00 USD" },
    { brand: "Steam", name: "Steam Wallet Card", price: "$50.00 USD" },
    { brand: "Amazon", name: "Amazon Gift Card", price: "$100.00 USD" },
    { brand: "Spotify", name: "Spotify Premium", price: "$10.00 USD" },
    { brand: "Xbox", name: "Xbox Gift Card", price: "$25.00 USD" },
    { brand: "DoorDash", name: "DoorDash Gift Card", price: "$50.00 USD" },
    { brand: "PlayStation", name: "PlayStation Store", price: "$75.00 USD" },
    { brand: "Google Play", name: "Google Play Gift Card", price: "$15.00 USD" },
  ];

  return (
    <div className="bg-primary-bg min-h-screen">
      <section className="relative max-w-7xl mx-auto my-8 sm:my-12 px-4 sm:px-8 py-8 bg-highlight-bright border-2 border-text-primary rounded-lg shadow-layer overflow-hidden">
        
        {/* Main content area */}
        <div className="flex flex-col">
          
          {/* Hero text area */}
          <div className="flex flex-col justify-center items-center relative">
            
            {/* "budget" text */}
            <div className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl lg:text-4xl uppercase text-text-primary mb-2 italic">
              wrapped
            </div>
            
            {/* "IS RITUAL" with graphics */}
            <div className="w-full relative flex items-center justify-center overflow-hidden mb-6">
              <div className="font-mono font-bold uppercase text-text-primary leading-none flex items-center justify-center w-full" style={{ fontSize: 'clamp(3rem, 15vw, 10rem)' }}>
                <span>IN</span>
                
                <CharacterSafeGraphic className="mx-2 relative z-10" style={{ width: 'clamp(2.5rem, 10vw, 8rem)', height: 'clamp(2.5rem, 10vw, 8rem)' }} />
                
                <span>LIGHT</span>
                
                <MoneyBagGraphic className="ml-2 relative z-10" style={{ width: 'clamp(2rem, 8vw, 7rem)', height: 'clamp(2rem, 8vw, 7rem)' }} />
              </div>
            </div>

            {/* Email form */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
              <Input 
                type="email" 
                placeholder="email" 
                className="w-full h-12 bg-highlight-bright border-2 border-text-primary rounded-md shadow-layer font-mono text-base px-4 focus:shadow-[2px_2px_0px_#4a4540] focus:translate-x-0.5 focus:translate-y-0.5 transition-all focus:outline-none focus:ring-0"
              />
              <Button className="w-full sm:w-auto h-12 px-6 bg-text-primary text-highlight-bright border-2 border-text-primary rounded-md shadow-layer font-mono uppercase text-base tracking-wider hover:shadow-[2px_2px_0px_#4a4540] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                Subscribe
              </Button>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-8 pt-8">
            <div className="w-12 h-12 rounded-full border-2 border-text-primary bg-highlight-bright shadow-layer flex items-center justify-center cursor-pointer hover:shadow-[2px_2px_0px_#4a4540] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
              <ArrowDown className="w-6 h-6 text-text-primary" />
            </div>
            <div className="max-w-md">
              <p className="font-sans text-base text-text-secondary leading-relaxed text-center md:text-right">
                
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-12 p-8 bg-highlight-bright border-2 border-text-primary rounded-lg shadow-layer">
        <h2 className="font-mono text-3xl font-medium uppercase tracking-wide mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.name} className={`p-6 border-2 border-text-primary rounded-lg shadow-layer cursor-pointer ${category.color}`}>
              <div className="font-mono text-sm uppercase mb-2">{category.name} Icon</div>
              <h3 className="font-sans text-xl font-semibold mb-2">{category.name}</h3>
              <p className="font-mono text-sm text-text-muted">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-12 p-8 bg-highlight-bright border-2 border-text-primary rounded-lg shadow-layer">
        <h2 className="font-mono text-3xl font-medium uppercase tracking-wide mb-6">Featured Vouchers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {vouchers.map((voucher) => (
            <VoucherCard key={voucher.name} {...voucher} />
          ))}
        </div>
      </section>
    </div>
  );
}