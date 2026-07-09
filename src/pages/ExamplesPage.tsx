import { useMemo, useState } from 'react';
import { CopyButton } from '../components/CopyButton';
import { PageHeader } from '../components/PageHeader';
import { StatusBadge } from '../components/StatusBadge';

const snippets = {
  Python: `# Placeholder example shell
def method_step(state):
    next_state = state
    return next_state`,
  MATLAB: `% Placeholder example shell
function nextState = method_step(state)
    nextState = state;
end`,
};

const examples = [
  'Notebook-style implementation shell',
  'Side-by-side formula and code shell',
  'Visualization-ready output shell',
];

export function ExamplesPage() {
  const [language, setLanguage] = useState<'Python' | 'MATLAB'>('Python');
  const code = useMemo(() => snippets[language], [language]);

  return (
    <>
      <PageHeader
        eyebrow="Examples"
        title="Implementation previews."
        description="Short placeholder examples for future Python and MATLAB implementations. These are structural templates, not final algorithms."
      />

      <section className="pt-9">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Example language">
          {(['Python', 'MATLAB'] as const).map((item) => (
            <button
              key={item}
              className={`rounded-md border px-4 py-2 text-[14px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt ${
                language === item
                  ? 'border-cobalt/40 bg-cobalt text-white'
                  : 'border-line bg-white/75 text-ink hover:border-cobalt/40 hover:text-cobalt'
              }`}
              type="button"
              role="tab"
              aria-selected={language === item}
              onClick={() => setLanguage(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.25fr]">
          <div className="grid gap-4">
            {examples.map((title) => (
              <article key={title} className="rounded-[8px] border border-line bg-white/70 p-5 shadow-card">
                <StatusBadge />
                <h2 className="mt-4 text-[19px] font-semibold text-navy">{title}</h2>
                <p className="mt-2 text-[15px] leading-6 text-muted">Prepared for future worked examples and downloadable notes.</p>
              </article>
            ))}
          </div>

          <div className="rounded-[8px] border border-line bg-white/75 p-5 shadow-card">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[18px] font-semibold text-navy">{language} placeholder</h2>
              <CopyButton value={code} />
            </div>
            <pre className="mt-4 overflow-auto rounded-md border border-softLine bg-[#f7f9fc] p-4 font-mono text-[13px] leading-6 text-ink">
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}
