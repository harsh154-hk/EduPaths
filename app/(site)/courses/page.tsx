import Link from "next/link";
import { courses } from "../../_utils/courses";

export const metadata = {
  title: "Courses — EduPaths",
};

export default function CoursesPage() {
  return (
    <section>
      <h1>Courses</h1>
      <p>Choose a course to start learning:</p>

      <ul style={{ marginTop: 20 }}>
        {courses.map((course) => (
          <li key={course.id} style={{ marginBottom: 16 }}>
            <Link href={`/courses/${course.id}`}>
              <strong>{course.title}</strong>
            </Link>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
