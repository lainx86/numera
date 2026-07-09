import { modulePlaceholders } from './modules';

export type SearchEntry = {
  title: string;
  description: string;
  path: string;
  type: 'Page' | 'Module';
  keywords: string[];
};

export const searchEntries: SearchEntry[] = [
  {
    title: 'Lessons',
    description: 'Placeholder lesson catalog for planned Numera learning paths.',
    path: '/lessons',
    type: 'Page',
    keywords: ['lessons', 'learning', 'curriculum', 'visualizations'],
  },
  {
    title: 'Methods',
    description: 'Browse placeholder method modules prepared for future curriculum.',
    path: '/methods',
    type: 'Page',
    keywords: ['methods', 'modules', 'numerical methods'],
  },
  {
    title: 'Examples',
    description: 'Python and MATLAB implementation previews.',
    path: '/examples',
    type: 'Page',
    keywords: ['examples', 'python', 'matlab', 'code'],
  },
  {
    title: 'Documentation',
    description: 'Platform guidance for navigation, visualizations, and accessibility.',
    path: '/docs',
    type: 'Page',
    keywords: ['docs', 'documentation', 'guide', 'keyboard'],
  },
  {
    title: 'About Numera',
    description: 'Learn what Numera is and how the platform is being developed.',
    path: '/about',
    type: 'Page',
    keywords: ['about', 'numera', 'status'],
  },
  ...modulePlaceholders.map((module) => ({
    title: module.title,
    description: module.description,
    path: `/methods/${module.slug}`,
    type: 'Module' as const,
    keywords: [module.title, module.slug, module.category, 'module placeholder'],
  })),
];

export function searchLocalIndex(query: string) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return searchEntries;
  }

  return searchEntries.filter((entry) => {
    const haystack = [entry.title, entry.description, entry.type, ...entry.keywords].join(' ').toLowerCase();
    return haystack.includes(normalized);
  });
}
