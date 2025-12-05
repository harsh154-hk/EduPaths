import Link from "next/link";
import { courses } from "../_utils/courses";
import type { Course } from "../_utils/types";

export const metadata = {
  title: "Courses — EduPaths",
  description: "Browse our available courses",
};

export default function CoursesPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Courses</h1>
        <p className="text-muted-foreground mt-2">
          Explore our curated list of skill-building courses.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c: Course) => (
          <Link
            key={c.id}
            href={`/courses/${c.id}`}
            className="border rounded-xl p-2 shadow-sm hover:shadow-md transition-all group bg-white dark:bg-neutral-100"
          >
            <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
              {c.title}
            </h2>

            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {c.description}
            </p>

            <span className="inline-block mt-4 text-blue-600 font-medium group-hover:underline">
              View Course →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
