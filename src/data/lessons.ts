export type LessonCategory = 'fundamentals' | 'numerical-methods';

export type LessonItem = {
  title: string;
  slug: string;
  path: string;
  description: string;
  category: LessonCategory;
  actionText: string;
  badge: string;
  order?: number;
};

export const fundamentalsLessons: LessonItem[] = [
  {
    title: 'Python Fundamentals',
    slug: 'python',
    path: '/fundamentals/python',
    description: 'Learn the core Python concepts needed for scientific and numerical computing.',
    category: 'fundamentals',
    actionText: 'Open learning path',
    badge: 'Fundamentals',
  },
  {
    title: 'MATLAB Fundamentals',
    slug: 'matlab',
    path: '/fundamentals/matlab',
    description: 'Learn the core MATLAB concepts needed for matrix-based numerical computing.',
    category: 'fundamentals',
    actionText: 'Open learning path',
    badge: 'Fundamentals',
  },
];

export const numericalMethodLessons: LessonItem[] = Array.from({ length: 5 }, (_, index) => {
  const order = index + 1;
  const padded = String(order).padStart(2, '0');

  return {
    order,
    title: `Method Placeholder ${padded}`,
    slug: `method-placeholder-${padded}`,
    path: `/methods/method-placeholder-${padded}`,
    description: 'A planned numerical methods lesson that will later include theory, visualization, and code implementation.',
    category: 'numerical-methods',
    actionText: 'Open lesson shell',
    badge: `Lesson ${padded}`,
  };
});

export const lessonCatalog = [...fundamentalsLessons, ...numericalMethodLessons];

export function getFundamentalsLessonBySlug(slug: string | undefined) {
  return fundamentalsLessons.find((lesson) => lesson.slug === slug);
}

export function getNumericalMethodLessonBySlug(slug: string | undefined) {
  return numericalMethodLessons.find((lesson) => lesson.slug === slug);
}
