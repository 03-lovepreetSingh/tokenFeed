'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../../public/tokenfeedLogo.png'
import { 
  Search, 
  ChevronDown, 
  MessageSquare, 
  Linkedin, 
  Youtube,
  Settings
} from 'lucide-react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="bg-neutral-900 text-white">
      {/* Main Header */}
      <div className="border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
           
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Image src={Logo} alt='tokenFeed Logo'/>
              </div>
              <span className="text-xl font-bold">TokenFeed</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-neutral-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search News..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Right Side Icons and Buttons */}
            <div className="flex items-center space-x-4">
              {/* Settings */}
              <button className="p-2 text-neutral-400 hover:text-white transition-colors duration-200">
                <Settings className="h-5 w-5" />
              </button>

              {/* Social Icons */}
              <div className="flex items-center space-x-2">
                <button className="p-2 text-neutral-400 hover:text-white transition-colors duration-200">
                  <MessageSquare className="h-5 w-5" />
                </button>
                <button className="p-2 text-neutral-400 hover:text-white transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </button>
                <button className="p-2 text-neutral-400 hover:text-white transition-colors duration-200">
                  <Youtube className="h-5 w-5" />
                </button>
              </div>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-3">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-neutral-900 px-4 py-2 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105">
                  Login
                </button>
                <button className="border border-neutral-600 hover:border-neutral-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-neutral-800">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 h-12">
            {/* News Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('news')}
                className="flex items-center space-x-1 text-neutral-300 hover:text-white transition-colors duration-200 py-2"
              >
                <span>News</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'news' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-neutral-900 border border-neutral-700 rounded-lg shadow-xl z-50">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-150">
                      Breaking News
                    </a>
                    <a href="#" className="block px-4 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-150">
                      Market Updates
                    </a>
                    <a href="#" className="block px-4 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-150">
                      Analysis
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Airdrops Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('airdrops')}
                className="flex items-center space-x-1 text-neutral-300 hover:text-white transition-colors duration-200 py-2"
              >
                <span>Airdrops</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'airdrops' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-neutral-900 border border-neutral-700 rounded-lg shadow-xl z-50">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-150">
                      Active Airdrops
                    </a>
                    <a href="#" className="block px-4 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-150">
                      Upcoming
                    </a>
                    <a href="#" className="block px-4 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-150">
                      Completed
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Presales/ICO Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('presales')}
                className="flex items-center space-x-1 text-neutral-300 hover:text-white transition-colors duration-200 py-2"
              >
                <span>Presales/ICO</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'presales' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-neutral-900 border border-neutral-700 rounded-lg shadow-xl z-50">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-150">
                      Live Presales
                    </a>
                    <a href="#" className="block px-4 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-150">
                      Upcoming ICOs
                    </a>
                    <a href="#" className="block px-4 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-150">
                      Token Sales
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Regular Menu Items */}
            <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 py-2">
              All articles
            </a>
            <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 py-2">
              Events
            </a>
            <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 py-2">
              Listings
            </a>
            <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 py-2">
              Memes
            </a>
            <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 py-2">
              Videos
            </a>
          </div>
        </div>
      </div>

      {/* Overlay for mobile dropdown */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-20"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </div>
  );
};

export default Navbar;