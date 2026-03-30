"use client";
import React, { use, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Quote,
} from "lucide-react";
import { BlogList } from "@/utils/BlogList";

// Refined Markdown-style Content Renderer with Compact Styling
const renderContent = (content: string) => {
  if (!content) return null;

  const lines = content.split("\n");
  return lines.map((line, index) => {
    // Headers
    if (line.startsWith("## ")) {
      return (
        <h2
          key={index}
          className="text-2xl sm:text-2xl font-black text-gray-950 mt-12 mb-6 group flex items-center gap-3"
        >
          <span className="w-6 h-1 bg-primary-600 rounded-full group-hover:w-10 transition-all duration-500"></span>
          {line.replace("## ", "")}
        </h2>
      );
    }
    if (line.startsWith("### ")) {
      return (
        <h3
          key={index}
          className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-primary-400 pl-4 rounded-sm"
        >
          {line.replace("### ", "")}
        </h3>
      );
    }

    // Special icons/pointers
    if (line.startsWith("👉 ")) {
      return (
        <div
          key={index}
          className="flex items-start gap-4 my-8 p-6 bg-white rounded-2xl border border-primary-100 shadow-sm relative group overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-primary-600"></div>
          <div className="w-8 h-8 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
            <ArrowRight className="w-4 h-4 text-primary-600 group-hover:text-white transition-transform group-hover:translate-x-1" />
          </div>
          <p className="text-gray-900 font-bold italic text-lg leading-relaxed">
            {line.replace("👉 ", "")}
          </p>
        </div>
      );
    }

    // Success/Check items
    if (line.startsWith("✔ ") || line.startsWith("✅ ")) {
      const text = line.startsWith("✔ ")
        ? line.replace("✔ ", "")
        : line.replace("✅ ", "");
      return (
        <div key={index} className="flex items-start gap-3 my-4 group">
          <div className="w-6 h-6 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary-600 transition-all duration-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <p className="text-gray-700 font-medium text-base leading-relaxed">{text}</p>
        </div>
      );
    }

    // Error/Alert items
    if (line.startsWith("❌ ") || line.startsWith("🚨 ")) {
      return (
        <div
          key={index}
          className="flex items-start gap-4 my-6 p-5 bg-red-50 rounded-2xl border border-red-100/50"
        >
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <AlertCircle className="w-4 h-4 text-red-500" />
          </div>
          <p className="text-red-900 font-bold text-base leading-relaxed">
            {line.replace(/^[❌🚨]\s*/, "")}
          </p>
        </div>
      );
    }

    // Bullet points
    if (line.startsWith("- ") || line.startsWith("* ")) {
      return (
        <li
          key={index}
          className="ml-1 mb-3 list-none flex items-start gap-3 text-gray-700 group"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0 group-hover:scale-125 group-hover:bg-primary-600 transition-all"></div>
          <span className="text-base leading-relaxed">{line.replace(/^[-\*]\s*/, "")}</span>
        </li>
      );
    }

    // Bold text handling
    if (line.includes("**")) {
      const parts = line.split("**");
      return (
        <p key={index} className="text-gray-700 text-base sm:text-lg leading-[1.8] mb-6">
          {parts.map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i} className="font-extrabold text-gray-950 underline decoration-primary-100 decoration-2 underline-offset-4">
                {part}
              </strong>
            ) : (
              part
            ),
          )}
        </p>
      );
    }

    // Empty lines
    if (line.trim() === "") {
      return <div key={index} className="h-4"></div>;
    }

    // Normal text
    return (
      <p key={index} className="text-gray-700 text-base sm:text-lg leading-[1.8] mb-6">
        {line}
      </p>
    );
  });
};

