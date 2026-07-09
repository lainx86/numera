import { Link } from 'react-router-dom';

type Crumb = {
  label: string;
  to?: string;
};

type BreadcrumbProps = {
  items: Crumb[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="pt-10">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[12px] text-muted">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.to ? (
              <Link className="font-semibold text-cobalt hover:text-cobaltDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt" to={item.to}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
            {index < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
