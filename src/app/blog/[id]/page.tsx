"use client";
import React, { use, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  ArrowRight
} from "lucide-react";
import { BlogList } from "@/utils/BlogList";

// Simple Markdown-style Content Renderer with Enhanced Styling
const renderContent = (content: string) => {
  if (!content) return null;

  const lines = content.split('\n');
  return lines.map((line, index) => {
    // Headers
    if (line.startsWith('## ')) {
      return <h2 key={index} className="text-2xl sm:text-4xl font-black text-gray-900 mt-16 mb-8 flex flex-col gap-2 group">
        <span className="text-primary-600 text-[10px] uppercase tracking-[0.3em] font-black">Section</span>
        {line.replace('## ', '')}
        <div className="w-12 h-1 bg-primary-600 rounded-full group-hover:w-24 transition-all duration-500"></div>
      </h2>;
    }
    if (line.startsWith('### ')) {
      return <h3 key={index} className="text-xl sm:text-2xl font-bold text-gray-800 mt-12 mb-6 border-l-4 border-primary-200 pl-5">
        {line.replace('### ', '')}
      </h3>;
    }

    // Special icons/pointers
    if (line.startsWith('👉 ')) {
      return <div key={index} className="flex items-start gap-4 my-8 p-6 bg-primary-50/50 rounded-3xl border border-primary-100/50 backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100/20 rounded-full blur-2xl group-hover:bg-primary-100/30 transition-colors"></div>
        <ArrowRight className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
        <p className="text-gray-900 font-bold italic text-lg leading-relaxed relative z-10">{line.replace('👉 ', '')}</p>
      </div>;
    }

    // Success/Check items
    if (line.startsWith('✔ ') || line.startsWith('✅ ')) {
      const text = line.startsWith('✔ ') ? line.replace('✔ ', '') : line.replace('✅ ', '');
      return <div key={index} className="flex items-start gap-4 my-4 group">
        <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary-600 transition-colors duration-300">
            <CheckCircle2 className="w-4 h-4 text-primary-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <p className="text-gray-700 font-medium">{text}</p>
      </div>;
    }

    // Error/Alert items
    if (line.startsWith('❌ ') || line.startsWith('🚨 ')) {
      return <div key={index} className="flex items-start gap-4 my-4 p-5 bg-red-50/50 rounded-2xl border border-red-100/50">
        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <AlertCircle className="w-4 h-4 text-red-500" />
        </div>
        <p className="text-red-900 font-bold">{line.replace(/^[❌🚨]\s*/, '')}</p>
      </div>;
    }

    // Bullet points
    if (line.startsWith('- ') || line.startsWith('* ')) {
      return <li key={index} className="ml-2 mb-4 list-none flex items-start gap-3 text-gray-700">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
        <span>{line.replace(/^[-\*]\s*/, '')}</span>
      </li>;
    }

    // Bold text handling (simple)
    if (line.includes('**')) {
      const parts = line.split('**');
      return <p key={index} className="text-gray-700 text-lg leading-[1.8] mb-6">
        {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="font-black text-gray-950">{part}</strong> : part)}
      </p>;
    }

    // Empty lines
    if (line.trim() === '') {
      return <div key={index} className="h-4"></div>;
    }

    // Normal text
    return <p key={index} className="text-gray-700 text-lg leading-[1.8] mb-6">
      {line}
    </p>;
  });
};

