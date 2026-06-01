import Link from "next/link";
import Schema from "./Schema";
import { Home, ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showVisual?: boolean;
}

export default function Breadcrumb({
  items,
  showVisual = true,
}: BreadcrumbProps) {
  return (
    <>
      <Schema
        type="BreadcrumbList"
        data={{
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }}
      />

      {showVisual && (
        <nav
          aria-label="Breadcrumb"
          className="px-4 sm:px-6 lg:px-8 pt-6 pb-2 bg-[#e9e8ed]"
        >
          <div className="max-w-7xl mx-auto container-custom">
            <ol
              className="inline-flex items-center gap-1 sm:gap-1.5 py-1.5 overflow-x-auto scrollbar-none whitespace-nowrap max-w-full"
              style={{ fontFamily: "Poppins-medium" }}
            >
              {items.map((item, index) => {
                const isFirst = index === 0;

                const relativeUrl = (item.url.startsWith("http")
                  ? new URL(item.url).pathname
                  : item.url) || "/";

                return (
                  <li key={item.url} className="flex items-center gap-1 sm:gap-1.5">
                    {!isFirst && (
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 dark:text-zinc-500 shrink-0" />
                    )}
                    <Link
                      href={relativeUrl}
                      className="text-xs sm:text-sm text-black px-2 py-1 rounded-lg transition-all duration-200 flex items-center gap-1.5 shrink-0 hover:underline"
                    >
                      {isFirst && (
                        <Home className="w-3.5 h-3.5 text-black dark:text-zinc-500" />
                      )}
                      <span>{item.name}</span>
                    </Link>

                  </li>
                );
              })}
            </ol>
          </div>
        </nav>
      )}
    </>
  );
}
