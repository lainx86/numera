import { Link, useParams } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { EmptyState } from '../components/EmptyState';
import { StatusBadge } from '../components/StatusBadge';
import { getFundamentalsLessonBySlug } from '../data/lessons';

const shellSections = ['Overview', 'Topics', 'Practice', 'Next steps'];

export function FundamentalsPage() {
  const { slug } = useParams();
  const lesson = getFundamentalsLessonBySlug(slug);

  if (!lesson) {
    return (
      <>
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Lessons', to: '/lessons' }, { label: 'Fundamentals not found' }]} />
        <div className="pt-9">
          <EmptyState title="Fundamentals path not found" description="Return to the lesson catalog to choose an available fundamentals path." />
          <Link
            className="mt-6 inline-flex h-11 items-center rounded-md bg-cobalt px-5 text-[15px] font-semibold text-white shadow-button transition hover:bg-cobaltDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
            to="/lessons"
          >
            Back to lessons
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Lessons', to: '/lessons' }, { label: lesson.title }]} />

      <section className="pt-8">
        <StatusBadge />
        <h1 className="mt-4 font-display text-[clamp(3.5rem,6vw,5.5rem)] leading-[0.95] text-navy">{lesson.title}</h1>
        <p className="mt-5 max-w-2xl text-[18px] leading-[1.6] text-muted">{lesson.description}</p>
      </section>

      <section className="grid gap-5 pt-9 md:grid-cols-2">
        {shellSections.map((title) => (
          <article key={title} className="min-h-[210px] rounded-[8px] border border-dashed border-line bg-white/60 p-6 shadow-card">
            <h2 className="text-[22px] font-semibold text-navy">{title}</h2>
            <p className="mt-3 text-[15px] leading-6 text-muted">Reserved for future fundamentals curriculum content.</p>
          </article>
        ))}
      </section>
    </>
  );
}
