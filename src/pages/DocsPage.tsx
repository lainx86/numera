import { PageHeader } from '../components/PageHeader';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    body: 'Numera is currently a visual template for learning numerical methods. The curriculum content is intentionally still in planning.',
  },
  {
    id: 'navigating-lessons',
    title: 'Navigating lessons',
    body: 'Use the lesson catalog to move between planned learning shells and method workspaces.',
  },
  {
    id: 'interactive-visualizations',
    title: 'Using interactive visualizations',
    body: 'Preview panels are designed for formulas, plots, tables, and iteration controls that can be expanded later.',
  },
  {
    id: 'python-matlab',
    title: 'Python and MATLAB examples',
    body: 'Example pages reserve space for side-by-side implementation snippets without final algorithm content.',
  },
  {
    id: 'keyboard-accessibility',
    title: 'Keyboard accessibility',
    body: 'Navigation, tabs, dialogs, and cards are built with keyboard focus states and semantic controls.',
  },
];

export function DocsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Docs"
        title="Using Numera."
        description="Platform documentation for moving through the template, using previews, and accessing planned learning surfaces."
      />

      <section className="grid gap-7 pt-9 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-[8px] border border-line bg-white/70 p-4 shadow-card lg:sticky lg:top-6">
          <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">Contents</p>
          <nav className="mt-4 grid gap-2" aria-label="Documentation contents">
            {sections.map((section) => (
              <a
                key={section.id}
                className="rounded-md px-3 py-2 text-[14px] font-semibold text-ink transition hover:bg-white hover:text-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
                href={`#${section.id}`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        <div className="grid gap-5">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-8 rounded-[8px] border border-line bg-white/70 p-6 shadow-card">
              <h2 className="text-[24px] font-semibold text-navy">{section.title}</h2>
              <p className="mt-3 text-[16px] leading-7 text-muted">{section.body}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
