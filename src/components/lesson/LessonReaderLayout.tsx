import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Breadcrumb } from '../Breadcrumb';
import { LessonBlockRenderer } from './ContentBlocks';
import { LessonHeader } from './LessonHeader';
import { LessonNavigation } from './LessonNavigation';
import { LessonSidebar } from './LessonSidebar';
import { MobileContentsDrawer } from './MobileContentsDrawer';
import { ReadingProgress } from './ReadingProgress';
import type { Course, Lesson } from '../../data/lesson-reader';
import { flattenSections } from '../../data/lesson-reader';

type LessonReaderLayoutProps = {
  course: Course;
  lesson: Lesson;
};

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function LessonReaderLayout({ course, lesson }: LessonReaderLayoutProps) {
  const sectionIds = useMemo(() => flattenSections(lesson.sections).map((section) => section.id), [lesson.sections]);
  const [activeSectionId, setActiveSectionId] = useState(() => window.location.hash.replace('#', '') || sectionIds[0]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const contentsButtonRef = useRef<HTMLButtonElement | null>(null);
  const programmaticScrollRef = useRef(false);

  const scrollToSection = useCallback((sectionId: string, pushHash = true) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    programmaticScrollRef.current = true;
    element.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    setActiveSectionId(sectionId);

    const nextHash = `#${sectionId}`;
    if (pushHash) {
      window.history.pushState(null, '', nextHash);
    } else {
      window.history.replaceState(null, '', nextHash);
    }

    window.setTimeout(() => {
      programmaticScrollRef.current = false;
    }, 500);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && sectionIds.includes(hash)) {
      window.setTimeout(() => scrollToSection(hash, false), 0);
    } else {
      setActiveSectionId(sectionIds[0]);
    }
  }, [lesson.id, scrollToSection, sectionIds]);

  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionIds.includes(hash)) {
        scrollToSection(hash, false);
      }
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [scrollToSection, sectionIds]);

  useEffect(() => {
    const headings = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (programmaticScrollRef.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (!visible?.target.id) return;

        setActiveSectionId(visible.target.id);
        if (window.location.hash !== `#${visible.target.id}`) {
          window.history.replaceState(null, '', `#${visible.target.id}`);
        }
      },
      {
        rootMargin: '-18% 0px -68% 0px',
        threshold: [0, 1],
      },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [lesson.id, sectionIds]);

  const groupLabel = course.type === 'fundamentals' ? 'Fundamentals' : 'Numerical Methods';

  return (
    <>
      <ReadingProgress />
      <div className="grid gap-8 pt-2 lg:grid-cols-[300px_minmax(0,1fr)]">
        <div className="hidden lg:block">
          <div className="sticky top-6">
            <LessonSidebar
              course={course}
              lesson={lesson}
              activeSectionId={activeSectionId}
              onSectionClick={(sectionId) => scrollToSection(sectionId)}
            />
          </div>
        </div>

        <main className="min-w-0">
          <button
            ref={contentsButtonRef}
            className="mt-8 inline-flex h-10 items-center rounded-md border border-line bg-white/75 px-4 text-[14px] font-semibold text-cobalt shadow-card transition hover:border-cobalt/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt lg:hidden"
            type="button"
            onClick={() => setDrawerOpen(true)}
          >
            Contents
          </button>

          <Breadcrumb items={[{ label: 'Lessons', to: '/lessons' }, { label: groupLabel }, { label: course.title }, { label: lesson.title }]} />
          <LessonHeader course={course} lesson={lesson} />

          <article className="mt-10 grid gap-5">
            {lesson.blocks.map((block, index) => (
              <LessonBlockRenderer key={`${block.type}-${'id' in block ? block.id : index}`} block={block} />
            ))}
          </article>

          <LessonNavigation course={course} lesson={lesson} />
        </main>
      </div>

      <MobileContentsDrawer
        open={drawerOpen}
        course={course}
        lesson={lesson}
        activeSectionId={activeSectionId}
        triggerRef={contentsButtonRef}
        onClose={() => setDrawerOpen(false)}
        onSectionClick={(sectionId) => scrollToSection(sectionId)}
      />
    </>
  );
}
