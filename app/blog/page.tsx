import Link from "next/link";
import { blogPosts } from "./blogData";

export const metadata = {
  title: "EduPaths Blog — Learn & Explore",
};

export default function BlogHome() {
  return (
    <section style={{ padding: "20px 0", lineHeight: 1.6 }}>
      {/* HERO */}
      <header style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: 10 }}>EduPaths Blog</h1>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
          Explore articles, tutorials, and guides to boost your web development journey.
        </p>
      </header>

      {/* BLOG LIST */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              padding: "16px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              background: "white",
              transition: "all 0.25s ease",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <article
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "1.2rem" }}>{post.title}</h3>

              <p style={{ fontSize: "0.95rem", color: "#666", margin: 0 }}>
                {post.content.slice(0, 90)}...
              </p>

              <span
                style={{
                  marginTop: "10px",
                  fontSize: "0.9rem",
                  color: "#0070f3",
                  fontWeight: 600,
                }}
              >
                Read More →
              </span>
            </article>
          </Link>
        ))}
      </div>

      {/* SPACER */}
      <div style={{ height: 50 }}></div>
    </section>
  );
}
