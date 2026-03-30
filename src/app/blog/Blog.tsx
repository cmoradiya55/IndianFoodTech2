"use client";
import {
  ArrowRight,
  Calendar,
  Clock,
  Search,
  Tag,
  TrendingUp,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BlogList } from "@/utils/BlogList";

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
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* ===== HERO SECTION - COMPACT ===== */}
      <section className="relative bg-[#f8fcf0] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-72 h-72 bg-primary-50 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
            <TrendingUp className="w-3 h-3" />
            Insights & Recipes
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 leading-tight tracking-tight mb-4">
            The <span className="text-primary-600">Nutty</span> Knowledge Hub
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
            Exploring premium peanut butter manufacturing and curated healthy recipes.
          </p>

          {/* Search Bar - Compact */}
          <div className="max-w-xl mx-auto relative group">
            <div className="relative flex items-center bg-white rounded-xl shadow-md border border-gray-100 p-1.5 focus-within:border-primary-500 transition-all">
              <Search className="ml-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none text-sm"
              />
              <button 
                onClick={() => setSearchQuery(searchQuery)}
                className="bg-primary-600 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-primary-700 transition-all"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY FILTER - COMPACT ===== */}
      <section className="sticky top-[88px] sm:top-[96px] z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 py-4 overflow-x-auto scrollbar-hide justify-center items-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? "text-white"
                    : "text-gray-500 hover:text-primary-700 hover:bg-primary-50"
                }`}
              >
                {selectedCategory === category && (
                  <div className="absolute inset-0 bg-primary-600 rounded-full shadow-md shadow-primary-200"></div>
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG CONTENT - DENSE 3-COLUMN ===== */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 animate-fade-in">
              <Search className="w-12 h-12 text-primary-200 mx-auto mb-4" />
              <h3 className="text-xl font-black text-gray-900 mb-2">No results</h3>
              <p className="text-gray-400 text-sm">Try a different category or search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {filteredPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group block space-y-5 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Card Image - Compact but Clear */}
                  <div className="relative aspect-[16/10] bg-[#f8fcf0] rounded-2xl overflow-hidden shadow-sm transition-all duration-500 p-2 group-hover:shadow-md group-hover:-translate-y-1">
                    <div className="relative h-full w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    {/* Category Label */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/95 text-primary-700 text-[10px] font-black uppercase tracking-wider">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content - Compact */}
                  <div className="px-1 space-y-2">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-primary-500" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-primary-500" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-gray-950 leading-snug group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="pt-3 flex items-center justify-between border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-primary-50 rounded-full flex items-center justify-center">
                          <User className="w-3.5 h-3.5 text-primary-600" />
                        </div>
                        <span className="text-xs font-bold text-gray-600">{post.author}</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-primary-600 font-bold text-[10px] uppercase tracking-wider group-hover:gap-2.5 transition-all">
                        Read More
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== NEWSLETTER SECTION - CONCISE ===== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100 bg-[#f8fcf0]/30">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-[2rem] p-8 sm:p-12 shadow-sm text-center">
            <div className="relative z-10 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-950 leading-tight">
                Stay in the <span className="text-primary-600">Nutty Loop</span>
              </h2>
              <p className="text-sm text-gray-500 max-w-sm mx-auto">
                Recipes, industry news, and innovations delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-primary-500 text-sm"
                />
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all">
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
