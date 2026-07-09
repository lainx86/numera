import { MouseEvent, RefObject, useEffect, useRef } from 'react';
import type { Course, Lesson } from '../../data/lesson-reader';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { CloseIcon } from '../Icons';
import { LessonSidebar } from './LessonSidebar';

type MobileContentsDrawerProps = {
  open: boolean;
  course: Course;
  lesson: Lesson;
  activeSectionId: string;
  triggerRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  onSectionClick: (sectionId: string) => void;
};

export function MobileContentsDrawer({
  open,
  course,
  lesson,
  activeSectionId,
  triggerRef,
  onClose,
  onSectionClick,
}: MobileContentsDrawerProps) {
  const wasOpenRef = useRef(false);
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      wasOpenRef.current = true;
      return;
    }

    if (wasOpenRef.current) {
      triggerRef.current?.focus();
      wasOpenRef.current = false;
    }
  }, [open, triggerRef]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-navy/30 p-4 backdrop-blur-sm lg:hidden"
      role="presentation"
      onMouseDown={(event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="h-full max-w-sm overflow-y-auto rounded-[10px] border border-line bg-paper p-4 shadow-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Lesson contents"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="font-display text-[32px] leading-none text-navy">Contents</p>
          <button
            className="grid h-9 w-9 place-items-center rounded-md border border-line bg-white/75 text-ink transition hover:text-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
            type="button"
            aria-label="Close contents"
            onClick={onClose}
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <LessonSidebar
          course={course}
          lesson={lesson}
          activeSectionId={activeSectionId}
          onSectionClick={onSectionClick}
          onNavigate={onClose}
        />
      </div>
    </div>
  );
}
