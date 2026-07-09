import { Link, useParams } from 'react-router-dom';
import { EmptyState } from '../components/EmptyState';
import { LessonReaderLayout } from '../components/lesson/LessonReaderLayout';
import { getCourseByRoute, getLessonBySlug } from '../data/lesson-reader';

export function LessonReaderPage() {
  const { courseType, courseSlug, lessonSlug } = useParams();
  const course = getCourseByRoute(courseType, courseSlug);
  const lesson = getLessonBySlug(course, lessonSlug);

  if (!course || !lesson) {
    return (
      <section className="pt-16">
        <EmptyState title="Lesson not found" description="This lesson shell is not available. Return to the lesson catalog to choose an available reader page." />
        <Link
          className="mt-6 inline-flex h-11 items-center rounded-md bg-cobalt px-5 text-[15px] font-semibold text-white shadow-button transition hover:bg-cobaltDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
          to="/lessons"
        >
          Back to lessons
        </Link>
      </section>
    );
  }

  return <LessonReaderLayout course={course} lesson={lesson} />;
}
