import { Link } from 'react-router-dom';
import type { ModulePlaceholder } from '../data/modules';
import { ModuleIllustrationGraphic } from './ModuleIllustrations';

type ModuleCardProps = {
  module: ModulePlaceholder;
};

export function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Link
      to={`/methods/${module.slug}`}
      className="group block min-h-[225px] rounded-[8px] border border-line bg-white/72 px-[21px] pb-[18px] pt-[17px] shadow-card backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-cobalt/35 hover:bg-white/90 hover:shadow-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
    >
      <article>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[16px] font-semibold leading-6 text-[#173064]">{module.title}</h3>
          <span className="mt-1 rounded-full border border-line bg-white/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
            {module.category}
          </span>
        </div>
        <ModuleIllustrationGraphic type={module.illustration} className="mt-2 h-[86px] w-full" />
        <p className="mt-3 min-h-[45px] text-[13.5px] leading-[1.35] text-[#46577e]">{module.description}</p>
        <span className="mt-4 inline-flex items-center text-[14px] font-semibold text-cobalt group-hover:text-cobaltDark">
          Explore
          <span className="ml-2 text-lg leading-none" aria-hidden="true">
            &rarr;
          </span>
        </span>
      </article>
    </Link>
  );
}
