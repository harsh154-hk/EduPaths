import { notFound } from "next/navigation";
import { blogPosts } from "../blogData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Blog Not Found" };
  }

  return {
    title: post.title,
    description: post.content.slice(0, 80) + "...",
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        lineHeight: 1.7,
        padding: "24px",
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        animation: "fadeIn 0.5s ease",
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: 700,
          marginBottom: "16px",
          color: "#222",
        }}
      >
        {post.title}
      </h1>

      {/* DIVIDER */}
      <hr style={{ border: "none", height: "1px", background: "#ddd", margin: "20px 0" }} />

      {/* CONTENT */}
      <p style={{ fontSize: "1.1rem", color: "#444" }}>{post.content}</p>

      {/* Spacer */}
      <div style={{ height: "40px" }}></div>
    </article>
  );
}

// Add basic fade-in animation
const style = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
`;

if (typeof document !== "undefined") {
  const sheet = document.createElement("style");
  sheet.innerHTML = style;
  document.head.appendChild(sheet);
}
