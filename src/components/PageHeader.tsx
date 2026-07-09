import type { ReactNode } from 'react';

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="pt-16">
      {eyebrow && (
        <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-muted">
          {eyebrow}
        </p>
      )}
      <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <h1 className="font-display text-[clamp(3.5rem,6vw,5.6rem)] leading-[0.95] text-navy">{title}</h1>
          <p className="mt-5 max-w-2xl text-[18px] leading-[1.6] text-muted">{description}</p>
        </div>
        {children && <div className="shrink-0">{children}</div>}
      </div>
    </section>
  );
}
