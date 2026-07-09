import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

export function LogoMark(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <rect x="1.5" y="1.5" width="45" height="45" rx="10" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 35.5h30" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.62" />
      <path d="M12 34V14" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.62" />
      <path
        d="M12 31.5c4.4-.2 5.5-14 9.3-13.5 3.3.5 3.5 12.2 7.2 12.3 3.5.1 4.8-12.7 8.7-13.9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="21.2" cy="18.1" r="1.6" fill="currentColor" />
      <circle cx="28.5" cy="30.2" r="1.6" fill="currentColor" />
      <circle cx="37.2" cy="16.4" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="10.7" cy="10.7" r="6.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="m15.6 15.6 5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2.6v2.2M12 19.2v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.6 12h2.2M19.2 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20.1 14.2A7.7 7.7 0 0 1 9.8 3.9 8.1 8.1 0 1 0 20.1 14.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ExpandIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M8.2 4.8H4.8v3.4M15.8 4.8h3.4v3.4M8.2 19.2H4.8v-3.4M15.8 19.2h3.4v-3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9.2 9.2 5.3 5.3M14.8 9.2l3.9-3.9M9.2 14.8l-3.9 3.9M14.8 14.8l3.9 3.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="m7.8 12.2 2.5 2.5 5.9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m13 5-2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M8 5.5v13l10-6.5-10-6.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 4.5h9.2a2.8 2.8 0 0 1 2.8 2.8v12.2H8.8A2.8 2.8 0 0 0 6 22.3V4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 4.5h-.7A2.3 2.3 0 0 0 3 6.8v11.7A3.5 3.5 0 0 0 6.5 22H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 8.5h5.5M9 12h4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 4v10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="m8.2 10.9 3.8 3.8 3.8-3.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 19.5h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
