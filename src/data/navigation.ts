export type NavigationItem = {
  label: string;
  path: string;
  match?: string;
};

export const navigationItems: NavigationItem[] = [
  { label: 'Home', path: '/', match: '/' },
  { label: 'Lessons', path: '/lessons', match: '/lessons' },
  { label: 'Methods', path: '/methods', match: '/methods' },
  { label: 'About', path: '/about', match: '/about' },
];
