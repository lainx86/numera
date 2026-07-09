export type ModuleIllustration = 'interval' | 'tangent' | 'matrix' | 'step' | 'interpolation';

export type ModulePlaceholder = {
  title: string;
  slug: string;
  description: string;
  illustration: ModuleIllustration;
  category: string;
};

export const modulePlaceholders: ModulePlaceholder[] = [
  {
    title: 'Module Placeholder 01',
    slug: 'module-placeholder-01',
    description: 'A clean slot for a future method, example set, or guided notebook.',
    illustration: 'interval',
    category: 'Foundations',
  },
  {
    title: 'Module Placeholder 02',
    slug: 'module-placeholder-02',
    description: 'Designed for visual steps, concise notes, and implementation links.',
    illustration: 'tangent',
    category: 'Root finding',
  },
  {
    title: 'Module Placeholder 03',
    slug: 'module-placeholder-03',
    description: 'Prepared for structured formulas, tables, and matrix workflows.',
    illustration: 'matrix',
    category: 'Linear systems',
  },
  {
    title: 'Module Placeholder 04',
    slug: 'module-placeholder-04',
    description: 'A reusable card pattern for sequences, steps, and plotted output.',
    illustration: 'step',
    category: 'Time stepping',
  },
  {
    title: 'Module Placeholder 05',
    slug: 'module-placeholder-05',
    description: 'Ready for discrete data, smooth curves, and comparison views.',
    illustration: 'interpolation',
    category: 'Data fitting',
  },
];

export function getModuleBySlug(slug: string | undefined) {
  return modulePlaceholders.find((module) => module.slug === slug);
}