const useScrollProgress = () => {
  React.useEffect(() => {
    const updateProgress = () => {
      const progress = document.getElementById("scroll-progress");
      if (progress) {
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        progress.style.width = `${scrolled}%`;
      }
    };
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);
};

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  useScrollProgress();
  const resolvedParams = use(params);
  const postId = parseInt(resolvedParams.id);

  const post = useMemo(() => BlogList.find((p) => p.id === postId), [postId]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#f8fcf0]">
        <h1 className="text-7xl font-black text-primary-100 mb-2 tracking-tighter">
          404
        </h1>
        <p className="text-gray-500 mb-8 text-center text-lg font-medium">
          Article not found.
        </p>
        <Link
          href="/blog"
          className="px-8 py-3 bg-primary-600 text-white rounded-xl font-bold shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all"
        >
          Back to Insights
        </Link>
      </div>
    );
  }

  const relatedPosts = BlogList.filter(
    (p) =>
      p.id !== post.id &&
      (p.category === post.category || p.id % 2 === post.id % 2),
  ).slice(0, 3);

  const readTime = `${Math.max(3, Math.ceil(((post as unknown as { content: string }).content?.length || post.description.length) / 1000))} min read`;

  return (
    <div className="min-h-screen bg-[#f8fcf0] selection:bg-primary-200 selection:text-primary-950 font-sans text-gray-900 leading-normal">
      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
        <div
          className="h-full bg-primary-600 transition-all duration-150"
          style={{ width: "0%" }}
          id="scroll-progress"
        ></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-gray-400 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Back</span>
          </Link>
          
          <div className="hidden sm:flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-gray-300">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary-600">{post.category}</span>
          </div>

          <button className="text-gray-400 hover:text-primary-600 transition-all">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </nav>

      <main className="pt-12 pb-24">
        <article>
          {/* Header Section */}
          <header className="max-w-3xl mx-auto px-6 mb-12 text-center">
            <span className="inline-block px-3 py-1 bg-white border border-primary-100 rounded-lg text-primary-600 text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 leading-[1.1] tracking-tight mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2 text-gray-900">
                <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                  <User className="w-3 h-3 text-primary-600" />
                </div>
                {post.author}
              </div>
              <div className="w-1 h-1 bg-gray-200 rounded-full hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </div>
              <div className="w-1 h-1 bg-gray-200 rounded-full hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                {readTime}
              </div>
            </div>
          </header>

          {/* Featured Image - Compact */}
          <div className="max-w-4xl mx-auto px-6 mb-16">
            <div className="relative aspect-[16/8] rounded-3xl overflow-hidden shadow-xl shadow-primary-900/5 ring-1 ring-white">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed mb-12 border-l-2 border-primary-100 pl-6 italic">
                {post.description}
              </p>

              <div className="blog-content-refined text-gray-800 leading-relaxed">
                {renderContent(post.content || "")}
              </div>

              {/* Author Signature - Compact */}
              <div className="mt-16 py-8 border-t border-gray-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white font-black text-sm">
                    IF
                  </div>
                  <div>
                    <h4 className="font-black text-gray-950 text-sm tracking-tight leading-none mb-1">
                      Indian Foodtech
                    </h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      Expert Team
                    </p>
                  </div>
                </div>
                <button className="p-2.5 rounded-xl border border-gray-100 bg-white text-gray-400 hover:text-primary-600 hover:border-primary-100 transition-all">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Newsletter Section - Small and Integrated */}
        <section className="mt-24 px-6">
          <div className="max-w-3xl mx-auto bg-gray-950 rounded-[2rem] p-8 sm:p-12 text-white relative overflow-hidden group">
            <div className="relative z-10 text-center sm:text-left flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight">
                  The <span className="text-primary-500">Nutty</span> Newsletter
                </h2>
                <p className="text-gray-400 text-sm font-medium">
                  Fresh market trends and manufacturing insights delivered monthly.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Professional email"
                  className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:bg-white/20 text-sm min-w-[200px]"
                />
                <button className="px-6 py-3 bg-primary-600 text-white rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-primary-500 transition-all">
                  Join
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Content - Compact Grid */}
        {relatedPosts.length > 0 && (
          <section className="mt-24 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-end justify-between mb-8 border-b border-gray-100 pb-4">
                <h2 className="text-xl font-black text-gray-950 tracking-tight underline decoration-primary-300 decoration-4 underline-offset-8">
                  Keep Reading
                </h2>
                <Link
                  href="/blog"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-primary-600 font-bold transition-all text-[10px] uppercase tracking-widest"
                >
                  View All <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.id}`}
                    className="group bg-white rounded-2xl p-3 border border-gray-100 hover:shadow-lg hover:shadow-primary-900/5 transition-all duration-300"
                  >
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-primary-50">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="px-1">
                      <span className="text-[9px] font-black text-primary-600 uppercase tracking-widest mb-2 block">
                        {related.category}
                      </span>
                      <h3 className="text-sm font-black text-gray-950 leading-snug group-hover:text-primary-600 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer CTA - Minimal */}
      <footer className="bg-white border-t border-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-gray-950 mb-6 tracking-tight">
            Ready to <span className="text-primary-600">Scale Up?</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-medium mb-10 max-w-lg mx-auto leading-relaxed">
            Our experts help food businesses transition from initial ideas to global market players with premium peanut butter technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-gray-950 text-white rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-primary-600 transition-all shadow-lg shadow-gray-200"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:border-primary-600 hover:text-primary-600 transition-all"
            >
              Products
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
