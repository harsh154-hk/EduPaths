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

  if (!course) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      {/* Top Title Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{course.title}</h1>
        <p className="text-muted-foreground text-lg mt-2">
          {course.description}
        </p>
      </div>

      {/* Course Overview Box */}
      <div className="border rounded-2xl p-6 shadow-sm bg-white dark:bg-neutral-100">
        <h2 className="text-2xl font-semibold mb-3">Course Overview</h2>

        <p className="text-muted-foreground leading-relaxed">
          {course.description}
        </p>
      </div>

      {/* Lessons Section */}
      <section className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Lessons</h3>

        <ol className="space-y-3 text-lg">
          <li className="flex items-center gap-3">
            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm">
              1
            </span>
            Lesson 1 — Introduction
          </li>

          <li className="flex items-center gap-3">
            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm">
              2
            </span>
            Lesson 2 — Basics
          </li>

          <li className="flex items-center gap-3">
            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm">
              3
            </span>
            Lesson 3 — Summary
          </li>
        </ol>
      </section>
    </article>
  );
}
