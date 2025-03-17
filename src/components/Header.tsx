import React from 'react';
import { Search, Menu, Download } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Download className="w-8 h-8" />
            <span className="text-2xl font-bold">APK Store</span>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search APKs..."
                className="w-full px-4 py-2 rounded-lg text-gray-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Search className="absolute right-3 top-2.5 text-gray-500 w-5 h-5" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-gray-200">Categories</a>
            <a href="#" className="hover:text-gray-200">Top Apps</a>
            <a href="#" className="hover:text-gray-200">New Releases</a>
          </nav>

          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}