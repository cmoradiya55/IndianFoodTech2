import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Tag, User, ArrowRight } from "lucide-react";

interface Post {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime?: string;
}

const BlogCard = ({ post }: { post: Post }) => {
  const { slug, title, description, image, date, author, category, readTime } = post;
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-md transition-all duration-500 border border-[#D2D1D6] hover:shadow-xl hover:-translate-y-1 overflow-hidden h-full"
    >
      {/* Image */}
      <div className="relative bg-[#e9e8ed]/50 aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 border border-gray-100/50 group-hover:border-primary-200/50 transition-colors duration-500">
        <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category label */}
        <div className="absolute top-3 left-3 z-20">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-primary-600 text-[10px] font-black uppercase tracking-widest shadow-sm border border-white/50 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-500"
            style={{ fontFamily: "Poppins-medium" }}
          >
            <Tag className="w-3 h-3" />
            {category}
          </span>
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-col grow px-1 sm:px-2 pb-1">
        {/* Meta */}
        <div
          className="flex items-center gap-3 text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3"
          style={{ fontFamily: "Poppins-semibold" }}
        >
          <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-lg">
            <Calendar className="w-3 h-3 text-primary-500" />
            {date}
          </span>
          {readTime && (
            <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-lg">
              <Clock className="w-3 h-3 text-primary-500" />
              {readTime}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-sm sm:text-base font-bold text-gray-900 leading-snug group-hover:text-primary-600 transition-colors line-clamp-2 mb-3"
          style={{ fontFamily: "NotoSerif-semibold" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4 grow"
          style={{ fontFamily: "Poppins-medium" }}
        >
          {description}
        </p>

        {/* Footer */}
        <div className="pt-3 sm:pt-4 flex items-center justify-between border-t border-gray-100/80 mt-auto group-hover:border-primary-100 transition-colors duration-300">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-500 border border-gray-100 group-hover:border-primary-500">
              <User className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400 group-hover:text-white transition-colors duration-500" />
            </div>
            <span
              className="text-xs sm:text-sm font-bold text-gray-700 group-hover:text-primary-700 transition-colors duration-300"
              style={{ fontFamily: "Poppins-bold" }}
            >
              {author}
            </span>
          </div>
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary-50 group-hover:bg-primary-500 transition-all duration-500">
            <ArrowRight className="w-3.5 h-3.5 text-primary-600 group-hover:text-white group-hover:-rotate-45 transition-all duration-500" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
