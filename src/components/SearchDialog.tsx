import { FormEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { searchLocalIndex } from '../data/search-index';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { CloseIcon, SearchIcon } from './Icons';

type SearchDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const results = searchLocalIndex(query).slice(0, 6);

  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) {
      return;
    }

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 0);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = query.trim();
    onClose();
    navigate(normalized ? `/search?q=${encodeURIComponent(normalized)}` : '/search');
  }

  function closeFromBackdrop(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-navy/30 px-4 py-8 backdrop-blur-sm"
      role="presentation"
      onMouseDown={closeFromBackdrop}
    >
      <div
        className="mx-auto max-w-2xl rounded-[10px] border border-line bg-paper p-5 shadow-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-dialog-title"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="search-dialog-title" className="text-[20px] font-semibold text-navy">
              Search Numera
            </h2>
            <p className="mt-1 text-[14px] text-muted">Find placeholder pages and planned modules.</p>
          </div>
          <button
            className="grid h-9 w-9 place-items-center rounded-md border border-line bg-white/75 text-ink transition hover:text-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
            type="button"
            aria-label="Close search"
            onClick={onClose}
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <form className="mt-5" onSubmit={submitSearch}>
          <label className="relative block">
            <span className="sr-only">Search keyword</span>
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
            <input
              ref={inputRef}
              className="h-12 w-full rounded-md border border-line bg-white/85 pl-12 pr-4 text-[16px] text-ink outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/15"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search lessons, methods, docs..."
            />
          </label>
        </form>

        <div className="mt-5 grid gap-2">
          {results.map((result) => (
            <Link
              key={`${result.type}-${result.path}`}
              to={result.path}
              className="rounded-md border border-softLine bg-white/65 px-4 py-3 transition hover:border-cobalt/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
              onClick={onClose}
            >
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-cobalt">
                {result.type}
              </span>
              <span className="mt-1 block text-[15px] font-semibold text-navy">{result.title}</span>
              <span className="mt-1 block text-[13px] leading-5 text-muted">{result.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
