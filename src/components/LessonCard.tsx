import { Link } from 'react-router-dom';
import type { LessonItem } from '../data/lessons';
import { StatusBadge } from './StatusBadge';

type LessonCardProps = {
  lesson: LessonItem;
};

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <Link
      className="group block rounded-[8px] border border-line bg-white/70 p-5 shadow-card transition hover:-translate-y-0.5 hover:border-cobalt/35 hover:bg-white/90 hover:shadow-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
      to={lesson.path}
    >
      <article className="flex min-h-[205px] flex-col">
        <div className="flex items-start justify-between gap-4">
          <StatusBadge>{lesson.badge}</StatusBadge>
          {lesson.order && (
            <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">
              {String(lesson.order).padStart(2, '0')}
            </span>
          )}
        </div>
        <h3 className="mt-4 text-[21px] font-semibold leading-7 text-navy">{lesson.title}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-6 text-muted">{lesson.description}</p>
        <span className="mt-5 inline-flex text-[14px] font-semibold text-cobalt group-hover:text-cobaltDark">
          {lesson.actionText} &rarr;
        </span>
      </article>
    </Link>
  );
}
