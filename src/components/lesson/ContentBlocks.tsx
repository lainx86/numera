import { useEffect, useState } from 'react';
import type { LessonBlock } from '../../data/lesson-reader';
import { CopyButton } from '../CopyButton';

type LessonParagraphProps = {
  children: string;
};

export function LessonParagraph({ children }: LessonParagraphProps) {
  return <p className="max-w-3xl text-[17px] leading-8 text-ink">{children}</p>;
}

type SectionHeadingProps = {
  id: string;
  title: string;
  level: 2 | 3 | 4;
};

export function SectionHeading({ id, title, level }: SectionHeadingProps) {
  const HeadingTag = `h${level}` as const;
  const size = level === 2 ? 'mt-14 font-display text-[42px] leading-none' : level === 3 ? 'mt-9 text-[25px]' : 'mt-7 text-[19px]';

  return (
    <HeadingTag id={id} className={`group scroll-mt-28 font-semibold text-navy ${size}`}>
      <a className="inline-flex items-center gap-2 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt" href={`#${id}`}>
        {title}
        <span className="opacity-0 transition group-hover:opacity-100" aria-hidden="true">
          #
        </span>
      </a>
    </HeadingTag>
  );
}

type FormulaBlockProps = {
  formula: string;
  caption?: string;
  number?: string;
};

export function FormulaBlock({ formula, caption, number }: FormulaBlockProps) {
  return (
    <figure className="max-w-3xl rounded-[8px] border border-line bg-white/72 p-5 shadow-card">
      <div className="flex items-center justify-between gap-4">
        <code className="font-mono text-[18px] text-ink">{formula}</code>
        {number && <span className="font-mono text-[12px] text-muted">({number})</span>}
      </div>
      {caption && <figcaption className="mt-3 text-[14px] leading-6 text-muted">{caption}</figcaption>}
    </figure>
  );
}

type CodeBlockProps = {
  language: string;
  code: string;
  filename?: string;
  lineNumbers?: boolean;
};

export function CodeBlock({ language, code, filename, lineNumbers = false }: CodeBlockProps) {
  const lines = code.split('\n');

  return (
    <div className="max-w-3xl overflow-hidden rounded-[8px] border border-line bg-white/75 shadow-card">
      <div className="flex items-center justify-between gap-4 border-b border-softLine px-4 py-3">
        <div>
          <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-cobalt">{language}</p>
          {filename && <p className="mt-1 font-mono text-[12px] text-muted">{filename}</p>}
        </div>
        <CopyButton value={code} />
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-6 text-ink">
        <code>
          {lineNumbers
            ? lines.map((line, index) => (
                <span key={`${line}-${index}`} className="grid grid-cols-[32px_1fr] gap-3">
                  <span className="select-none text-right text-muted">{index + 1}</span>
                  <span>{line || ' '}</span>
                </span>
              ))
            : code}
        </code>
      </pre>
    </div>
  );
}

type CalloutProps = {
  title: string;
  text: string;
  tone?: 'info' | 'success';
};

export function Callout({ title, text, tone = 'info' }: CalloutProps) {
  return (
    <aside className={`max-w-3xl rounded-[8px] border p-5 shadow-card ${tone === 'success' ? 'border-[#bfe2cf] bg-success/75' : 'border-line bg-white/70'}`}>
      <p className="text-[16px] font-semibold text-navy">{title}</p>
      <p className="mt-2 text-[15px] leading-6 text-muted">{text}</p>
    </aside>
  );
}

export function DefinitionBlock({ term, text }: { term: string; text: string }) {
  return (
    <div className="max-w-3xl rounded-[8px] border border-line bg-white/70 p-5 shadow-card">
      <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-cobalt">Definition</p>
      <p className="mt-3 text-[20px] font-semibold text-navy">{term}</p>
      <p className="mt-2 text-[15px] leading-6 text-muted">{text}</p>
    </div>
  );
}

export function ExampleBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="max-w-3xl rounded-[8px] border border-line bg-white/70 p-5 shadow-card">
      <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">Example</p>
      <p className="mt-3 text-[20px] font-semibold text-navy">{title}</p>
      <p className="mt-2 text-[15px] leading-6 text-muted">{text}</p>
    </div>
  );
}

