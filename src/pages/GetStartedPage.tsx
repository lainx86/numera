import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';

const options = [
  {
    title: 'Explore lessons',
    description: 'Open the planned lesson catalog and preview future learning paths.',
    path: '/lessons',
  },
  {
    title: 'Browse methods',
    description: 'Review module placeholders and open a method workspace shell.',
    path: '/methods',
  },
  {
    title: 'Open fundamentals',
    description: 'Start from Python or MATLAB foundations before moving into method lessons.',
    path: '/lessons/fundamentals/python/variables-and-data-types',
  },
];

export function GetStartedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get started"
        title="Start exploring Numera."
        description="Choose one of the template surfaces below. No account, progress tracking, or final curriculum setup is required yet."
      />

      <section className="grid gap-5 pt-9 md:grid-cols-3">
        {options.map((option) => (
          <Link
            key={option.path}
            className="rounded-[8px] border border-line bg-white/70 p-6 shadow-card transition hover:-translate-y-0.5 hover:border-cobalt/35 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
            to={option.path}
          >
            <h2 className="text-[23px] font-semibold text-navy">{option.title}</h2>
            <p className="mt-3 min-h-[72px] text-[15px] leading-6 text-muted">{option.description}</p>
            <span className="mt-5 inline-flex text-[14px] font-semibold text-cobalt">Continue &rarr;</span>
          </Link>
        ))}
      </section>
    </>
  );
}
