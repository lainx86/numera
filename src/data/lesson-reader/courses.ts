import { fundamentalsSections, numericalMethodSections } from './sections';
import type { Course, Lesson, LessonBlock } from './types';

const sharedFundamentalsBlocks = (language: 'Python' | 'MATLAB', focus: string): LessonBlock[] => [
  { type: 'heading', level: 2, id: 'overview', title: 'Overview' },
  {
    type: 'paragraph',
    text: `${language} fundamentals are reserved here as a structured learning path before learners enter numerical methods. This placeholder explains the role of the lesson without final curriculum content.`,
  },
  { type: 'heading', level: 3, id: 'why-it-matters', title: 'Why it matters' },
  {
    type: 'paragraph',
    text: `This section will connect the ${focus} concept to scientific computing workflows, notebooks, and implementation habits.`,
  },
  { type: 'callout', title: 'Curriculum in planning', text: 'Detailed explanations, examples, and exercises will be added after the curriculum map is finalized.', tone: 'success' },
  { type: 'heading', level: 2, id: 'core-concept', title: 'Core concept' },
  { type: 'heading', level: 3, id: 'mental-model', title: 'Mental model' },
  { type: 'paragraph', text: 'Use this area for a concise conceptual model. Keep it short, visual, and connected to later numerical workflows.' },
  { type: 'heading', level: 3, id: 'key-terms', title: 'Key terms' },
  { type: 'definition', term: 'Placeholder term', text: 'A concise definition will live here once the final lesson language is approved.' },
  { type: 'heading', level: 2, id: 'syntax', title: 'Syntax' },
  { type: 'heading', level: 3, id: 'basic-pattern', title: 'Basic pattern' },
  { type: 'paragraph', text: 'This subsection is reserved for the syntax pattern learners should recognize and practice.' },
  { type: 'heading', level: 3, id: 'naming-conventions', title: 'Naming conventions' },
  { type: 'paragraph', text: 'Naming and formatting guidance will be tailored to the final language track.' },
  { type: 'heading', level: 2, id: 'code-example', title: 'Code example' },
  {
    type: 'code',
    language,
    filename: language === 'Python' ? 'lesson_placeholder.py' : 'lesson_placeholder.m',
    lineNumbers: true,
    code:
      language === 'Python'
        ? `# Placeholder example\nvalue = 1.0\nstep = 0.25\nnext_value = value + step\nprint(next_value)`
        : `% Placeholder example\nvalue = 1.0;\nstep = 0.25;\nnextValue = value + step;\ndisp(nextValue);`,
  },
  { type: 'heading', level: 3, id: 'walkthrough', title: 'Walkthrough' },
  { type: 'example', title: 'Reading the example', text: 'This block will later explain each line and connect it to future numerical method notation.' },
  { type: 'heading', level: 2, id: 'common-mistakes', title: 'Common mistakes' },
  { type: 'paragraph', text: 'This area will list common beginner mistakes and how learners can check their work.' },
  { type: 'heading', level: 3, id: 'debugging-checklist', title: 'Debugging checklist' },
  { type: 'table', caption: 'Placeholder debugging checklist', headers: ['Check', 'Why it matters'], rows: [['Variable names', 'Keeps examples readable'], ['Output shape', 'Prepares for array and matrix work']] },
  { type: 'heading', level: 2, id: 'mini-exercise', title: 'Mini exercise' },
  { type: 'exercise', title: 'Practice shell', prompt: 'Replace the placeholder values with your own numbers and predict the output before running the code.' },
  { type: 'heading', level: 3, id: 'summary', title: 'Summary' },
  { type: 'paragraph', text: 'A short recap and next-step prompt will be added here after the lesson sequence is finalized.' },
];

