"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";
import BlogList from "@/data/BlogList.json";
import BlogCard from "@/components/BlogCard";

const blogPosts = BlogList.map((post) => ({
  ...post,
  excerpt: post.description,
  readTime: `${Math.max(3, Math.ceil(((post as unknown as { content?: string }).content?.length || post.description.length) / 1000))} min read`,
  featured: (post as unknown as { featured?: boolean }).featured || false,
}));

const categories = [
  "All",
  ...Array.from(new Set(BlogList.map((post) => post.category))),
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#e9e8ed] font-sans text-gray-900 pb-20">
      {/* HERO SECTION */}
      <section className="pt-12 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-12">
          {/* Header */}
          <div className="flex gap-3 sm:gap-4">
            <div className="bg-primary-500 h-24 sm:h-28 md:h-32 lg:h-[104px] w-1 sm:w-1.5 lg:w-1.5 rounded-2xl shrink-0"></div>
            <div className="mt-1 sm:mt-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight tracking-tight">
                The Nutty Knowledge Hub
              </h1>
              <p
                className="text-sm sm:text-base md:text-base text-primary-500 font-medium leading-relaxed"
                style={{ fontFamily: "Poppins-medium" }}
              >
                Exploring premium peanut butter manufacturing
                <br className="hidden sm:block" />
                and curated healthy recipes.
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar & Category Filters Row */}
        <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-5 lg:gap-8 border-b border-gray-200/60 mt-4">
          {/* Category Filters */}
          <div className="flex flex-wrap lg:flex-nowrap gap-2 py-3 lg:overflow-x-auto scrollbar-hide items-center w-full lg:w-auto px-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 shrink-0 ${selectedCategory === category
                  ? "bg-primary-500 text-white shadow-md"
                  : "bg-white text-gray-500 hover:text-primary-600 hover:bg-primary-50 shadow-md border border-gray-100/50"
                  }`}
                style={{ fontFamily: "Poppins-bold" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {selectedCategory === category && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  )}
                  {category}
                </span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-auto relative group sm:max-w-md lg:min-w-[360px] shrink-0">
            <div className="relative flex items-center bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 p-1 sm:p-1.5 focus-within:border-primary-300 focus-within:ring-4 focus-within:ring-primary-500/10 transition-all duration-500">
              <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full bg-gray-50 flex items-center justify-center ml-1 group-focus-within:bg-primary-50 transition-colors duration-300">
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-2 sm:px-4 py-2 sm:py-1.5 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none text-xs sm:text-sm font-medium"
                style={{ fontFamily: "Poppins-medium" }}
              />
              <button
                onClick={() => setSearchQuery(searchQuery)}
                className="bg-primary-500 text-white px-4 sm:px-7 py-2 sm:py-1.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm hover:bg-primary-600 shadow-[0_4px_12px_rgba(111,158,18,0.2)] hover:shadow-[0_6px_20px_rgba(111,158,18,0.3)] transition-all duration-300 transform active:scale-95 shrink-0"
                style={{ fontFamily: "Poppins-bold" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG CONTENT - PREMIUM CARDS */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-24 animate-fade-in bg-gray-50 rounded-3xl border border-gray-100 border-dashed">
              <Search className="w-12 h-12 text-primary-300 mx-auto mb-5" />
              <h3
                className="text-xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "Poppins-bold" }}
              >
                No articles found
              </h3>
              <p className="text-gray-500 text-sm font-medium">
                Try a different category or search term to find what you&apos;re
                looking for.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <BlogCard
                  post={post}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER SECTION (THEME WISE) */}
      <section className="mt-10 sm:mt-16 px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-3xl p-5 sm:p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
            {/* Decorative background shapes */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-primary-500/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-48 h-48 bg-primary-500/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 w-full md:max-w-lg">
              <div className="flex gap-3 sm:gap-4">
                {/* Theme-wise vertical bar */}
                <div className="bg-primary-500 w-1.5 rounded-full shrink-0"></div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-2">
                    Stay in the Nutty Loop
                  </h2>
                  <p
                    className="text-gray-500 text-sm sm:text-base leading-relaxed"
                    style={{ fontFamily: "Poppins-medium" }}
                  >
                    Get the latest industry news, manufacturing innovations, and
                    curated healthy recipes delivered straight to your inbox.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 w-full lg:w-auto shrink-0">
              {/* Premium Pill-shaped Input Container */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-1.5 bg-transparent sm:bg-gray-50/80 p-0 sm:p-1.5 rounded-2xl sm:rounded-full sm:border border-gray-100 sm:shadow-inner sm:backdrop-blur-sm focus-within:ring-4 focus-within:ring-primary-500/10 focus-within:border-primary-300 transition-all duration-300">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full sm:w-64 px-4 py-3 sm:py-2.5 rounded-xl sm:rounded-full bg-white sm:bg-transparent border border-gray-200 sm:border-none focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-medium shadow-sm sm:shadow-none focus:border-primary-300"
                  style={{ fontFamily: "Poppins-medium" }}
                />
                <button
                  className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 sm:py-2.5 rounded-xl sm:rounded-full font-bold text-sm transition-all duration-300 transform active:scale-95 whitespace-nowrap"
                  style={{ fontFamily: "Poppins-bold" }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