export function FigureBlock({ title, caption }: { title: string; caption: string }) {
  return (
    <figure className="max-w-3xl rounded-[8px] border border-line bg-white/70 p-5 shadow-card">
      <div className="grid aspect-[16/7] place-items-center rounded-md border border-dashed border-line bg-white/60">
        <span className="font-mono text-[13px] text-muted">{title}</span>
      </div>
      <figcaption className="mt-3 text-[14px] leading-6 text-muted">{caption}</figcaption>
    </figure>
  );
}

export function TableBlock({ caption, headers, rows }: { caption: string; headers: string[]; rows: string[][] }) {
  return (
    <div className="max-w-3xl overflow-hidden rounded-[8px] border border-line bg-white/75 shadow-card">
      <table className="w-full border-collapse text-left text-[14px] text-ink">
        <caption className="caption-bottom px-4 py-3 text-left text-[13px] text-muted">{caption}</caption>
        <thead className="bg-white/70">
          <tr>
            {headers.map((header) => (
              <th key={header} className="border-b border-line px-4 py-3 font-semibold text-navy">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={row.join('-')}>
              {row.map((cell, cellIndex) => (
                <td key={`${rowIndex}-${cellIndex}`} className="border-t border-softLine px-4 py-3 text-muted">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ExerciseBlock({ title, prompt }: { title: string; prompt: string }) {
  return (
    <div className="max-w-3xl rounded-[8px] border border-dashed border-line bg-white/60 p-5 shadow-card">
      <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-cobalt">Exercise</p>
      <p className="mt-3 text-[20px] font-semibold text-navy">{title}</p>
      <p className="mt-2 text-[15px] leading-6 text-muted">{prompt}</p>
    </div>
  );
}

export function LanguageTabs({ python, matlab }: { python: string; matlab: string }) {
  const [language, setLanguage] = useState<'python' | 'matlab'>(() => {
    if (typeof window === 'undefined') return 'python';
    return window.localStorage.getItem('numera-lesson-language') === 'matlab' ? 'matlab' : 'python';
  });

  useEffect(() => {
    window.localStorage.setItem('numera-lesson-language', language);
  }, [language]);

  const code = language === 'python' ? python : matlab;
  const label = language === 'python' ? 'Python' : 'MATLAB';

  return (
    <div className="max-w-3xl">
      <div className="mb-3 inline-grid grid-cols-2 overflow-hidden rounded-md border border-line bg-white/70" role="tablist" aria-label="Implementation language">
        {(['python', 'matlab'] as const).map((item) => (
          <button
            key={item}
            className={`px-4 py-2 text-[14px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt ${
              language === item ? 'bg-cobalt text-white' : 'text-ink hover:text-cobalt'
            }`}
            type="button"
            role="tab"
            aria-selected={language === item}
            onClick={() => setLanguage(item)}
          >
            {item === 'python' ? 'Python' : 'MATLAB'}
          </button>
        ))}
      </div>
      <div role="tabpanel">
        <CodeBlock language={label} filename={language === 'python' ? 'implementation.py' : 'implementation.m'} code={code} lineNumbers />
      </div>
    </div>
  );
}

export function LessonBlockRenderer({ block }: { block: LessonBlock }) {
  switch (block.type) {
    case 'paragraph':
      return <LessonParagraph>{block.text}</LessonParagraph>;
    case 'heading':
      return <SectionHeading id={block.id} level={block.level} title={block.title} />;
    case 'formula':
      return <FormulaBlock formula={block.formula} caption={block.caption} number={block.number} />;
    case 'code':
      return <CodeBlock language={block.language} filename={block.filename} code={block.code} lineNumbers={block.lineNumbers} />;
    case 'callout':
      return <Callout title={block.title} text={block.text} tone={block.tone} />;
    case 'definition':
      return <DefinitionBlock term={block.term} text={block.text} />;
    case 'example':
      return <ExampleBlock title={block.title} text={block.text} />;
    case 'figure':
      return <FigureBlock title={block.title} caption={block.caption} />;
    case 'table':
      return <TableBlock caption={block.caption} headers={block.headers} rows={block.rows} />;
    case 'exercise':
      return <ExerciseBlock title={block.title} prompt={block.prompt} />;
    case 'language-tabs':
      return <LanguageTabs python={block.python} matlab={block.matlab} />;
  }
}
