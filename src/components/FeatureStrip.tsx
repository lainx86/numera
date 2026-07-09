import { Link } from 'react-router-dom';
import { BookIcon, CodeIcon, DownloadIcon, PlayIcon } from './Icons';

const features = [
  {
    title: 'Python & MATLAB',
    description: 'Side-by-side examples',
    icon: CodeIcon,
    path: '/examples',
  },
  {
    title: 'Interactive visualizations',
    description: 'Learn by doing',
    icon: PlayIcon,
    path: '/lessons',
  },
  {
    title: 'Worked examples',
    description: 'From theory to code',
    icon: BookIcon,
    path: '/examples',
  },
  {
    title: 'Cheat sheets',
    description: 'Quick reference guides',
    icon: DownloadIcon,
    path: '/docs',
  },
];

export function FeatureStrip() {
  return (
    <div className="mt-9 grid grid-cols-1 gap-4 text-ink sm:grid-cols-2 xl:grid-cols-4 xl:gap-7">
      {features.map(({ title, description, icon: Icon, path }) => (
        <Link
          key={title}
          className="flex items-start gap-2.5 rounded-md transition hover:text-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
          to={path}
        >
          <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#63759f]" />
          <span className="min-w-0">
            <span className="block whitespace-nowrap text-[10.5px] font-bold leading-4 text-ink">{title}</span>
            <span className="block whitespace-nowrap text-[10.5px] leading-4 text-muted">{description}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
