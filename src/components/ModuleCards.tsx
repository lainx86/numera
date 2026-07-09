import { modulePlaceholders } from '../data/modules';
import { ModuleCard } from './ModuleCard';

export function ModuleCards() {
  return (
    <section id="modules" className="pt-[42px]">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {modulePlaceholders.map((module) => (
          <ModuleCard key={module.slug} module={module} />
        ))}
      </div>
    </section>
  );
}
