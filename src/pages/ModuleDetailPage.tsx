import { Link, Navigate, useParams } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { EmptyState } from '../components/EmptyState';
import { ModuleIllustrationGraphic } from '../components/ModuleIllustrations';
import { StatusBadge } from '../components/StatusBadge';
import { getNumericalMethodLessonBySlug } from '../data/lessons';
import { getNumericalMethodLessonRoute } from '../data/lesson-reader';
import { getModuleBySlug } from '../data/modules';

const workspaceSections = [
  'Visualization workspace',
  'Theory notes area',
  'Python implementation area',
  'MATLAB implementation area',
];

export function ModuleDetailPage() {
  const { slug } = useParams();
  const module = getModuleBySlug(slug);
  const methodLesson = getNumericalMethodLessonBySlug(slug);

  if (!module && !methodLesson) {
    return (
      <>
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Methods', to: '/methods' }, { label: 'Module not found' }]} />
        <div className="pt-9">
          <EmptyState title="Module placeholder not found" description="This module shell does not exist. Return to the methods catalog to choose an available placeholder." />
          <Link
            className="mt-6 inline-flex h-11 items-center rounded-md bg-cobalt px-5 text-[15px] font-semibold text-white shadow-button transition hover:bg-cobaltDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
            to="/methods"
          >
            Back to methods
          </Link>
        </div>
      </>
    );
  }

  if (methodLesson) {
    const redirectTo = getNumericalMethodLessonRoute(methodLesson.slug);
    return redirectTo ? <Navigate to={redirectTo} replace /> : null;
  }

  if (!module) {
    return null;
  }

  return (
    <>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Methods', to: '/methods' }, { label: module.title }]} />

      <section className="grid gap-8 pt-8 lg:grid-cols-[minmax(0,1fr)_330px]">
        <div>
          <StatusBadge />
          <h1 className="mt-4 font-display text-[clamp(3.5rem,6vw,5.5rem)] leading-[0.95] text-navy">{module.title}</h1>
          <p className="mt-5 max-w-2xl text-[18px] leading-[1.6] text-muted">{module.description}</p>
        </div>

        <div className="rounded-[8px] border border-line bg-white/70 p-5 shadow-card">
          <ModuleIllustrationGraphic type={module.illustration} className="h-32 w-full" />
          <Link
            className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-md border border-line bg-white/80 text-[14px] font-semibold text-cobalt transition hover:border-cobalt/40 hover:text-cobaltDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
            to="/methods"
          >
            Back to methods
          </Link>
        </div>
      </section>

      <section className="grid gap-5 pt-9 md:grid-cols-2">
        {workspaceSections.map((title) => (
          <article key={title} className="min-h-[220px] rounded-[8px] border border-dashed border-line bg-white/60 p-6 shadow-card">
            <h2 className="text-[22px] font-semibold text-navy">{title}</h2>
            <p className="mt-3 text-[15px] leading-6 text-muted">Reserved for future curriculum content.</p>
          </article>
        ))}
      </section>
    </>
  );
}
