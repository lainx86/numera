export type CourseType = 'fundamentals' | 'numerical-methods';

export type LessonSection = {
  id: string;
  title: string;
  children?: LessonSection[];
};

export type LessonBlock =
  | {
      type: 'paragraph';
      text: string;
    }
  | {
      type: 'heading';
      level: 2 | 3 | 4;
      id: string;
      title: string;
    }
  | {
      type: 'formula';
      formula: string;
      caption?: string;
      number?: string;
    }
  | {
      type: 'code';
      language: string;
      filename?: string;
      code: string;
      lineNumbers?: boolean;
    }
  | {
      type: 'callout';
      title: string;
      text: string;
      tone?: 'info' | 'success';
    }
  | {
      type: 'definition';
      term: string;
      text: string;
    }
  | {
      type: 'example';
      title: string;
      text: string;
    }
  | {
      type: 'figure';
      title: string;
      caption: string;
    }
  | {
      type: 'table';
      caption: string;
      headers: string[];
      rows: string[][];
    }
  | {
      type: 'exercise';
      title: string;
      prompt: string;
    }
  | {
      type: 'language-tabs';
      python: string;
      matlab: string;
    };

export type Lesson = {
  id: string;
  slug: string;
  order: number;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  prerequisites?: string[];
  sections: LessonSection[];
  blocks: LessonBlock[];
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  type: CourseType;
  description: string;
  lessons: Lesson[];
};
