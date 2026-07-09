import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { EmptyState } from '../components/EmptyState';
import { PageHeader } from '../components/PageHeader';
import { StatusBadge } from '../components/StatusBadge';
import { modulePlaceholders } from '../data/modules';

const lessons = modulePlaceholders.map((module, index) => ({
  title: `Lesson Placeholder ${String(index + 1).padStart(2, '0')}`,
  description: 'A planned lesson shell for a future guided numerical methods sequence.',
  path: `/methods/${module.slug}`,
}));

export function LessonsPage() {
  const [query, setQuery] = useState('');
  const filteredLessons = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return lessons;
    }

    return lessons.filter((lesson) => [lesson.title, lesson.description].join(' ').toLowerCase().includes(normalized));
  }, [query]);

  return (
    <>
      <PageHeader
        eyebrow="Lessons"
        title="Lesson catalog."
        description="Placeholder lesson cards for the future curriculum plan. Each card currently points to a module workspace shell."
      />

      <section className="pt-9">
        <label className="block max-w-xl">
          <span className="sr-only">Search lessons</span>
          <input
            className="h-11 w-full rounded-md border border-line bg-white/85 px-4 text-[15px] text-ink outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/15"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search lesson placeholders..."
          />
        </label>

        <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredLessons.map((lesson) => (
            <Link
              key={lesson.title}
              className="rounded-[8px] border border-line bg-white/70 p-5 shadow-card transition hover:-translate-y-0.5 hover:border-cobalt/35 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
              to={lesson.path}
            >
              <StatusBadge />
              <h2 className="mt-4 text-[20px] font-semibold text-navy">{lesson.title}</h2>
              <p className="mt-2 text-[15px] leading-6 text-muted">{lesson.description}</p>
              <span className="mt-5 inline-flex text-[14px] font-semibold text-cobalt">Open module shell &rarr;</span>
            </Link>
          ))}
        </div>

        {filteredLessons.length === 0 && (
          <div className="mt-7">
            <EmptyState title="No lesson placeholders found" description="Try another keyword while the curriculum catalog is still in planning." />
          </div>
        )}
      </section>
    </>
  );
}
