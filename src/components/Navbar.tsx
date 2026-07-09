import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigationItems } from '../data/navigation';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { CloseIcon, LogoMark, MenuIcon, SearchIcon } from './Icons';
import { SearchDialog } from './SearchDialog';
import { ThemeToggle } from './ThemeToggle';

function isActivePath(pathname: string, match: string) {
  if (match === '/') {
    return pathname === '/';
  }

  return pathname === match || pathname.startsWith(`${match}/`);
}

export function Navbar() {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useBodyScrollLock(mobileOpen);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <header className="flex items-start justify-between gap-8 pt-[34px]">
      <Link
        to="/"
        className="flex shrink-0 items-start gap-3 text-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
        aria-label="Numera home"
      >
        <LogoMark className="h-[54px] w-[54px]" />
        <span className="block">
          <span className="block font-display text-[47px] leading-[0.82] tracking-0 text-navy">Numera</span>
          <span className="mt-1 block whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.26em] text-[#9aa8c2]">
            Learn Numerical Methods
          </span>
        </span>
      </Link>

      <nav className="hidden flex-1 justify-center pt-[18px] lg:flex" aria-label="Primary navigation">
        <ul className="flex items-center gap-[68px] text-[17px] font-medium text-ink">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink
                className={({ isActive }) =>
                  `transition hover:text-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt ${
                    isActive || isActivePath(location.pathname, item.match ?? item.path)
                      ? 'text-cobalt'
                      : 'text-ink'
                  }`
                }
                to={item.path}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex shrink-0 items-center gap-3 pt-[7px]">
        <button
          className="hidden h-11 w-11 place-items-center rounded-lg text-ink transition hover:bg-white/70 hover:text-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt md:grid"
          type="button"
          aria-label="Search"
          onClick={() => setSearchOpen(true)}
        >
          <SearchIcon className="h-7 w-7" />
        </button>
        <ThemeToggle />
        <Link
          className="hidden h-[44px] items-center rounded-md bg-cobalt px-[25px] text-[16px] font-semibold text-white shadow-button transition hover:bg-cobaltDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt sm:inline-flex"
          to="/get-started"
        >
          Get Started
        </Link>
        <button
          className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-white/70 text-ink transition hover:text-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt lg:hidden"
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy/25 px-4 py-5 backdrop-blur-sm lg:hidden"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setMobileOpen(false);
            }
          }}
        >
          <nav
            className="ml-auto flex max-h-[calc(100vh-40px)] w-full max-w-sm flex-col overflow-auto rounded-[10px] border border-line bg-paper p-5 shadow-panel"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-display text-[34px] leading-none text-navy">Numera</span>
              <button
                className="grid h-9 w-9 place-items-center rounded-md border border-line bg-white/75 text-ink transition hover:text-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 grid gap-2">
              {navigationItems.map((item) => {
                const active = isActivePath(location.pathname, item.match ?? item.path);
                return (
                  <Link
                    key={item.path}
                    className={`rounded-md border px-4 py-3 text-[16px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt ${
                      active
                        ? 'border-cobalt/30 bg-white text-cobalt'
                        : 'border-softLine bg-white/60 text-ink hover:border-cobalt/30 hover:text-cobalt'
                    }`}
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-line bg-white/70 text-[14px] font-semibold text-ink transition hover:text-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setSearchOpen(true);
                }}
              >
                <SearchIcon className="h-5 w-5" />
                Search
              </button>
              <ThemeToggle className="inline-flex h-11 items-center justify-center rounded-md border border-line bg-white/70 text-ink transition hover:text-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt" />
            </div>

            <Link
              className="mt-3 inline-flex h-11 items-center justify-center rounded-md bg-cobalt px-5 text-[15px] font-semibold text-white shadow-button transition hover:bg-cobaltDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
              to="/get-started"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
