import { Link } from 'react-router-dom';
import { EmptyState } from '../components/EmptyState';

export function NotFoundPage() {
  return (
    <section className="pt-20">
      <EmptyState title="Page not found" description="This Numera route is not available. Return to the landing page or browse planned modules." />
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          className="inline-flex h-11 items-center rounded-md bg-cobalt px-5 text-[15px] font-semibold text-white shadow-button transition hover:bg-cobaltDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
          to="/"
        >
          Go home
        </Link>
        <Link
          className="inline-flex h-11 items-center rounded-md border border-line bg-white/75 px-5 text-[15px] font-semibold text-cobalt transition hover:border-cobalt/40 hover:text-cobaltDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
          to="/methods"
        >
          Browse methods
        </Link>
      </div>
    </section>
  );
}
