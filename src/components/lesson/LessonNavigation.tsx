import { Link } from 'react-router-dom';
import type { Course, Lesson } from '../../data/lesson-reader';
import { getAdjacentLessons, getLessonRoute } from '../../data/lesson-reader';

type LessonNavigationProps = {
  course: Course;
  lesson: Lesson;
};

export function LessonNavigation({ course, lesson }: LessonNavigationProps) {
  const { previous, next } = getAdjacentLessons(course, lesson);

  return (
    <nav className="mt-14 grid gap-4 border-t border-line pt-6 sm:grid-cols-3" aria-label="Lesson navigation">
      {previous ? (
        <Link
          className="rounded-[8px] border border-line bg-white/70 p-4 shadow-card transition hover:-translate-y-0.5 hover:border-cobalt/35 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
          to={getLessonRoute(course, previous)}
        >
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">&larr; Previous</span>
          <span className="mt-2 block text-[16px] font-semibold text-navy">{previous.title}</span>
        </Link>
      ) : (
        <div className="rounded-[8px] border border-dashed border-line bg-white/45 p-4 text-muted">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]">Previous</span>
          <span className="mt-2 block text-[14px]">Start of course</span>
        </div>
      )}

      <Link
        className="rounded-[8px] border border-line bg-white/70 p-4 text-center shadow-card transition hover:-translate-y-0.5 hover:border-cobalt/35 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
        to="/lessons"
      >
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Course</span>
        <span className="mt-2 block text-[16px] font-semibold text-cobalt">Back to lessons</span>
      </Link>

      {next ? (
        <Link
          className="rounded-[8px] border border-line bg-white/70 p-4 text-right shadow-card transition hover:-translate-y-0.5 hover:border-cobalt/35 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
          to={getLessonRoute(course, next)}
        >
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Next &rarr;</span>
          <span className="mt-2 block text-[16px] font-semibold text-navy">{next.title}</span>
        </Link>
      ) : (
        <div className="rounded-[8px] border border-dashed border-line bg-white/45 p-4 text-right text-muted">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]">Next</span>
          <span className="mt-2 block text-[14px]">Completion placeholder</span>
        </div>
      )}
    </nav>
  );
}
