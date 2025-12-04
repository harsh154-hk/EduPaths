import { notFound } from "next/navigation";
import { courses } from "../../_utils/courses";

interface PageProps {
  params: Promise<{ courseId: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { courseId } = await params;
  const course = courses.find((c) => c.id === courseId);
  if (!course) {
    return { title: "Course Not Found" };
  }
  return { title: course.title, description: course.description };
}

export default async function CoursePage({ params }: PageProps) {
  const { courseId } = await params;
  const course = courses.find((c) => c.id === courseId);

  // If course doesn't exist, tell Next.js to render not-found.tsx inside this folder
  if (!course) {
    notFound();
  }

  return (
    <article>
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      <section style={{ marginTop: 20 }}>
        <h3>Lessons (dummy)</h3>
        <ol>
          <li>Lesson 1 — Introduction</li>
          <li>Lesson 2 — Basics</li>
          <li>Lesson 3 — Summary</li>
        </ol>
      </section>
    </article>
  );
}
