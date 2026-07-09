import { PageHeader } from '../components/PageHeader';
import { StatusBadge } from '../components/StatusBadge';

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About Numera."
        description="Numera is a design-first platform template for learning numerical methods through readable explanations, visual workspaces, and code-oriented examples."
      />

      <section className="grid gap-5 pt-9 md:grid-cols-2">
        {[
          ['Purpose', 'Create a calm academic workspace where future numerical methods content can connect theory, visualization, and implementation.'],
          ['Visual learning', 'The interface is shaped around plots, iteration tables, formula boxes, and code previews rather than static lecture pages.'],
          ['Development status', 'The landing page, routing, and interaction shell are in place. Curriculum planning and final lesson content come later.'],
          ['Scope', 'This template avoids institutional claims, accounts, payment, and backend features while the learning structure is being planned.'],
        ].map(([title, body]) => (
          <article key={title} className="rounded-[8px] border border-line bg-white/70 p-5 shadow-card">
            <StatusBadge>{title === 'Development status' ? 'Template in progress' : 'Platform note'}</StatusBadge>
            <h2 className="mt-4 text-[23px] font-semibold text-navy">{title}</h2>
            <p className="mt-3 text-[16px] leading-7 text-muted">{body}</p>
          </article>
        ))}
      </section>
    </>
  );
}
