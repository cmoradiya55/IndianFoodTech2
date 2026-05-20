"use client";
import { ArrowRight, Calendar, Clock, Search, Tag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BlogList from "@/data/BlogList.json";

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
      {/* HERO & HEADER SECTION */}
      <section className="pt-12 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-12">
          {/* Header */}
          <div className="flex gap-3 sm:gap-4">
            <div className="bg-primary-500 h-24 sm:h-28 md:h-32 lg:h-[104px] w-1 sm:w-1.5 lg:w-1.5 rounded-2xl flex-shrink-0"></div>
            <div className="mt-1 sm:mt-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight tracking-tight">
                The Nutty Knowledge Hub
              </h1>
              <p
                className="text-sm sm:text-base md:text-base text-primary-500 font-medium leading-relaxed"
                style={{ fontFamily: "Inter_18pt-medium" }}
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
                className={`relative px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  selectedCategory === category
                    ? "bg-primary-500 text-white shadow-md"
                    : "bg-white text-gray-500 hover:text-primary-600 hover:bg-primary-50 shadow-md border border-gray-100/50"
                }`}
                style={{ fontFamily: "Inter_18pt-bold" }}
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
          <div className="w-full lg:w-auto relative group sm:max-w-md lg:min-w-[360px] flex-shrink-0">
            <div className="relative flex items-center bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 p-1 sm:p-1.5 focus-within:border-primary-300 focus-within:ring-4 focus-within:ring-primary-500/10 transition-all duration-500">
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 rounded-full bg-gray-50 flex items-center justify-center ml-1 group-focus-within:bg-primary-50 transition-colors duration-300">
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-2 sm:px-4 py-2 sm:py-1.5 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none text-xs sm:text-sm font-medium"
                style={{ fontFamily: "Inter_18pt-medium" }}
              />
              <button
                onClick={() => setSearchQuery(searchQuery)}
                className="bg-primary-500 text-white px-4 sm:px-7 py-2 sm:py-1.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm hover:bg-primary-600 shadow-[0_4px_12px_rgba(111,158,18,0.2)] hover:shadow-[0_6px_20px_rgba(111,158,18,0.3)] transition-all duration-300 transform active:scale-95 flex-shrink-0"
                style={{ fontFamily: "Inter_18pt-bold" }}
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
                style={{ fontFamily: "Inter_18pt-bold" }}
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
              {filteredPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group flex flex-col bg-white rounded-[2rem] p-4 shadow-lg transition-all duration-500 border border-gray-100/80 hover:border-primary-300 hover:-translate-y-2 relative overflow-hidden h-full"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Card Image Container */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-[1.5rem] overflow-hidden mb-6 flex-shrink-0 border border-gray-100/50 group-hover:border-primary-200/50 transition-colors duration-500">
                    <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-contain transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Category Label Over Image */}
                    <div
                      className="absolute top-4 left-4 z-20"
                      style={{ fontFamily: "Inter_18pt-medium" }}
                    >
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-primary-600 text-[10px] font-black uppercase tracking-widest shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-white/50 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-500">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Text Content */}
                  <div className="flex flex-col flex-grow relative z-10 px-2 sm:px-3 pb-2">
                    {/* Meta Data */}
                    <div
                      className="flex items-center gap-4 text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-4"
                      style={{ fontFamily: "Inter_18pt-semibold" }}
                    >
                      <span className="flex items-center gap-2 bg-gray-50 px-2.5 py-1 rounded-lg group-hover:text-primary-500 transition-colors duration-300">
                        <Calendar className="w-3.5 h-3.5 text-primary-500" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-2 bg-gray-50 px-2.5 py-1 rounded-lg group-hover:text-primary-500 transition-colors duration-300">
                        <Clock className="w-3.5 h-3.5 text-primary-500" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-[1.4] transition-colors duration-300 line-clamp-2 mb-3">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      className="text-gray-500 text-sm leading-[1.7] line-clamp-2 mb-6 flex-grow"
                      style={{ fontFamily: "Inter_18pt-medium" }}
                    >
                      {post.excerpt}
                    </p>

                    {/* Footer / Author */}
                    <div className="pt-5 flex items-center justify-between border-t border-gray-100/80 mt-auto group-hover:border-primary-100 transition-colors duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-500 shadow-sm border border-gray-100 group-hover:border-primary-500">
                          <User className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <span
                          className="text-sm font-bold text-gray-700 group-hover:text-primary-700 transition-colors duration-300"
                          style={{ fontFamily: "Inter_18pt-bold" }}
                        >
                          {post.author}
                        </span>
                      </div>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-50 group-hover:bg-primary-500 transition-all duration-500 group-hover:shadow-[0_4px_12px_rgba(111,158,18,0.3)]">
                        <ArrowRight className="w-4 h-4 text-primary-600 group-hover:text-white group-hover:-rotate-45 transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                </Link>
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
                <div className="bg-primary-500 w-1.5 rounded-full flex-shrink-0"></div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-2">
                    Stay in the Nutty Loop
                  </h2>
                  <p
                    className="text-gray-500 text-sm sm:text-base leading-relaxed"
                    style={{ fontFamily: "Inter_18pt-medium" }}
                  >
                    Get the latest industry news, manufacturing innovations, and
                    curated healthy recipes delivered straight to your inbox.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 w-full lg:w-auto flex-shrink-0">
              {/* Premium Pill-shaped Input Container */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-1.5 bg-transparent sm:bg-gray-50/80 p-0 sm:p-1.5 rounded-2xl sm:rounded-full sm:border border-gray-100 sm:shadow-inner sm:backdrop-blur-sm focus-within:ring-4 focus-within:ring-primary-500/10 focus-within:border-primary-300 transition-all duration-300">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full sm:w-64 px-4 py-3 sm:py-2.5 rounded-xl sm:rounded-full bg-white sm:bg-transparent border border-gray-200 sm:border-none focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-medium shadow-sm sm:shadow-none focus:border-primary-300"
                  style={{ fontFamily: "Inter_18pt-medium" }}
                />
                <button
                  className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 sm:py-2.5 rounded-xl sm:rounded-full font-bold text-sm transition-all duration-300 transform active:scale-95 whitespace-nowrap"
                  style={{ fontFamily: "Inter_18pt-bold" }}
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