const numericalBlocks: LessonBlock[] = [
  { type: 'heading', level: 2, id: 'overview', title: 'Overview' },
  { type: 'paragraph', text: 'This numerical methods lesson shell reserves space for theory, visualization, and code implementation without committing to final curriculum content.' },
  { type: 'heading', level: 3, id: 'lesson-purpose', title: 'Lesson purpose' },
  { type: 'paragraph', text: 'Use this subsection to explain why the method matters and where it fits in the broader sequence.' },
  { type: 'heading', level: 2, id: 'learning-objectives', title: 'Learning objectives' },
  { type: 'heading', level: 3, id: 'outcomes', title: 'Outcomes' },
  { type: 'callout', title: 'Planning note', text: 'Objectives will be written after the method order and assessment goals are approved.' },
  { type: 'heading', level: 2, id: 'prerequisites', title: 'Prerequisites' },
  { type: 'heading', level: 3, id: 'required-background', title: 'Required background' },
  { type: 'paragraph', text: 'List prerequisite algebra, programming, and plotting concepts here.' },
  { type: 'heading', level: 2, id: 'mathematical-theory', title: 'Mathematical theory' },
  { type: 'heading', level: 3, id: 'notation', title: 'Notation' },
  { type: 'formula', formula: 'x_{k+1} = x_k + step', caption: 'Placeholder update expression', number: '1' },
  { type: 'heading', level: 3, id: 'assumptions', title: 'Assumptions' },
  { type: 'definition', term: 'Iteration state', text: 'A compact representation of the current approximation, error estimate, and stopping criteria.' },
  { type: 'heading', level: 2, id: 'algorithm', title: 'Algorithm' },
  { type: 'heading', level: 3, id: 'pseudocode', title: 'Pseudocode' },
  { type: 'code', language: 'Pseudocode', filename: 'method-shell.txt', lineNumbers: true, code: `choose initial state\nrepeat until stopping rule\n    compute next state\n    record error\nreturn result` },
  { type: 'heading', level: 3, id: 'iteration-state', title: 'Iteration state' },
  { type: 'table', caption: 'Placeholder iteration table', headers: ['k', 'state', 'error'], rows: [['0', 'initial', 'large'], ['1', 'updated', 'smaller'], ['2', 'final', 'target']] },
  { type: 'heading', level: 2, id: 'interactive-visualization', title: 'Interactive visualization' },
  { type: 'heading', level: 3, id: 'visual-workspace', title: 'Visual workspace' },
  { type: 'figure', title: 'Visualization placeholder', caption: 'A future interactive plot will connect formula updates, tables, and code.' },
  { type: 'heading', level: 2, id: 'implementation', title: 'Implementation' },
  { type: 'heading', level: 3, id: 'python-implementation', title: 'Python' },
  { type: 'heading', level: 3, id: 'matlab-implementation', title: 'MATLAB' },
  { type: 'language-tabs', python: `# Placeholder implementation\nstate = 0.0\nfor k in range(3):\n    state = state + 0.25\nprint(state)`, matlab: `% Placeholder implementation\nstate = 0.0;\nfor k = 1:3\n    state = state + 0.25;\nend\ndisp(state);` },
  { type: 'heading', level: 2, id: 'error-and-convergence', title: 'Error and convergence' },
  { type: 'heading', level: 3, id: 'convergence-notes', title: 'Convergence notes' },
  { type: 'paragraph', text: 'This section will eventually compare error behavior, stopping criteria, and convergence interpretation.' },
  { type: 'heading', level: 2, id: 'exercises', title: 'Exercises' },
  { type: 'exercise', title: 'Exploration shell', prompt: 'Change one placeholder parameter and describe what you expect to happen to the iteration table.' },
  { type: 'heading', level: 3, id: 'summary', title: 'Summary' },
  { type: 'paragraph', text: 'The final lesson summary will recap the method, implementation pattern, and next reading step.' },
];

const pythonLessons: Lesson[] = [
  {
    id: 'python-getting-started',
    slug: 'getting-started',
    order: 1,
    title: 'Getting Started',
    description: 'A placeholder orientation for the Python fundamentals track.',
    duration: '12 min',
    difficulty: 'Beginner',
    sections: fundamentalsSections,
    blocks: sharedFundamentalsBlocks('Python', 'setup and execution'),
  },
  {
    id: 'python-variables-and-data-types',
    slug: 'variables-and-data-types',
    order: 2,
    title: 'Variables and Data Types',
    description: 'A structured placeholder lesson for Python values, variables, and simple data types.',
    duration: '18 min',
    difficulty: 'Beginner',
    prerequisites: ['Getting Started'],
    sections: fundamentalsSections,
    blocks: sharedFundamentalsBlocks('Python', 'variables and data types'),
  },
  {
    id: 'python-control-flow',
    slug: 'control-flow',
    order: 3,
    title: 'Control Flow',
    description: 'A placeholder shell for conditions, loops, and program structure.',
    duration: '20 min',
    difficulty: 'Beginner',
    prerequisites: ['Variables and Data Types'],
    sections: fundamentalsSections,
    blocks: sharedFundamentalsBlocks('Python', 'control flow'),
  },
];

