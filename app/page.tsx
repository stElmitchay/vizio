"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { categories, featuredVouchers } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  ArrowDown,
  Gamepad2,
  Play,
  ShoppingBag,
  UtensilsCrossed,
  Plane,
  Bitcoin,
} from 'lucide-react';

const iconMap = {
  'Gamepad2': Gamepad2,
  'Play': Play,
  'Shopping': ShoppingBag,
  'UtensilsCrossed': UtensilsCrossed,
  'Plane': Plane,
  'Bitcoin': Bitcoin,
};

export default function Home() {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useAppStore();
  const [filteredVouchers, setFilteredVouchers] = useState(featuredVouchers);

  useEffect(() => {
    let filtered = featuredVouchers;

    if (searchQuery) {
      filtered = filtered.filter(voucher =>
        voucher.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        voucher.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        voucher.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(voucher => voucher.category === selectedCategory);
    }

    setFilteredVouchers(filtered);
  }, [searchQuery, selectedCategory]);

  const scrollToCategories = () => {
    const categoriesSection = document.getElementById('categories-section');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showProductPage = (title: string, price: string, description: string) => {
    // For now, just console.log - this would navigate to product page
    console.log('Show product:', { title, price, description });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-main-content">
          <h1 className="hero-headline-budget">budget</h1>
          <div className="hero-headline-main">
            IS RITUAL
            {/* Purple Character & Safe Graphic */}
            <svg className="hero-graphic-is" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50s50-22.4 50-50S77.6 0 50 0zM30 40c0-5.5 4.5-10 10-10s10 4.5 10 10s-4.5 10-10 10s-10-4.5-10-10zM70 40c0-5.5 4.5-10 10-10s10 4.5 10 10s-4.5 10-10 10s-10-4.5-10-10zM25 65c-2.8 0-5 2.2-5 5s2.2 5 5 5h50c2.8 0 5-2.2 5-5s-2.2-5-5-5H25z" fill="var(--accent-purple)"/>
              <rect x="30" y="60" width="40" height="30" rx="4" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
              <circle cx="50" cy="75" r="7" fill="var(--text-primary)" />
              <path d="M50 68l0 14M45 75l10 0" stroke="var(--text-primary)" strokeWidth="2" />
            </svg>

            {/* Yellow Money Bag Badge Graphic */}
            <svg className="hero-graphic-ritual" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" transform="rotate(10)">
              <circle cx="50" cy="50" r="48" fill="var(--accent-yellow)"/>
              <path d="M50 10 A40 40 0 0 1 50 90 A40 40 0 0 1 50 10Z" fill="var(--accent-peach)"/>
              <text textAnchor="middle" fill="var(--text-primary)" fontSize="6" fontFamily="var(--font-mono)">
                <tspan x="50" y="40">GIFT</tspan>
                <tspan x="50" y="50">CODE</tspan>
                <tspan x="50" y="60">MARKET</tspan>
              </text>
              <path d="M50 35 L40 50 L60 50 Z" fill="var(--text-primary)" />
              <circle cx="50" cy="65" r="12" fill="var(--text-primary)" />
            </svg>
          </div>
        </div>

        <div className="hero-bottom-content">
          <p className="hero-subheadline">
            A smart and playful way to manage digital vouchers—browse, purchase, 
            and redeem gift codes with crypto or fiat payments.
          </p>
          <div className="hero-subscribe-form">
            <Input
              placeholder="email"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input"
            />
            <Button className="btn btn-primary">Subscribe</Button>
          </div>
        </div>
        
        <div className="hero-scroll-arrow" onClick={scrollToCategories}>
          <ArrowDown className="h-6 w-6" />
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories-section" className="section">
        <h2 className="type-heading-2 section-title">Browse by Category</h2>
        <div className="grid grid-3">
          <div 
            className="card card-purple"
            onClick={() => setSelectedCategory('gaming')}
          >
            <div className="placeholder-image">Entertainment Icon</div>
            <h3 className="type-heading-3 mb-sm">Entertainment</h3>
            <p className="type-body-mono text-muted">Netflix, Spotify, Gaming</p>
          </div>
          
          <div 
            className="card card-green"
            onClick={() => setSelectedCategory('gaming')}
          >
            <div className="placeholder-image">Gaming Icon</div>
            <h3 className="type-heading-3 mb-sm">Gaming</h3>
            <p className="type-body-mono text-muted">Steam, PlayStation, Xbox</p>
          </div>

          <div 
            className="card card-peach"
            onClick={() => setSelectedCategory('crypto')}
          >
            <div className="placeholder-image">Telecom Icon</div>
            <h3 className="type-heading-3 mb-sm">Telecom</h3>
            <p className="type-body-mono text-muted">Airtime, Data bundles</p>
          </div>

          <div 
            className="card card-blue"
            onClick={() => setSelectedCategory('shopping')}
          >
            <div className="placeholder-image">Shopping Icon</div>
            <h3 className="type-heading-3 mb-sm">Shopping</h3>
            <p className="type-body-mono text-muted">Amazon, eBay, Retail</p>
          </div>

          <div 
            className="card card-yellow"
            onClick={() => setSelectedCategory('food')}
          >
            <div className="placeholder-image">Food & Delivery Icon</div>
            <h3 className="type-heading-3 mb-sm">Food & Delivery</h3>
            <p className="type-body-mono text-muted">DoorDash, Uber Eats</p>
          </div>

          <div 
            className="card card-pink"
            onClick={() => setSelectedCategory('all')}
          >
            <div className="placeholder-image">All Categories Icon</div>
            <h3 className="type-heading-3 mb-sm">All Categories</h3>
            <p className="type-body-mono text-muted">Explore everything</p>
          </div>
        </div>
      </section>

      {/* Featured Vouchers */}
      <section className="section">
        <h2 className="type-heading-2 section-title">Featured Vouchers</h2>
        <div className="grid grid-4">
          <div className="card" onClick={() => showProductPage('Netflix Gift Card', '$25.00', 'Enjoy your favorite movies and shows with a Netflix gift card!')}>
            <div className="placeholder-image">Netflix Voucher</div>
            <p className="type-label">NETFLIX</p>
            <h3 className="type-heading-3 mb-sm">Netflix Gift Card</h3>
            <p className="type-body-mono text-muted mb-md">$25.00 USD</p>
            <button className="btn btn-small btn-primary">VIEW DETAILS</button>
          </div>

          <div className="card" onClick={() => showProductPage('Steam Wallet Card', '$50.00', 'Top up your Steam wallet for games and software!')}>
            <div className="placeholder-image">Steam Voucher</div>
            <p className="type-label">STEAM</p>
            <h3 className="type-heading-3 mb-sm">Steam Wallet Card</h3>
            <p className="type-body-mono text-muted mb-md">$50.00 USD</p>
            <button className="btn btn-small btn-primary">VIEW DETAILS</button>
          </div>

          <div className="card" onClick={() => showProductPage('Amazon Gift Card', '$100.00', 'Shop anything you need on Amazon.com with this gift card.')}>
            <div className="placeholder-image">Amazon Voucher</div>
            <p className="type-label">AMAZON</p>
            <h3 className="type-heading-3 mb-sm">Amazon Gift Card</h3>
            <p className="type-body-mono text-muted mb-md">$100.00 USD</p>
            <button className="btn btn-small btn-primary">VIEW DETAILS</button>
          </div>

          <div className="card" onClick={() => showProductPage('Spotify Premium', '$10.00', 'Access millions of songs ad-free with Spotify Premium.')}>
            <div className="placeholder-image">Spotify Voucher</div>
            <p className="type-label">SPOTIFY</p>
            <h3 className="type-heading-3 mb-sm">Spotify Premium</h3>
            <p className="type-body-mono text-muted mb-md">$10.00 USD</p>
            <button className="btn btn-small btn-primary">VIEW DETAILS</button>
          </div>

          <div className="card" onClick={() => showProductPage('Xbox Gift Card', '$25.00', 'Get games, movies, TV, and more on Xbox or Windows.')}>
            <div className="placeholder-image">Xbox Voucher</div>
            <p className="type-label">XBOX</p>
            <h3 className="type-heading-3 mb-sm">Xbox Gift Card</h3>
            <p className="type-body-mono text-muted mb-md">$25.00 USD</p>
            <button className="btn btn-small btn-primary">VIEW DETAILS</button>
          </div>

          <div className="card" onClick={() => showProductPage('DoorDash Gift Card', '$50.00', 'Order food delivery from your favorite restaurants.')}>
            <div className="placeholder-image">DoorDash Voucher</div>
            <p className="type-label">DOORDASH</p>
            <h3 className="type-heading-3 mb-sm">DoorDash Gift Card</h3>
            <p className="type-body-mono text-muted mb-md">$50.00 USD</p>
            <button className="btn btn-small btn-primary">VIEW DETAILS</button>
          </div>

          <div className="card" onClick={() => showProductPage('PlayStation Store', '$75.00', 'Explore a huge library of games, add-ons, and more.')}>
            <div className="placeholder-image">PlayStation Voucher</div>
            <p className="type-label">PLAYSTATION</p>
            <h3 className="type-heading-3 mb-sm">PlayStation Store</h3>
            <p className="type-body-mono text-muted mb-md">$75.00 USD</p>
            <button className="btn btn-small btn-primary">VIEW DETAILS</button>
          </div>

          <div className="card" onClick={() => showProductPage('Google Play Gift Card', '$15.00', 'Get apps, games, movies, and books on Google Play.')}>
            <div className="placeholder-image">Google Play Voucher</div>
            <p className="type-label">GOOGLE PLAY</p>
            <h3 className="type-heading-3 mb-sm">Google Play Gift Card</h3>
            <p className="type-body-mono text-muted mb-md">$15.00 USD</p>
            <button className="btn btn-small btn-primary">VIEW DETAILS</button>
          </div>
        </div>
      </section>
    </div>
  );
}