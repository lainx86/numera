import { useMemo, useState } from 'react';
import { EmptyState } from '../components/EmptyState';
import { ModuleCard } from '../components/ModuleCard';
import { PageHeader } from '../components/PageHeader';
import { modulePlaceholders } from '../data/modules';

const categories = ['All', ...Array.from(new Set(modulePlaceholders.map((module) => module.category)))];

export function MethodsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filteredModules = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return modulePlaceholders.filter((module) => {
      const matchesCategory = category === 'All' || module.category === category;
      const matchesQuery =
        !normalized ||
        [module.title, module.description, module.category, module.slug].join(' ').toLowerCase().includes(normalized);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <PageHeader
        eyebrow="Methods catalog"
        title="Browse planned modules."
        description="A placeholder catalog for numerical method modules. The structure is ready; curriculum details are still being planned."
      />

      <section className="pt-9">
        <div className="flex flex-col gap-4 rounded-[8px] border border-line bg-white/66 p-4 shadow-card sm:flex-row sm:items-center sm:justify-between">
          <label className="block flex-1">
            <span className="sr-only">Search methods</span>
            <input
              className="h-11 w-full rounded-md border border-line bg-white/85 px-4 text-[15px] text-ink outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/15"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search placeholder modules..."
            />
          </label>
          <div className="flex flex-wrap gap-2" aria-label="Filter methods by category">
            {categories.map((item) => (
              <button
                key={item}
                className={`rounded-full border px-3 py-2 text-[13px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt ${
                  category === item
                    ? 'border-cobalt/40 bg-cobalt text-white'
                    : 'border-line bg-white/75 text-ink hover:border-cobalt/40 hover:text-cobalt'
                }`}
                type="button"
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {filteredModules.map((module) => (
            <ModuleCard key={module.slug} module={module} />
          ))}
        </div>

        {filteredModules.length === 0 && (
          <div className="mt-7">
            <EmptyState title="No placeholder modules found" description="Try a broader keyword or reset the category filter." />
          </div>
        )}
      </section>
    </>
  );
}
