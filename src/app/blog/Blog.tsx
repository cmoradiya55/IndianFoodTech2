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

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-gray-900">
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-[#1D2C00] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-600/8 rounded-full blur-[100px]"></div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2390b83c' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-500/15 border border-primary-500/25 text-primary-400 text-sm font-semibold tracking-wider uppercase mb-6">
            <TrendingUp className="w-4 h-4" />
            Our Blog
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-5">
            Insights, Recipes &{" "}
            <span className="text-primary-400">Nutty Knowledge</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Explore health tips, industry insights, creative recipes, and
            everything you need to know about peanut butter.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-full bg-white/10 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:bg-white/15 transition-all backdrop-blur-sm text-base"
            />
          </div>
        </div>
      </section>

      {/* ===== CATEGORY FILTER ===== */}
      <section className="sticky top-[88px] sm:top-[96px] z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary-500 text-white shadow-md shadow-primary-200"
                    : "bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED POST ===== */}
      {selectedCategory === "All" && !searchQuery && featuredPost && (
        <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-8 bg-primary-500 rounded-full"></div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                Featured Article
              </h2>
            </div>

            <Link
              href={`/blog/${featuredPost.id}`}
              className="group block relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent"></div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                      <Tag className="w-3 h-3" />
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-4 group-hover:text-primary-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-base">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-primary-600" />
                      </div>
                      <span className="font-medium">{featuredPost.author}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ===== BLOG GRID ===== */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-[#f0f4ea]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-primary-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900">
              {selectedCategory === "All"
                ? "Latest Articles"
                : selectedCategory}
            </h2>
            <span className="ml-auto text-sm text-gray-500 font-medium">
              {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500">
                Try a different search term or category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(selectedCategory === "All" && !searchQuery
                ? regularPosts
                : filteredPosts
              ).map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-1"
                >
                  {/* Card Image */}
                  <div className="relative overflow-hidden">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-bold shadow-sm">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-primary-100 rounded-full flex items-center justify-center">
                          <User className="w-3.5 h-3.5 text-primary-600" />
                        </div>
                        <span className="text-xs font-medium text-gray-600">
                          {post.author}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-primary-600 font-semibold text-xs group-hover:gap-2.5 transition-all">
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

      {/* ===== NEWSLETTER CTA ===== */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1D2C00] rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
            {/* Decorative pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2390b83c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px]"></div>

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Stay in the <span className="text-primary-400">Nutty Loop</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Get the latest articles, recipes, and industry insights
                delivered straight to your inbox. No spam, just nutty goodness.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3.5 rounded-full bg-white/10 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-all"
                />
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-primary-500/20 hover:-translate-y-0.5 whitespace-nowrap">
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
