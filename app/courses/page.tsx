import Link from "next/link";
import { courses } from "../_utils/courses";
import type { Course } from "../_utils/types";

export const metadata = {
  title: "Courses — EduPaths",
  description: "Browse our available courses",
};

export default function CoursesPage() {
  return (
    <section>
      <h1>Courses</h1>
      <p>Available courses:</p>

      <ul style={{ marginTop: 12 }}>
        {courses.map((c: Course) => (
          <li key={c.id} style={{ marginBottom: 8 }}>
            <Link href={`/courses/${c.id}`}>
              <strong>{c.title}</strong>
            </Link>
            <div style={{ fontSize: 14 }}>{c.description}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
