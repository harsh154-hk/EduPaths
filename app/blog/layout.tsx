import type { Metadata } from "next";
import BlogHeader from "./header";

export const metadata: Metadata = {
  title: "EduPaths Blog",
  description: "Learn through articles and tutorials.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <BlogHeader />
      <main>{children}</main>

      <footer style={{ marginTop: 40 }}>
        <hr />
        <p style={{ marginTop: 8 }}>
          © {new Date().getFullYear()} EduPaths Blog
        </p>
      </footer>
    </div>
  );
}
