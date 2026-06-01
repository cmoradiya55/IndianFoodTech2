import { Metadata } from "next";
import BlogDetails from "./BlogDetails";
import BlogList from "@/data/BlogList.json";
import Schema from "@/components/Schema";
import Breadcrumb from "@/components/Breadcrumb";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.indianfoodtech.com";

const HOWTO_SLUGS = new Set([
  "nut-butter-manufacturing-process-from-raw-peanuts-to-premium-quality-products",
  "our-nut-butter-manufacturing-process-precision-quality-global-standards",
]);

const MANUFACTURING_STEPS = [
  {
    name: "Raw Material Procurement",
    text: "Source high-quality peanuts from pre-screened suppliers. Conduct quality grading and safety inspection before processing.",
  },
  {
    name: "Cleaning and Sorting",
    text: "Remove dust, stones, and impurities using advanced sorting systems. Apply color sorting to ensure only the best raw materials proceed.",
  },
  {
    name: "Controlled Roasting",
    text: "Roast peanuts at precise temperature profiles to develop consistent flavor, aroma, and color across every batch.",
  },
  {
    name: "Cooling and Blanching",
    text: "Cool the roasted peanuts and remove skins through blanching to improve texture and product smoothness.",
  },
  {
    name: "Grinding and Blending",
    text: "Process roasted peanuts through fine grinding to achieve the desired viscosity and consistency. Apply custom formulation adjustments at this stage.",
  },
  {
    name: "Quality Testing",
    text: "Test each batch for safety, texture, aflatoxin levels, and shelf life. Ensure compliance with EU, US FDA, and FSSAI standards before proceeding.",
  },
  {
    name: "Filling and Packaging",
    text: "Fill using automated hygienic systems into retail jars, sachets, or bulk drums. Apply accurate labels with brand and regulatory information.",
  },
  {
    name: "Storage and Export Shipping",
    text: "Store finished products under controlled conditions. Prepare complete export documentation and dispatch via Mundra or JNPT port.",
  },
];

function parseBlogDate(dateStr: string): string | undefined {
  try {
    const normalized = dateStr.replace(
      /^(\d+)\s+(\w+),?\s+(\d{4})$/,
      "$2 $1, $3"
    );
    const parsed = new Date(normalized);
    return isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
  } catch {
    return undefined;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const postSlug = resolvedParams.id;
  const post = BlogList.find((p) => p.slug === postSlug);

  if (!post) {
    return {
      title: "Blog Not Found | Indian Food Tech",
      description: "The requested blog post could not be found",
    };
  }

  const publishedTime = parseBlogDate(post.date);

  return {
    title: post.title,
    description: post.description,
    keywords: [
      post.category,
      "peanut butter",
      "nut butter",
      "Indian Foodtech",
      "blog",
      "food manufacturing",
      "tahini paste",
    ],
    authors: [{ name: post.author || "Indian Foodtech" }],
    alternates: {
      canonical: `${BASE_URL}/blog/${postSlug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${BASE_URL}/blog/${postSlug}`,
      siteName: "Indian Foodtech",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime,
      authors: [post.author || "Indian Foodtech"],
      tags: [post.category],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ blogSlug: string }>;
}) {
  const { blogSlug } = await params;
  const post = BlogList.find((p) => p.slug === blogSlug);
  const publishedTime = post?.date ? parseBlogDate(post.date) : undefined;

  return (
    <>
      {post && (
        <Breadcrumb
          items={[
            { name: "Home", url: `${BASE_URL}` },
            { name: "Blog", url: `${BASE_URL}/blog` },
            { name: post.title, url: `${BASE_URL}/blog/${post.slug}` },
          ]}
        />
      )}

      {post && (
        <Schema
          type="BlogPosting"
          data={{
            headline: post.title,
            description: post.description,
            image: `${BASE_URL}${post.image}`,
            datePublished: publishedTime,
            dateModified: publishedTime,
            author: {
              "@type": "Organization",
              name: post.author || "Indian Foodtech",
              url: BASE_URL,
            },
            publisher: {
              "@type": "Organization",
              name: "Indian Foodtech",
              logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/logoBlack.webp`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${BASE_URL}/blog/${post.slug}`,
            },
            articleSection: post.category,
            inLanguage: "en-US",
          }}
        />
      )}

      {post && HOWTO_SLUGS.has(post.slug) && (
        <Schema
          type="HowTo"
          data={{
            name: post.title,
            description: post.description,
            image: `${BASE_URL}${post.image}`,
            totalTime: "PT4H",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            step: MANUFACTURING_STEPS.map((step, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: step.name,
              text: step.text,
            })),
          }}
        />
      )}

      <BlogDetails blogSlug={post?.slug || ""} />
    </>
  );
}
