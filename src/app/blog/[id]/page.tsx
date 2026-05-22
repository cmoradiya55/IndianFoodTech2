import { Metadata } from "next";
import BlogDetails from "./BlogDetails";
import BlogList from "@/data/BlogList.json";

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

  let publishedTime = undefined;
  try {
    if (post.date) {
      publishedTime = new Date(post.date).toISOString();
    }
  } catch {
    // fallback if parsing fails
  }

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
      canonical: `/blog/${postSlug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${postSlug}`,
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

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <BlogDetails params={params} />;
}
