import type { LessonSection } from './types';

export const fundamentalsSections: LessonSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    children: [{ id: 'why-it-matters', title: 'Why it matters' }],
  },
  {
    id: 'core-concept',
    title: 'Core concept',
    children: [
      { id: 'mental-model', title: 'Mental model' },
      { id: 'key-terms', title: 'Key terms' },
    ],
  },
  {
    id: 'syntax',
    title: 'Syntax',
    children: [
      { id: 'basic-pattern', title: 'Basic pattern' },
      { id: 'naming-conventions', title: 'Naming conventions' },
    ],
  },
  {
    id: 'code-example',
    title: 'Code example',
    children: [{ id: 'walkthrough', title: 'Walkthrough' }],
  },
  {
    id: 'common-mistakes',
    title: 'Common mistakes',
    children: [{ id: 'debugging-checklist', title: 'Debugging checklist' }],
  },
  {
    id: 'mini-exercise',
    title: 'Mini exercise',
    children: [{ id: 'summary', title: 'Summary' }],
  },
];

export const numericalMethodSections: LessonSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    children: [{ id: 'lesson-purpose', title: 'Lesson purpose' }],
  },
  {
    id: 'learning-objectives',
    title: 'Learning objectives',
    children: [{ id: 'outcomes', title: 'Outcomes' }],
  },
  {
    id: 'prerequisites',
    title: 'Prerequisites',
    children: [{ id: 'required-background', title: 'Required background' }],
  },
  {
    id: 'mathematical-theory',
    title: 'Mathematical theory',
    children: [
      { id: 'notation', title: 'Notation' },
      { id: 'assumptions', title: 'Assumptions' },
    ],
  },
  {
    id: 'algorithm',
    title: 'Algorithm',
    children: [
      { id: 'pseudocode', title: 'Pseudocode' },
      { id: 'iteration-state', title: 'Iteration state' },
    ],
  },
  {
    id: 'interactive-visualization',
    title: 'Interactive visualization',
    children: [{ id: 'visual-workspace', title: 'Visual workspace' }],
  },
  {
    id: 'implementation',
    title: 'Implementation',
    children: [
      { id: 'python-implementation', title: 'Python' },
      { id: 'matlab-implementation', title: 'MATLAB' },
    ],
  },
  {
    id: 'error-and-convergence',
    title: 'Error and convergence',
    children: [{ id: 'convergence-notes', title: 'Convergence notes' }],
  },
  {
    id: 'exercises',
    title: 'Exercises',
    children: [{ id: 'summary', title: 'Summary' }],
  },
];

export function flattenSections(sections: LessonSection[]) {
  const flattened: LessonSection[] = [];

  function walk(items: LessonSection[]) {
    for (const item of items) {
      flattened.push(item);
      if (item.children) {
        walk(item.children);
      }
    }
  }

  walk(sections);
  return flattened;
}
