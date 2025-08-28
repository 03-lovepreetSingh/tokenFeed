'use client'
import React from 'react';
import { 
  Mail, 
  MessageCircle, 
  Send, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp
} from 'lucide-react';
import Logo from './../../../../public/tokenfeedLogo.png'
import Image from 'next/image';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Brand Section */}
          <div className="max-w-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
               <Image src={Logo} alt='tokenfeed Logo'/>
              </div>
              <span className="text-xl font-bold text-white">TokenFeed</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              TokenFeed is at the forefront of innovation, delivering cutting-edge crypto news, airdrops, and insights that 
              empower users to "Unlock Tomorrow." As a global leader, we drive transformative ideas that shape the future of blockchain 
              and redefine what's possible.
            </p>
            <div className="flex items-center space-x-2 text-neutral-400 mb-6">
              <Mail className="h-4 w-4" />
              <span className="text-sm">contact@tokenfeed.io</span>
            </div>
            <div className="flex items-center space-x-4">
              <MessageCircle className="h-5 w-5 hover:text-white transition-colors duration-200 cursor-pointer" />
              <Send className="h-5 w-5 hover:text-white transition-colors duration-200 cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-white transition-colors duration-200 cursor-pointer" />
              <Facebook className="h-5 w-5 hover:text-white transition-colors duration-200 cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-white transition-colors duration-200 cursor-pointer" />
              <Linkedin className="h-5 w-5 hover:text-white transition-colors duration-200 cursor-pointer" />
              <Youtube className="h-5 w-5 hover:text-white transition-colors duration-200 cursor-pointer" />
            </div>
          </div>

          {/* Footer Links - All Columns */}
          <div className="flex flex-wrap justify-between flex-1 gap-10">
            {/* Navigation Section */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Navigation</h3>
              <ul className="space-y-3">
                {[
                  "All Articles","News","Blog","Categories","Airdrops","Presales/ICO","Events","Listings","Memes","Videos","Submit"
                ].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Section */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Content</h3>
              <ul className="space-y-3">
                {[
                  "Crypto News","Short News","Press Release","Web3 Bulletin","Price Prediction"
                ].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Airdrops Section */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Airdrops</h3>
              <ul className="space-y-3">
                {[
                  "Ongoing Airdrops","Upcoming Airdrops","Potential Airdrops","Ended Airdrops","Featured Airdrops"
                ].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Presales Section */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Presales</h3>
              <ul className="space-y-3">
                {[
                  "Ongoing Presales","Upcoming Presales","Ended Presales","ICO","IDO"
                ].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              {["Terms of Service","Privacy Policy","Cookie Policy","Sitemap","Accessibility"].map((link, idx) => (
                <a key={idx} href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center space-x-4">
              <span className="text-neutral-400 text-sm">
                © 2025 TokenFeed. All rights reserved.
              </span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-neutral-800 hover:bg-neutral-700 rounded-full transition-colors duration-200 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
