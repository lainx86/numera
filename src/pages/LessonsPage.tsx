import { useMemo, useState } from 'react';
import { EmptyState } from '../components/EmptyState';
import { LessonCard } from '../components/LessonCard';
import { PageHeader } from '../components/PageHeader';
import { SectionHeading } from '../components/SectionHeading';
import { fundamentalsLessons, lessonCatalog, numericalMethodLessons } from '../data/lessons';

function filterLessons(query: string) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return {
      fundamentals: fundamentalsLessons,
      numericalMethods: numericalMethodLessons,
    };
  }

  const matches = lessonCatalog.filter((lesson) =>
    [lesson.title, lesson.description, lesson.badge, lesson.category].join(' ').toLowerCase().includes(normalized),
  );

  return {
    fundamentals: matches.filter((lesson) => lesson.category === 'fundamentals'),
    numericalMethods: matches.filter((lesson) => lesson.category === 'numerical-methods'),
  };
}

export function LessonsPage() {
  const [query, setQuery] = useState('');
  const filteredLessons = useMemo(() => filterLessons(query), [query]);
  const hasResults = filteredLessons.fundamentals.length > 0 || filteredLessons.numericalMethods.length > 0;

  return (
    <>
      <PageHeader
        eyebrow="Lessons"
        title="Lesson catalog."
        description="A planned learning catalog for core programming foundations and future numerical methods lessons."
      />

      <section className="pt-9">
        <label className="block max-w-xl">
          <span className="sr-only">Search lessons</span>
          <input
            aria-label="Search lessons"
            className="h-11 w-full rounded-md border border-line bg-white/85 px-4 text-[15px] text-ink outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/15"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search lessons..."
          />
        </label>
      </section>

      <section className="pt-12" aria-labelledby="fundamentals-heading">
        <SectionHeading
          id="fundamentals-heading"
          title="Fundamentals"
          description="Foundational language paths for the Python and MATLAB concepts needed before working through numerical methods."
        />
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredLessons.fundamentals.map((lesson) => (
            <LessonCard key={lesson.slug} lesson={lesson} />
          ))}
        </div>
      </section>

      <section className="pt-14" aria-labelledby="numerical-methods-heading">
        <SectionHeading
          id="numerical-methods-heading"
          title="Numerical Methods"
          description="Planned method lessons arranged as a step-by-step sequence for theory, visualization, and implementation."
        />
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredLessons.numericalMethods.map((lesson) => (
            <LessonCard key={lesson.slug} lesson={lesson} />
          ))}
        </div>
      </section>

      {!hasResults && (
        <div className="pt-8">
          <EmptyState title="No lessons found" description="Try searching for Python, MATLAB, fundamentals, or method placeholder." />
        </div>
      )}
    </>
  );
}
