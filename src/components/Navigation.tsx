"use client";

import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 text-forest-800"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 22h20L12 2zm0 4l7 14H5l7-14z" />
              </svg>
              <span className="text-xl font-bold text-slate-900">
                Peak<span className="text-forest-700">Automations</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-slate-600 hover:text-forest-700 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#why-us"
              className="text-slate-600 hover:text-forest-700 transition-colors font-medium"
            >
              Why Us
            </a>
            <a
              href="#nearshore"
              className="text-slate-600 hover:text-forest-700 transition-colors font-medium"
            >
              Our Team
            </a>
            <a
              href="#contact"
              className="bg-forest-700 text-white px-5 py-2.5 rounded-lg hover:bg-forest-800 transition-colors font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#services"
              className="block text-slate-600 hover:text-forest-700 font-medium"
            >
              Services
            </a>
            <a
              href="#why-us"
              className="block text-slate-600 hover:text-forest-700 font-medium"
            >
              Why Us
            </a>
            <a
              href="#nearshore"
              className="block text-slate-600 hover:text-forest-700 font-medium"
            >
              Our Team
            </a>
            <a
              href="#contact"
              className="block bg-forest-700 text-white px-5 py-2.5 rounded-lg hover:bg-forest-800 transition-colors font-medium text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
