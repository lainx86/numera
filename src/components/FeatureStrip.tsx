import { BookIcon, CodeIcon, DownloadIcon, PlayIcon } from './Icons';

const features = [
  {
    title: 'Python & MATLAB',
    description: 'Side-by-side examples',
    icon: CodeIcon,
  },
  {
    title: 'Interactive visualizations',
    description: 'Learn by doing',
    icon: PlayIcon,
  },
  {
    title: 'Worked examples',
    description: 'From theory to code',
    icon: BookIcon,
  },
  {
    title: 'Cheat sheets',
    description: 'Quick reference guides',
    icon: DownloadIcon,
  },
];

export function FeatureStrip() {
  return (
    <div className="mt-9 grid grid-cols-1 gap-4 text-ink sm:grid-cols-2 xl:grid-cols-4 xl:gap-7">
      {features.map(({ title, description, icon: Icon }) => (
        <div key={title} className="flex items-start gap-2.5">
          <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#63759f]" />
          <span className="min-w-0">
            <span className="block whitespace-nowrap text-[10.5px] font-bold leading-4 text-ink">{title}</span>
            <span className="block whitespace-nowrap text-[10.5px] leading-4 text-muted">{description}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
