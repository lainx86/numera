import { Link, useSearchParams } from 'react-router-dom';
import { EmptyState } from '../components/EmptyState';
import { PageHeader } from '../components/PageHeader';
import { searchLocalIndex } from '../data/search-index';

export function SearchPage() {
  const [params] = useSearchParams();
  const query = params.get('q') ?? '';
  const results = searchLocalIndex(query);

  return (
    <>
      <PageHeader
        eyebrow="Search"
        title="Search results."
        description={query ? `Showing local placeholder results for "${query}".` : 'Showing all searchable placeholder pages and modules.'}
      />

      <section className="pt-9">
        {results.length > 0 ? (
          <div className="grid gap-4">
            {results.map((result) => (
              <Link
                key={`${result.type}-${result.path}`}
                className="rounded-[8px] border border-line bg-white/70 p-5 shadow-card transition hover:-translate-y-0.5 hover:border-cobalt/35 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
                to={result.path}
              >
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-cobalt">
                  {result.type}
                </span>
                <h2 className="mt-2 text-[21px] font-semibold text-navy">{result.title}</h2>
                <p className="mt-2 text-[15px] leading-6 text-muted">{result.description}</p>
              </Link>
            ))}
          </div>
        ) : (
          <EmptyState title="No results found" description="Try searching for lessons, methods, examples, docs, or a module placeholder number." />
        )}
      </section>
    </>
  );
}
