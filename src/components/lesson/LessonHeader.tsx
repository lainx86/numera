import type { Course, Lesson } from '../../data/lesson-reader';
import { StatusBadge } from '../StatusBadge';

type LessonHeaderProps = {
  course: Course;
  lesson: Lesson;
};

export function LessonHeader({ course, lesson }: LessonHeaderProps) {
  return (
    <header className="pt-8">
      <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-muted">
        {course.title}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <StatusBadge />
        <span className="rounded-full border border-line bg-white/70 px-3 py-1 font-mono text-[12px] font-semibold text-muted">
          {lesson.duration}
        </span>
        <span className="rounded-full border border-line bg-white/70 px-3 py-1 font-mono text-[12px] font-semibold text-muted">
          {lesson.difficulty}
        </span>
      </div>
      <h1 className="mt-5 max-w-3xl font-display text-[clamp(3.5rem,6vw,5.7rem)] leading-[0.95] text-navy">
        {lesson.title}
      </h1>
      <p className="mt-5 max-w-2xl text-[19px] leading-[1.6] text-muted">{lesson.description}</p>
      {lesson.prerequisites && (
        <p className="mt-4 max-w-2xl font-mono text-[12px] leading-6 text-muted">
          Prerequisites: {lesson.prerequisites.join(', ')}
        </p>
      )}
    </header>
  );
}
