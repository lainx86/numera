import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Course, Lesson, LessonSection } from '../../data/lesson-reader';
import { getLessonRoute } from '../../data/lesson-reader';
import { CheckIcon } from '../Icons';

type LessonSidebarProps = {
  course: Course;
  lesson: Lesson;
  activeSectionId: string;
  onSectionClick: (sectionId: string) => void;
  onNavigate?: () => void;
};

function sectionMatches(section: LessonSection, query: string): boolean {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return true;
  return (
    section.title.toLowerCase().includes(normalized) ||
    Boolean(section.children?.some((child) => sectionMatches(child, normalized)))
  );
}

function renderSectionItems(
  sections: LessonSection[],
  activeSectionId: string,
  onSectionClick: (sectionId: string) => void,
  onNavigate: (() => void) | undefined,
  query: string,
  depth = 0,
) {
  return sections
    .filter((section) => sectionMatches(section, query))
    .map((section) => {
      const active = activeSectionId === section.id;
      return (
        <li key={section.id}>
          <a
            className={`relative block rounded-md py-1.5 pr-2 text-[13px] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt ${
              active ? 'font-semibold text-cobalt' : 'text-muted hover:text-cobalt'
            }`}
            href={`#${section.id}`}
            style={{ paddingLeft: `${12 + depth * 14}px` }}
            onClick={(event) => {
              event.preventDefault();
              onSectionClick(section.id);
              onNavigate?.();
            }}
          >
            {active && <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-cobalt" aria-hidden="true" />}
            {section.title}
          </a>
          {section.children && (
            <ul className="mt-0.5">
              {renderSectionItems(section.children, activeSectionId, onSectionClick, onNavigate, query, depth + 1)}
            </ul>
          )}
        </li>
      );
    });
}

export function LessonSidebar({ course, lesson, activeSectionId, onSectionClick, onNavigate }: LessonSidebarProps) {
  const [query, setQuery] = useState('');
  const [expandedLessons, setExpandedLessons] = useState<Set<string>>(() => new Set([lesson.id]));

  useEffect(() => {
    setExpandedLessons((current) => new Set([...current, lesson.id]));
  }, [lesson.id]);

  const filteredLessons = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return course.lessons;

    return course.lessons.filter((item) => {
      const lessonMatches = [item.title, item.description].join(' ').toLowerCase().includes(normalized);
      const sectionMatch = item.sections.some((section) => sectionMatches(section, normalized));
      return lessonMatches || sectionMatch;
    });
  }, [course.lessons, query]);

  function toggleLesson(lessonId: string) {
    setExpandedLessons((current) => {
      const next = new Set(current);
      if (next.has(lessonId)) {
        next.delete(lessonId);
      } else {
        next.add(lessonId);
      }
      return next;
    });
  }

  return (
    <aside className="rounded-[10px] border border-line bg-white/68 p-4 shadow-card backdrop-blur-sm">
      <div>
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Course</p>
        <h2 className="mt-2 text-[20px] font-semibold leading-6 text-navy">{course.title}</h2>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/70">
          <div className="h-full w-1/3 rounded-full bg-cobalt" aria-hidden="true" />
        </div>
        <p className="mt-2 font-mono text-[11px] text-muted">Progress placeholder</p>
      </div>

      <label className="mt-5 block">
        <span className="sr-only">Filter course contents</span>
        <input
          className="h-10 w-full rounded-md border border-line bg-white/75 px-3 text-[13px] text-ink outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/15"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Filter contents..."
        />
      </label>

      <nav className="mt-5 max-h-[calc(100vh-250px)] overflow-y-auto pr-1" aria-label={`${course.title} contents`}>
        <ol className="grid gap-2">
          {filteredLessons.map((item) => {
            const activeLesson = item.id === lesson.id;
            const expanded = expandedLessons.has(item.id);
            const completed = item.order < lesson.order;

            return (
              <li key={item.id} className="rounded-md border border-softLine bg-white/50 p-2">
                <div className="flex items-start gap-2">
                  <button
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded border border-line bg-white/70 text-[12px] font-semibold text-muted transition hover:text-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
                    type="button"
                    aria-label={`${expanded ? 'Collapse' : 'Expand'} ${item.title}`}
                    aria-expanded={expanded}
                    onClick={() => toggleLesson(item.id)}
                  >
                    {expanded ? '-' : '+'}
                  </button>
                  <div className="min-w-0 flex-1">
                    <Link
                      className={`flex items-start gap-2 rounded-sm text-[14px] font-semibold leading-5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt ${
                        activeLesson ? 'text-cobalt' : 'text-ink hover:text-cobalt'
                      }`}
                      to={getLessonRoute(course, item)}
                      onClick={onNavigate}
                    >
                      <span className="font-mono text-[11px] text-muted">{String(item.order).padStart(2, '0')}</span>
                      <span>{item.title}</span>
                      {completed && <CheckIcon className="ml-auto h-4 w-4 shrink-0 text-successText" />}
                    </Link>
                    {expanded && activeLesson && (
                      <ul className="mt-2 border-l border-line pl-2">
                        {renderSectionItems(item.sections, activeSectionId, onSectionClick, onNavigate, query)}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </aside>
  );
}
