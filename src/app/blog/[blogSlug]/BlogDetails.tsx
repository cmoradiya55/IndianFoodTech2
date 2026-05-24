"use client";
import React, { use, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  Share2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Tag,
  Copy,
  Check,
  X,
} from "lucide-react";
import BlogList from "@/data/BlogList.json";
import BlogCard from "@/components/BlogCard";
import ImagePreviewModal from "@/components/ImagePreviewModal";
import AllIconComponent from "../../../../public/AllIconComponent";

// Theme-consistent Content Renderer
const renderContent = (content: string) => {
  if (!content) return null;

  const lines = content.split("\n");
  return lines.map((line, index) => {
    // H2 Headers
    if (line.startsWith("## ")) {
      return (
        <div key={index} className="flex gap-2 sm:gap-3 mt-4 sm:mt-5 mb-2 sm:mb-3">
          <div className="bg-primary-500 w-1 sm:w-1.5 rounded-2xl shrink-0"></div>
          <h2
            className="text-lg sm:text-xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            {line.replace("## ", "")}
          </h2>
        </div>
      );
    }

    // H3 Headers
    if (line.startsWith("### ")) {
      return (
        <h3
          key={index}
          className="text-base sm:text-lg font-bold text-gray-900 mt-3 sm:mt-4 mb-2 sm:mb-2"
          style={{ fontFamily: "NotoSerif-semibold" }}
        >
          {line.replace("### ", "")}
        </h3>
      );
    }

    // Pointer/CTA highlights
    if (line.startsWith("👉 ")) {
      return (
        <div
          key={index}
          className="my-3 sm:my-4"
        >
          <div
            className="bg-[#1D2C00] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-normal text-center inline-block"
            style={{ fontFamily: "Poppins-regular" }}
          >
            {line.replace("👉 ", "")}
          </div>
        </div>
      );
    }

    // Success/Check items
    if (line.startsWith("✔ ") || line.startsWith("✅ ")) {
      const text = line.startsWith("✔ ")
        ? line.replace("✔ ", "")
        : line.replace("✅ ", "");
      return (
        <div
          key={index}
          className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-sm flex items-start gap-2 sm:gap-3 mb-1.5 sm:mb-2"
        >
          <span className="text-primary-500 text-sm sm:text-base mt-0.5 shrink-0">
            <CheckCircle2 className="w-4 h-4 sm:w-4 sm:h-4" />
          </span>
          <p
            className="text-gray-800 text-xs sm:text-sm leading-relaxed font-medium"
            style={{ fontFamily: "Poppins-medium" }}
          >
            {text}
          </p>
        </div>
      );
    }

    // Error/Alert items
    if (line.startsWith("❌ ") || line.startsWith("🚨 ")) {
      return (
        <div
          key={index}
          className="bg-red-50 rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-sm flex items-start gap-2 sm:gap-3 mb-1.5 sm:mb-2 border border-red-100"
        >
          <span className="text-red-500 text-sm sm:text-base mt-0.5 shrink-0">
            <AlertCircle className="w-4 h-4 sm:w-4 sm:h-4" />
          </span>
          <p
            className="text-red-900 text-xs sm:text-sm leading-relaxed font-medium"
            style={{ fontFamily: "Poppins-medium" }}
          >
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
          className="ml-1 mb-1 sm:mb-1.5 list-none flex items-start gap-2 sm:gap-3 text-gray-700"
        >
          <span className="text-primary-500 text-sm sm:text-base mt-0.5 shrink-0">⦿</span>
          <span
            className="text-xs sm:text-sm leading-relaxed"
            style={{ fontFamily: "Poppins-regular" }}
          >
            {line.replace(/^[-*]\s*/, "")}
          </span>
        </li>
      );
    }

    // Bold text handling
    if (line.includes("**")) {
      const parts = line.split("**");
      return (
        <p
          key={index}
          className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3"
          style={{ fontFamily: "Poppins-regular" }}
        >
          {parts.map((part, i) =>
            i % 2 === 1 ? (
              <strong
                key={i}
                className="font-bold text-gray-900"
                style={{ fontFamily: "Poppins-bold" }}
              >
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
      return <div key={index} className="h-1 sm:h-2"></div>;
    }

    // Normal text
    return (
      <p
        key={index}
        className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3"
        style={{ fontFamily: "Poppins-regular" }}
      >
        {line}
      </p>
    );
  });
};

// Scroll progress hook
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

export default function BlogDetails({
  blogSlug,
}: {
  blogSlug: string;
}) {
  useScrollProgress();
  const postSlug = blogSlug;
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const post = useMemo(() => BlogList.find((p) => p.slug === postSlug), [postSlug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#e9e8ed]">
        <h1
          className="text-6xl sm:text-7xl font-bold text-primary-300 mb-4 tracking-tighter"
          style={{ fontFamily: "NotoSerif-semibold" }}
        >
          404
        </h1>
        <p
          className="text-gray-500 mb-8 text-center text-sm sm:text-base font-medium"
          style={{ fontFamily: "Poppins-medium" }}
        >
          Article not found.
        </p>
        <Link
          href="/blog"
          className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-normal text-xs sm:text-sm transition-all duration-300 shadow-md"
          style={{ fontFamily: "Poppins-medium" }}
        >
          Back to Blog
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
    <div className="min-h-screen bg-[#e9e8ed] font-sans text-gray-900 leading-normal">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
        <div
          className="h-full bg-primary-500 transition-all duration-150"
          style={{ width: "0%" }}
          id="scroll-progress"
        ></div>
      </div>

      {/* HERO HEADER SECTION */}
      <section className="pb-6 sm:px-4 md:px-8 lg:px-8">
        <div
          className="max-w-7xl mx-auto container-custom"
          style={{ fontFamily: "NotoSerif-semibold" }}
        >
          {/* Theme header with green bar */}
          <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="mt-1 sm:mt-2">
              {/* Category badge */}
              <div className="mb-3 sm:mb-4">
                <span
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white text-primary-600 text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-sm border border-gray-100"
                  style={{ fontFamily: "Poppins-bold" }}
                >
                  <Tag className="w-3 h-3" />
                  {post.category}
                </span>
              </div>
              <div className="flex gap-3 sm:gap-4 w-full max-w-5xl">
                <div className="bg-primary-500 h-24 sm:h-28 md:h-32 lg:h-[104px] w-1 sm:w-1.5 lg:w-1.5 rounded-2xl shrink-0"></div>
                <div className="mt-1 sm:mt-2">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight tracking-tight">
                    {post.title}
                  </h1>
                  <p
                    className="text-sm sm:text-base md:text-base text-primary-500 font-medium leading-relaxed"
                    style={{ fontFamily: "Poppins-medium" }}
                  >
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Meta info row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <span
              className="flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold text-gray-600 shadow-sm border border-gray-100"
              style={{ fontFamily: "Poppins-semibold" }}
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary-50 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-500" />
              </div>
              {post.author}
            </span>
            <span
              className="flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold text-gray-500 shadow-sm border border-gray-100"
              style={{ fontFamily: "Poppins-semibold" }}
            >
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-500" />
              {post.date}
            </span>
            <span
              className="flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold text-gray-500 shadow-sm border border-gray-100"
              style={{ fontFamily: "Poppins-semibold" }}
            >
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-500" />
              {readTime}
            </span>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="px-3 sm:px-4 md:px-8 lg:px-8 mb-6 sm:mb-8">
        <div className="max-w-4xl container-custom">
          <div
            className="overflow-hidden cursor-pointer group/image"
            onClick={() => setIsPreviewOpen(true)}
          >
            <div className="relative aspect-[16/9] sm:aspect-[16/8] rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-contain transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="px-3 sm:px-4 md:px-8 lg:px-8 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto container-custom">
          <div className="max-w-4xl">
            {/* Lead description */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-6 shadow-sm border border-[#D2D1D6] mb-6 sm:mb-6">
              <p
                className="text-gray-600 text-sm sm:text-base md:text-base leading-relaxed font-medium"
                style={{ fontFamily: "Poppins-medium" }}
              >
                {post.description}
              </p>
            </div>

            {/* Content body */}
            <div className="blog-content">
              {renderContent(post.content || "")}
            </div>

            {/* Author signature card */}
            <div className="mt-6 sm:mt-6 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-4 shadow-sm border border-[#D2D1D6] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 transition-all duration-300 relative overflow-hidden">
              <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                <div
                  className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0"
                  style={{ fontFamily: "Poppins-bold" }}
                >
                  IF
                </div>
                <div className="min-w-0">
                  <h4
                    className="font-bold text-gray-900 text-sm sm:text-base leading-none mb-1 truncate"
                    style={{ fontFamily: "NotoSerif-semibold" }}
                  >
                    Indian Foodtech
                  </h4>
                  <p
                    className="text-[10px] sm:text-xs text-gray-400 font-medium truncate"
                    style={{ fontFamily: "Poppins-regular" }}
                  >
                    Expert Team
                  </p>
                </div>
              </div>

              {/* Premium Social Sharing Integration */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <div className={`flex items-center gap-1.5 transition-all duration-500 origin-right ${showShareMenu ? "opacity-100 max-w-[300px] translate-x-0" : "opacity-0 max-w-0 translate-x-4 overflow-hidden pointer-events-none"}`}>
                  <button
                    onClick={handleCopyLink}
                    className="p-1 rounded-full border border-gray-100 bg-gray-50 text-gray-600 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-all duration-200 text-xs font-semibold relative"
                    title="Copy Link"
                  >
                    {copied ? (
                      <Check className="text-[10px] text-primary-600 px-1 font-bold" />
                    ) : (
                      <Copy className="text-[10px] text-primary-600 px-1 font-bold" />
                    )}
                  </button>
                  <Link
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + (typeof window !== "undefined" ? window.location.href : ""))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full border border-gray-100 bg-gray-50 text-emerald-600 hover:bg-primary-50 hover:border-primary-200 transition-all duration-200"
                    title="Share on WhatsApp"
                  >
                    <AllIconComponent icon="whatsAppIcon" width={20} height={20} className="fill-current" />
                  </Link>
                  <Link
                    href={`viber://forward?text=${encodeURIComponent(post.title + " - " + (typeof window !== "undefined" ? window.location.href : ""))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-gray-100 bg-gray-50 text-violet-600 hover:bg-violet-50 hover:border-violet-200 transition-all duration-200"
                    title="Share on Viber"
                  >
                    <AllIconComponent icon="viberIcon" width={16} height={16} className="fill-current" />
                  </Link>
                  <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-gray-100 bg-gray-50 text-primary-600 hover:bg-primary-50 hover:border-primary-200 transition-all duration-200"
                    title="Share on Facebook"
                  >
                    <AllIconComponent icon="facebookIcon" width={16} height={16} className="fill-current" />
                  </Link>
                  <Link
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-gray-100 bg-gray-50 text-primary-500 hover:bg-primary-50 hover:border-primary-200 transition-all duration-200"
                    title="Share on X"
                  >
                    <AllIconComponent icon="xIcon" width={16} height={16} className="fill-current" />
                  </Link>
                  <Link
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-gray-100 bg-gray-50 text-blue-700 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
                    title="Share on LinkedIn"
                  >
                    <AllIconComponent icon="linkedinIcon" width={16} height={16} className="fill-current" />
                  </Link>

                </div>

                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className={`p-2.5 rounded-full border transition-all duration-300 bg-primary-500 text-white`}
                  title="Share Article"
                >
                  {showShareMenu ? <X className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DARK ACCENT SECTION - CTA */}
      <section
        className="bg-[#00280C] py-6 sm:py-8 md:py-10 px-3 sm:px-4 md:px-8 lg:px-8"
        style={{ fontFamily: "NotoSerif-semibold" }}
      >
        <div className="max-w-7xl mx-auto container-custom">
          <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
            <h2 className="text-primary-500 text-xl sm:text-2xl md:text-3xl font-semibold">
              Ready to Scale Up?
            </h2>
            <p
              className="text-[#D4DBC4] text-xs sm:text-sm md:text-base font-normal px-4 sm:px-0 max-w-2xl"
              style={{ fontFamily: "Poppins-regular" }}
            >
              Our experts help food businesses transition from initial ideas to
              global market players with premium peanut butter technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 sm:mt-4 w-full sm:w-auto px-4 sm:px-0">
              <Link
                href="/contact-us"
                className="w-full sm:w-auto text-center px-6 sm:px-10 py-2.5 sm:py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-normal text-xs sm:text-sm transition-all duration-300 shadow-md"
                style={{ fontFamily: "Poppins-medium" }}
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="w-full sm:w-auto text-center px-6 sm:px-10 py-2.5 sm:py-3 bg-transparent text-[#D4DBC4] border border-[#D4DBC4]/30 hover:border-primary-500 hover:text-primary-500 rounded-full font-normal text-xs sm:text-sm transition-all duration-300"
                style={{ fontFamily: "Poppins-medium" }}
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES SECTION */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#e9e8ed] py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-8 lg:px-8">
          <div
            className="max-w-7xl mx-auto container-custom"
            style={{ fontFamily: "NotoSerif-semibold" }}
          >
            {/* Section header with green bar */}
            <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-primary-500 h-16 sm:h-20 w-1 sm:w-1.5 rounded-2xl shrink-0"></div>
              <div className="mt-1 sm:mt-2">
                <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight tracking-tight">
                  Keep Reading
                </h2>
                <p
                  className="text-xs sm:text-sm md:text-base text-primary-500 font-medium leading-relaxed"
                  style={{ fontFamily: "Poppins-medium" }}
                >
                  More insights from our team
                </p>
              </div>
            </div>

            {/* Related posts grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
              {relatedPosts.map((related) => (
                <BlogCard
                  key={related.id}
                  post={related}
                />
              ))}
            </div>

            {/* View all link */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <Link
                href="/blog"
                className="px-6 sm:px-10 py-2.5 sm:py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-normal text-xs sm:text-sm transition-all duration-300 shadow-md flex items-center gap-2"
                style={{ fontFamily: "Poppins-medium" }}
              >
                View All Articles
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM BANNER */}
      <section className="bg-[#D4DBC4] py-4 sm:py-6 px-3 sm:px-4 md:px-8 lg:px-8">
        <div className="max-w-7xl mx-auto container-custom">
          <p
            className="text-black text-xs sm:text-sm md:text-base font-normal text-center py-2 sm:py-3 px-4 sm:px-0"
            style={{ fontFamily: "Poppins-regular" }}
          >
            Looking for a dependable private label food manufacturer in India?
            Indian
            <br className="hidden md:block" />
            Foodtech is the partner you can trust.
          </p>
        </div>
      </section>

      {/* Image Preview Modal */}
      {isPreviewOpen && post && (
        <ImagePreviewModal
          image={post.image}
          title={post.title}
          onClose={() => setIsPreviewOpen(false)}
        />
      )}
    </div>
  );
}