// Scroll Progress Script (Inline Hook)
const useScrollProgress = () => {
  React.useEffect(() => {
    const updateProgress = () => {
      const progress = document.getElementById('scroll-progress');
      if (progress) {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        progress.style.width = `${scrolled}%`;
      }
    };
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);
};

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  useScrollProgress();
  const resolvedParams = use(params);
  const postId = parseInt(resolvedParams.id);

  const post = useMemo(() => BlogList.find((p) => p.id === postId), [postId]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
        <h1 className="text-6xl font-black text-gray-100 mb-4 animate-pulse">404</h1>
        <p className="text-gray-500 mb-8 text-center text-lg">We couldn't find the article you're seeking.</p>
        <Link href="/blog" className="px-10 py-4 bg-primary-600 text-white rounded-full font-bold shadow-xl hover:bg-primary-700 transition-all hover:scale-105 active:scale-95">
          Return to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = BlogList
    .filter(p => p.id !== post.id && (p.category === post.category || p.id % 2 === post.id % 2))
    .slice(0, 3);

  const readTime = `${Math.max(3, Math.ceil(((post as any).content?.length || post.description.length) / 1000))} min read`;

  return (
    <div className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      {/* ===== PROGRESS BAR (SCROLL) ===== */}
      <div className="fixed top-0 left-0 w-full h-1.5 z-50 pointer-events-none">
        <div className="h-full bg-primary-500 transition-all duration-150" style={{ width: '0%' }} id="scroll-progress"></div>
      </div>

      {/* ===== BREADCRUMBS & NAV ===== */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <Link 
            href="/blog" 
            className="group flex items-center gap-2 text-gray-400 hover:text-primary-600 font-bold text-xs uppercase tracking-widest transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-300 font-bold">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-primary-600">Insights</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-900 truncate max-w-[150px]">{post.category}</span>
          </div>
          <button className="text-gray-400 hover:text-primary-600 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <article className="pt-12 pb-24">
        {/* ===== POST HEADER ===== */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6 animate-fade-in">
            {post.category}
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-[1.15] mb-8 tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 text-gray-400">
            <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white ring-4 ring-primary-50">
                    <User className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-gray-900">{post.author}</span>
            </div>
            <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
            <div className="flex items-center gap-2 text-sm font-medium">
                <Calendar className="w-4 h-4 text-gray-300" />
                {post.date}
            </div>
            <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
            <div className="flex items-center gap-2 text-sm font-medium">
                <Clock className="w-4 h-4 text-gray-300" />
                {readTime}
            </div>
          </div>
        </header>

        {/* ===== FEATURED IMAGE ===== */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
          <div className="relative aspect-[16/8] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] ring-1 ring-gray-100 group">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>

        {/* ===== CONTENT SECTION ===== */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
          
          {/* Main Content Column */}
          <div className="max-w-2xl mx-auto">
            <div className="prose prose-xl prose-primary max-w-none">
              <p className="text-xl sm:text-2xl text-gray-500 font-medium leading-relaxed mb-16 first-letter:text-5xl first-letter:font-black first-letter:text-primary-600 first-letter:mr-3 first-letter:float-left">
                {post.description}
              </p>
              
              <div className="blog-content-refined text-gray-800 leading-[1.8] antialiased">
                {renderContent(post.content || '')}
              </div>
            </div>

            {/* End of Article Signature */}
            <div className="mt-20 py-10 border-y border-gray-100 flex items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-700 font-black text-xl">
                        IF
                    </div>
                    <div>
                        <p className="font-black text-gray-900 tracking-tight">Indian Foodtech</p>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Industry Expert Team</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="p-3 rounded-xl bg-gray-50 text-gray-400 hover:bg-primary-600 hover:text-white transition-all shadow-sm">
                        <Share2 className="w-5 h-5" />
                    </button>
                </div>
            </div>
          </div>
        </div>
      </article>

      {/* ===== NEWSLETTER SECTION ===== */}
      <section className="bg-gray-50 py-24 px-4 sm:px-6 overflow-hidden relative">
        <div className="max-w-4xl mx-auto bg-primary-700 rounded-[3rem] p-8 sm:p-16 text-white relative z-10 overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/10 transition-colors duration-700"></div>
            <div className="max-w-xl">
                <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight">Stay ahead in the global nut butter market.</h2>
                <p className="text-primary-100/80 mb-8 text-lg font-medium">Join 500+ food businesses receiving our monthly market insights and export trends.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-primary-200 focus:outline-none focus:bg-white/20 transition-all text-lg"
                    />
                    <button className="px-8 py-4 bg-white text-primary-700 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all">
                        Subscribe Now
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* ===== RELATED POSTS ===== */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">Continue Reading</h2>
                <Link href="/blog" className="text-primary-600 font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    View All <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link 
                  key={related.id} 
                  href={`/blog/${related.id}`}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-lg shadow-gray-200/50 ring-1 ring-gray-100">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-[10px] font-black text-primary-600 uppercase tracking-[0.2em] mb-3">{related.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-primary-600 transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FINAL CTA ===== */}
      <footer className="bg-gray-950 py-20 px-4 sm:px-12">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-primary-500 font-bold text-xs uppercase tracking-widest mb-6">
                <div className="w-8 h-px bg-primary-500/30"></div>
                Launch Your Brand
                <div className="w-8 h-px bg-primary-500/30"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-10 leading-tight">Ready to scale your <span className="text-primary-500">private label</span> business?</h2>
            <div className="flex flex-wrap items-center justify-center gap-6">
                <Link href="/contact" className="px-10 py-4 bg-primary-500 text-white rounded-full font-bold shadow-xl hover:shadow-primary-500/20 hover:scale-105 transition-all">
                    Talk to our Export Team
                </Link>
                <Link href="/products" className="px-10 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
                    Explore Product Range
                </Link>
            </div>
        </div>
      </footer>
    </div>
  );
}
