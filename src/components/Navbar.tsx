import { LogoMark, SearchIcon, SunIcon } from './Icons';

const navItems = ['Lessons', 'Methods', 'Examples', 'Docs', 'About'];

export function Navbar() {
  return (
    <header className="flex items-start justify-between gap-8 pt-[34px]">
      <a href="#" className="flex shrink-0 items-start gap-3 text-cobalt" aria-label="Numera home">
        <LogoMark className="h-[54px] w-[54px]" />
        <span className="block">
          <span className="block font-display text-[47px] leading-[0.82] tracking-0 text-navy">Numera</span>
          <span className="mt-1 block whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.26em] text-[#9aa8c2]">
            Learn Numerical Methods
          </span>
        </span>
      </a>

      <nav className="hidden flex-1 justify-center pt-[18px] lg:flex" aria-label="Primary navigation">
        <ul className="flex items-center gap-[68px] text-[17px] font-medium text-ink">
          {navItems.map((item) => (
            <li key={item}>
              <a className="transition hover:text-cobalt" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex shrink-0 items-center gap-4 pt-[7px]">
        <button
          className="hidden h-11 w-11 place-items-center rounded-lg text-ink transition hover:bg-white/70 hover:text-cobalt md:grid"
          type="button"
          aria-label="Search"
        >
          <SearchIcon className="h-7 w-7" />
        </button>
        <button
          className="hidden h-11 w-11 place-items-center rounded-lg text-ink transition hover:bg-white/70 hover:text-cobalt md:grid"
          type="button"
          aria-label="Toggle theme"
        >
          <SunIcon className="h-7 w-7" />
        </button>
        <button
          className="hidden h-[44px] rounded-md bg-cobalt px-[25px] text-[16px] font-semibold text-white shadow-button transition hover:bg-cobaltDark sm:inline-flex sm:items-center"
          type="button"
        >
          Get Started
        </button>
      </div>
    </header>
  );
}
