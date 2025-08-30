'use client'
import React, { useState } from 'react';
import { Calendar, Eye, Heart, Share2, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  views: string;
  tags: string[];
}

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [showMoreContentTypes, setShowMoreContentTypes] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const categories = [
    'All Categories',
    'General',
    'Bitcoin',
    'Ethereum',
    'DeFi',
    'NFTs'
  ];

  const moreCategories = [
    'Altcoins',
    'Web3',
    'Gaming',
    'Metaverse',
    'Regulation',
    'Mining'
  ];

  const contentTypes = [
    'All Content Types (434)',
    'News (89)',
    'Short News (32)',
    'News & Guest News (118)',
    'Press Bulletin (6)',
    'Web Story (9)'
  ];

  const sortOptions = [
    'Latest (0)',
    'Most Viewed (134)',
    'Latest Reaction (0)'
  ];

  const filters = [
    'Featured Only (89)',
    'Breaking News (32)',
    'Top Searched (4)',
    'Trending (18)',
    'Popular (9)'
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "US Government Uses Chainlink and PayPal's PYUSD for Cross-Border Payments",
      excerpt: "The US Treasury Department has successfully completed a pilot program using Chainlink's Cross-Chain Interoperability Protocol...",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "DeFi",
      date: "23 Aug 2024",
      views: "2.1k",
      tags: ["Chainlink", "PayPal", "PYUSD"]
    },
    {
      id: 2,
      title: "Dogecoin Whales Quietly Exit as Price Drops to $0.10",
      excerpt: "Large Dogecoin holders have been steadily reducing their positions as the meme coin faces continued selling pressure...",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Altcoins",
      date: "23 Aug 2024",
      views: "1.8k",
      tags: ["Dogecoin", "Whales", "Price"]
    },
    {
      id: 3,
      title: "Arbitrum and Aztec Launch Web3 Privacy-Focused Layer 2 Solution",
      excerpt: "The collaboration aims to bring enhanced privacy features to Ethereum scaling solutions through zero-knowledge proofs...",
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Ethereum",
      date: "22 Aug 2024",
      views: "3.2k",
      tags: ["Arbitrum", "Aztec", "Privacy"]
    },
    {
      id: 4,
      title: "Is Bitcoin's Bull Run Over at $110K? Analysts Weigh In",
      excerpt: "Market experts analyze whether Bitcoin's recent surge to $110,000 marks the end of the current bull cycle...",
      image: "https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Bitcoin",
      date: "22 Aug 2024",
      views: "4.5k",
      tags: ["Bitcoin", "Bull Run", "Analysis"]
    },
    {
      id: 5,
      title: "Solana DeFi TVL Hits $15B Sparks Privacy Concerns Among Regulators",
      excerpt: "Solana's decentralized finance ecosystem reaches new heights while facing increased regulatory scrutiny...",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "DeFi",
      date: "21 Aug 2024",
      views: "2.7k",
      tags: ["Solana", "DeFi", "TVL"]
    },
    {
      id: 6,
      title: "Bitcoin Hovers Near $110K as Institutional Adoption Accelerates",
      excerpt: "Major corporations continue to add Bitcoin to their treasury reserves as the cryptocurrency maintains strong momentum...",
      image: "https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Bitcoin",
      date: "21 Aug 2024",
      views: "5.1k",
      tags: ["Bitcoin", "Institutional", "Adoption"]
    },
    {
      id: 7,
      title: "UK Crypto Users Frustrated as Banks Impose New Restrictions",
      excerpt: "Several major UK banks have implemented stricter policies on cryptocurrency transactions, causing frustration among users...",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "News",
      date: "20 Aug 2024",
      views: "1.9k",
      tags: ["UK", "Banks", "Restrictions"]
    },
    {
      id: 8,
      title: "Wyoming Rolls Out CBDC as a Stablecoin Alternative",
      excerpt: "The state of Wyoming announces its central bank digital currency initiative as an alternative to traditional stablecoins...",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "News",
      date: "20 Aug 2024",
      views: "2.3k",
      tags: ["Wyoming", "CBDC", "Stablecoin"]
    },
    {
      id: 9,
      title: "Tether Appoints Ex-White House Counsel as Chief Legal Officer",
      excerpt: "Tether strengthens its legal team with the appointment of former White House counsel to navigate regulatory challenges...",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "News",
      date: "19 Aug 2024",
      views: "1.6k",
      tags: ["Tether", "Legal", "Appointment"]
    },
    {
      id: 10,
      title: "Ether Trader Turns $150K into $48M in Just 3 Hours",
      excerpt: "A skilled trader leveraged Ethereum derivatives to achieve extraordinary returns in a matter of hours...",
      image: "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Ethereum",
      date: "19 Aug 2024",
      views: "6.8k",
      tags: ["Ethereum", "Trading", "Profit"]
    }
  ];

  const totalPages = 12;

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 7;
    
    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3 py-2 text-neutral-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
    );

    // Page numbers
    for (let i = 1; i <= Math.min(maxVisiblePages, totalPages); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-2 text-sm font-medium rounded transition-colors duration-200 ${
            currentPage === i
              ? 'bg-yellow-400 text-neutral-900'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
          }`}
        >
          {i}
        </button>
      );
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-3 py-2 text-neutral-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    );

    return pages;
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Ad Banner */}
      <div className="bg-neutral-800 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-neutral-700 rounded-lg h-20 flex items-center justify-center text-neutral-400 text-lg font-medium">
            970 × 90
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            {/* Categories */}
            <div className="bg-neutral-800 rounded-lg p-6 mb-6">
              <h3 className="text-white font-semibold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="flex items-center space-x-3 w-full text-left group hover:bg-neutral-700 p-2 rounded transition-colors duration-200"
                  >
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                      selectedCategory === category 
                        ? 'bg-yellow-400 border-yellow-400' 
                        : 'border-neutral-600 bg-neutral-700'
                    }`}>
                      {selectedCategory === category && (
                        <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
                      )}
                    </div>
                    <span className="text-neutral-300 group-hover:text-white transition-colors duration-200 text-sm">
                      {category}
                    </span>
                  </button>
                ))}
                
                {showMoreCategories && moreCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="flex items-center space-x-3 w-full text-left group hover:bg-neutral-700 p-2 rounded transition-colors duration-200"
                  >
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                      selectedCategory === category 
                        ? 'bg-yellow-400 border-yellow-400' 
                        : 'border-neutral-600 bg-neutral-700'
                    }`}>
                      {selectedCategory === category && (
                        <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
                      )}
                    </div>
                    <span className="text-neutral-300 group-hover:text-white transition-colors duration-200 text-sm">
                      {category}
                    </span>
                  </button>
                ))}
                
                <button
                  onClick={() => setShowMoreCategories(!showMoreCategories)}
                  className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors duration-200 text-sm mt-3"
                >
                  <span>{showMoreCategories ? 'Show less' : 'Show 6 more'}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showMoreCategories ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Content Type */}
            <div className="bg-neutral-800 rounded-lg p-6 mb-6">
              <h3 className="text-white font-semibold text-lg mb-4">Content Type</h3>
              <div className="space-y-2">
                {contentTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleFilter(type)}
                    className="flex items-center space-x-3 w-full text-left group hover:bg-neutral-700 p-2 rounded transition-colors duration-200"
                  >
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                      selectedFilters.includes(type) 
                        ? 'bg-yellow-400 border-yellow-400' 
                        : 'border-neutral-600 bg-neutral-700'
                    }`}>
                      {selectedFilters.includes(type) && (
                        <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
                      )}
                    </div>
                    <span className="text-neutral-300 group-hover:text-white transition-colors duration-200 text-sm">
                      {type}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort By */}
            <div className="bg-neutral-800 rounded-lg p-6 mb-6">
              <h3 className="text-white font-semibold text-lg mb-4">Sort By</h3>
              <div className="space-y-2">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {/* Handle sort selection */}}
                    className="flex items-center space-x-3 w-full text-left group hover:bg-neutral-700 p-2 rounded transition-colors duration-200"
                  >
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                      option === 'Latest (0)' 
                        ? 'bg-yellow-400 border-yellow-400' 
                        : 'border-neutral-600 bg-neutral-700'
                    }`}>
                      {option === 'Latest (0)' && (
                        <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
                      )}
                    </div>
                    <span className="text-neutral-300 group-hover:text-white transition-colors duration-200 text-sm">
                      {option}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="bg-neutral-800 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-4">Filters</h3>
              <div className="space-y-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => toggleFilter(filter)}
                    className="flex items-center space-x-3 w-full text-left group hover:bg-neutral-700 p-2 rounded transition-colors duration-200"
                  >
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                      selectedFilters.includes(filter) 
                        ? 'bg-yellow-400 border-yellow-400' 
                        : 'border-neutral-600 bg-neutral-700'
                    }`}>
                      {selectedFilters.includes(filter) && (
                        <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
                      )}
                    </div>
                    <span className="text-neutral-300 group-hover:text-white transition-colors duration-200 text-sm">
                      {filter}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Latest Crypto News</h1>
              <p className="text-neutral-400">
                Stay updated with the latest crypto market news and developments in the world of cryptocurrency.
                Discover the top blockchain stories and insights that matter to your investment decisions.
              </p>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {newsArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-neutral-800 rounded-lg overflow-hidden hover:bg-neutral-750 transition-all duration-300 group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-yellow-400 text-neutral-900 px-2 py-1 rounded text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 flex space-x-1">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-neutral-900/80 text-white px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{article.views} views</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-1 hover:text-white transition-colors duration-200">
                          <Heart className="h-3 w-3" />
                        </button>
                        <button className="p-1 hover:text-white transition-colors duration-200">
                          <Share2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center ">
           
              <div className="flex items-center content-center space-x-2">
                {renderPagination()}
                <span className="mx-2 text-neutral-500">...</span>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className="px-3 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors duration-200"
                >
                  {totalPages}
                </button>
                <button className="px-3 py-2 text-neutral-400 hover:text-white transition-colors duration-200">
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;