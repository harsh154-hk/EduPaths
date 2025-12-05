export const metadata = {
  title: "EduPaths — Learn web development",
  description: "Mini learning site built with Next.js for practicing routing and layouts",
};

export default function SiteHome() {
  return (
    <section
      style={{
        lineHeight: 1.7,
        maxWidth: "850px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          padding: "50px 30px",
          background: "linear-gradient(135deg, #4f46e5, #6366f1)",
          color: "white",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Learn Web Development the Easy Way
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.9 }}>
          A beginner-friendly platform designed to make learning smooth,
          practical, and enjoyable.
        </p>
      </section>

      {/* WHY EDUPATHS */}
      <section
        style={{
          marginTop: "50px",
          padding: "25px",
          background: "#f8fafc",
          borderRadius: "12px",
          border: "1px solid #e2e8f0",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Why EduPaths?</h2>
        <p>
          EduPaths helps beginners understand modern web development through
          clear, practical examples. Every route, page, and layout here is a
          real demonstration of how Next.js works.
        </p>

        <ul style={{ marginTop: 16, paddingLeft: 20 }}>
          <li>✔ Beginner-friendly courses</li>
          <li>✔ Simple and practical explanations</li>
          <li>✔ Dynamic pages powered by Next.js</li>
          <li>✔ Bite-sized learning through blog articles</li>
        </ul>
      </section>

      {/* WHAT YOU LEARN */}
      <section
        style={{
          marginTop: "40px",
          padding: "25px",
          background: "white",
          borderRadius: "12px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>
          What Will You Learn?
        </h2>
        <p>
          As you explore EduPaths, you’ll learn key concepts behind building
          modern web apps using React and Next.js.
        </p>

        <ol style={{ marginTop: 12, paddingLeft: 20 }}>
          <li>👉 Page routing and navigation</li>
          <li>👉 Dynamic parameters (course pages)</li>
          <li>👉 SEO metadata management</li>
          <li>👉 Layouts and clean UI structure</li>
          <li>👉 Blog pages for practical understanding</li>
        </ol>
      </section>

      {/* CTA */}
      <section
        style={{
          marginTop: "40px",
          padding: "30px",
          textAlign: "center",
          background: "#f1f5f9",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          Start Your Learning Journey
        </h2>
        <p>
          Visit the <strong>Courses</strong> section to begin. Prefer quick
          articles? Head to the <strong>Blog</strong>.
        </p>
      </section>

      {/* SPACER */}
      <div style={{ height: 80 }}></div>
    </section>
  );
}