const matlabLessons: Lesson[] = [
  {
    id: 'matlab-getting-started',
    slug: 'getting-started',
    order: 1,
    title: 'Getting Started',
    description: 'A placeholder orientation for the MATLAB fundamentals track.',
    duration: '12 min',
    difficulty: 'Beginner',
    sections: fundamentalsSections,
    blocks: sharedFundamentalsBlocks('MATLAB', 'scripts and command window usage'),
  },
  {
    id: 'matlab-vectors-and-matrices',
    slug: 'vectors-and-matrices',
    order: 2,
    title: 'Vectors and Matrices',
    description: 'A structured placeholder lesson for matrix-oriented numerical computing.',
    duration: '20 min',
    difficulty: 'Beginner',
    prerequisites: ['Getting Started'],
    sections: fundamentalsSections,
    blocks: sharedFundamentalsBlocks('MATLAB', 'vectors and matrices'),
  },
  {
    id: 'matlab-control-flow',
    slug: 'control-flow',
    order: 3,
    title: 'Control Flow',
    description: 'A placeholder shell for conditions, loops, and script structure in MATLAB.',
    duration: '20 min',
    difficulty: 'Beginner',
    prerequisites: ['Vectors and Matrices'],
    sections: fundamentalsSections,
    blocks: sharedFundamentalsBlocks('MATLAB', 'control flow'),
  },
];

const numericalLessons: Lesson[] = Array.from({ length: 5 }, (_, index) => {
  const order = index + 1;
  const padded = String(order).padStart(2, '0');
  return {
    id: `numerical-method-${padded}`,
    slug: `method-placeholder-${padded}`,
    order,
    title: `Method Placeholder ${padded}`,
    description: 'A planned numerical methods lesson shell for theory, visualization, and implementation.',
    duration: '24 min',
    difficulty: 'Planning',
    prerequisites: ['Python or MATLAB fundamentals'],
    sections: numericalMethodSections,
    blocks: numericalBlocks,
  };
});

export const lessonCourses: Course[] = [
  {
    id: 'python-fundamentals',
    slug: 'python',
    title: 'Python Fundamentals',
    type: 'fundamentals',
    description: 'Language foundations for scientific and numerical computing in Python.',
    lessons: pythonLessons,
  },
  {
    id: 'matlab-fundamentals',
    slug: 'matlab',
    title: 'MATLAB Fundamentals',
    type: 'fundamentals',
    description: 'Language foundations for matrix-based numerical computing in MATLAB.',
    lessons: matlabLessons,
  },
  {
    id: 'numerical-methods',
    slug: 'numerical-methods',
    title: 'Numerical Methods',
    type: 'numerical-methods',
    description: 'Planned method lessons for theory, visualization, and code implementation.',
    lessons: numericalLessons,
  },
];

export function getCourseByRoute(courseType: string | undefined, courseSlug: string | undefined) {
  if (courseType === 'numerical-methods') {
    return lessonCourses.find((course) => course.type === 'numerical-methods');
  }

  if (courseType === 'fundamentals') {
    return lessonCourses.find((course) => course.type === 'fundamentals' && course.slug === courseSlug);
  }

  return undefined;
}

export function getLessonRoute(course: Course, lesson: Lesson) {
  if (course.type === 'numerical-methods') {
    return `/lessons/numerical-methods/${lesson.slug}`;
  }

  return `/lessons/fundamentals/${course.slug}/${lesson.slug}`;
}

export function getLessonBySlug(course: Course | undefined, lessonSlug: string | undefined) {
  return course?.lessons.find((lesson) => lesson.slug === lessonSlug);
}

export function getAdjacentLessons(course: Course, lesson: Lesson) {
  const index = course.lessons.findIndex((item) => item.id === lesson.id);
  return {
    previous: index > 0 ? course.lessons[index - 1] : undefined,
    next: index < course.lessons.length - 1 ? course.lessons[index + 1] : undefined,
  };
}

export function getFirstLessonRouteForFundamentals(slug: string | undefined) {
  const course = lessonCourses.find((item) => item.type === 'fundamentals' && item.slug === slug);
  if (!course) return undefined;
  const preferred = course.slug === 'python' ? 'variables-and-data-types' : 'vectors-and-matrices';
  const lesson = course.lessons.find((item) => item.slug === preferred) ?? course.lessons[0];
  return getLessonRoute(course, lesson);
}

export function getNumericalMethodLessonRoute(slug: string | undefined) {
  const course = lessonCourses.find((item) => item.type === 'numerical-methods');
  const lesson = course?.lessons.find((item) => item.slug === slug);
  if (!course || !lesson) return undefined;
  return getLessonRoute(course, lesson);
}
