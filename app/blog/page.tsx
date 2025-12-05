import Link from "next/link";
import { blogPosts } from "./blogData";

export const metadata = {
  title: "EduPaths Blog — Learn & Explore",
};

export default function BlogHome() {
  return (
    <section>
      <h1>EduPaths Blog</h1>
      <p>Read articles, tutorials, and guides about web development.</p>

      <ul style={{ marginTop: 20, listStyle: "none", paddingLeft: 0 }}>
        {blogPosts.map((post) => (
          <li key={post.slug} style={{ marginBottom: 8 }}>
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              ▶ {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
