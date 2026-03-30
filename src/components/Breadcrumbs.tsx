"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const Breadcrumbs = () => {
  const pathname = usePathname();
  
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((v) => v.length > 0);
  
  const breadcrumbs: BreadcrumbItem[] = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    // Format label: title case and replace hyphens with spaces
    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    
    return { label, href };
  });

  const allBreadcrumbs = [{ label: "Home", href: "/" }, ...breadcrumbs];

  // JSON-LD for Breadcrumbs
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allBreadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      "item": `https://www.indianfoodtech.in${crumb.href}`
    }))
  };

  return (
    <nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide text-sm font-medium">
        {allBreadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.href}>
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
            )}
            {index === allBreadcrumbs.length - 1 ? (
              <span className="text-primary-700 font-bold">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="text-gray-500 hover:text-primary-600 flex items-center gap-1.5 transition-colors"
              >
                {index === 0 && <Home className="w-3.5 h-3.5" />}
                {crumb.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
