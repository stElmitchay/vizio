'use client';

import React from 'react';

const Header = () => {
  return (
    <header className="header-override sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <a
          href="/"
          className="type-label tracking-tight"
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            textDecoration: 'none',
          }}
        >
          VIZIO
        </a>

        {/* Center: Navigation */}
        <nav className="hidden md:flex gap-10">
          {[
            { label: 'CATEGORIES', href: '#categories-section' },
            { label: 'HOW IT WORKS', href: '/how-it-works' },
            { label: 'SUPPORT', href: '/support' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="type-label hover:opacity-70 transition-opacity"
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right: Auth Buttons */}
        <div className="hidden md:flex gap-2">
          <button
            className="btn btn-secondary"
            onClick={() => console.log('Navigate to Login')}
          >
            LOGIN
          </button>
          <button
            className="btn btn-primary"
            onClick={() => console.log('Navigate to Sign Up')}
          >
            SIGN UP
          </button>
        </div>

        {/* Mobile Hamburger (optional) */}
        <button
          className="md:hidden p-2"
          onClick={() => console.log('Toggle mobile menu')}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
          }}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
