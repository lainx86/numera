type IllustrationProps = {
  className?: string;
};

const modules = [
  {
    title: 'Module Placeholder 01',
    description: 'A clean slot for a future method, example set, or guided notebook.',
    illustration: IntervalLine,
  },
  {
    title: 'Module Placeholder 02',
    description: 'Designed for visual steps, concise notes, and implementation links.',
    illustration: CurveTangent,
  },
  {
    title: 'Module Placeholder 03',
    description: 'Prepared for structured formulas, tables, and matrix workflows.',
    illustration: MatrixBlock,
  },
  {
    title: 'Module Placeholder 04',
    description: 'A reusable card pattern for sequences, steps, and plotted output.',
    illustration: StepPlot,
  },
  {
    title: 'Module Placeholder 05',
    description: 'Ready for discrete data, smooth curves, and comparison views.',
    illustration: InterpolationDots,
  },
];

function IntervalLine({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 230 86" className={className} fill="none" aria-hidden="true">
      <path d="M35 50h160" stroke="#334267" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M42 48c19-34 124-36 147 0" stroke="#88a4e8" strokeWidth="1.35" strokeDasharray="5 5" strokeLinecap="round" />
      <circle cx="35" cy="50" r="5" fill="white" stroke="#284fc9" strokeWidth="2" />
      <circle cx="115" cy="50" r="5" fill="#284fc9" />
      <circle cx="195" cy="50" r="5" fill="#e85252" />
      <g className="font-mono text-[12px] fill-[#334267]">
        <text x="30" y="76" fontStyle="italic">a</text>
        <text x="110" y="76" fontStyle="italic">m</text>
        <text x="190" y="76" fontStyle="italic">b</text>
      </g>
    </svg>
  );
}

function CurveTangent({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 230 86" className={className} fill="none" aria-hidden="true">
      <path d="M34 62 C66 26 96 31 123 48 C150 65 166 46 192 17" stroke="#284fc9" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M122 49 199 10" stroke="#ff6c63" strokeWidth="1.5" strokeDasharray="6 6" strokeLinecap="round" />
      <path d="M126 49H205M171 20v48" stroke="#b6c1d3" strokeWidth="1" strokeDasharray="3 4" />
      <circle cx="92" cy="36" r="4.5" fill="#143a9d" />
      <circle cx="136" cy="51" r="4.5" fill="white" stroke="#ff6c63" strokeWidth="1.8" />
      <circle cx="181" cy="24" r="4.5" fill="white" stroke="#ff6c63" strokeWidth="1.8" />
      <circle cx="166" cy="61" r="2.6" fill="#ff8b70" />
    </svg>
  );
}

function MatrixBlock({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 230 86" className={className} fill="none" aria-hidden="true">
      <path d="M38 17h5v52h-5M112 17h-5v52h5M151 17h5v52h-5M204 17h-5v52h5" stroke="#334267" strokeWidth="1.4" strokeLinecap="round" />
      <g className="font-mono text-[13px] fill-[#334267]">
        <text x="54" y="32">2</text>
        <text x="82" y="32">1</text>
        <text x="54" y="51">-3</text>
        <text x="84" y="51">1</text>
        <text x="54" y="70">-2</text>
        <text x="84" y="70">1</text>
        <text x="128" y="32">8</text>
        <text x="128" y="51">-11</text>
        <text x="128" y="70">-3</text>
      </g>
      <path d="M118 43h22M134 37l6 6-6 6" stroke="#334267" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="179" cy="37" r="2.7" fill="#284fc9" />
      <circle cx="190" cy="57" r="2.7" fill="#284fc9" opacity="0.72" />
      <circle cx="169" cy="57" r="2.2" fill="#284fc9" opacity="0.4" />
    </svg>
  );
}

function StepPlot({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 230 86" className={className} fill="none" aria-hidden="true">
      <path d="M36 70h165" stroke="#334267" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M36 70V16" stroke="#334267" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M36 64h28v-12h27v-10h27V31h27V24h33" stroke="#284fc9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M48 63 C75 56 82 45 101 43 C125 40 132 28 156 28 C172 28 183 25 192 24" stroke="#ff6c63" strokeWidth="1.25" strokeDasharray="6 5" />
      {[64, 91, 118, 145, 178].map((x, index) => (
        <circle key={x} cx={x} cy={[52, 42, 31, 28, 24][index]} r="4" fill="white" stroke="#284fc9" strokeWidth="1.7" />
      ))}
      <path d="m201 70-6-4M201 70l-6 4M36 16l-4 6M36 16l4 6" stroke="#334267" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function InterpolationDots({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 230 86" className={className} fill="none" aria-hidden="true">
      <path d="M38 43 C62 73 82 64 104 45 C126 27 144 52 167 32 C182 19 196 26 207 33" stroke="#88a4e8" strokeWidth="1.45" strokeDasharray="5 5" strokeLinecap="round" />
      <path d="M39 43 C64 58 84 62 105 48 C126 34 144 43 166 34 C184 27 194 28 207 34" stroke="#284fc9" strokeWidth="1.45" opacity="0.72" />
      {[
        [39, 43],
        [78, 63],
        [114, 38],
        [150, 41],
        [177, 27],
        [207, 34],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" fill="#143a9d" />
      ))}
    </svg>
  );
}

export function ModuleCards() {
  return (
    <section id="modules" className="pt-[42px]">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {modules.map(({ title, description, illustration: Illustration }) => (
          <article
            key={title}
            className="min-h-[225px] rounded-[8px] border border-line bg-white/72 px-[21px] pb-[18px] pt-[17px] shadow-card backdrop-blur-sm"
          >
            <h3 className="text-[16px] font-semibold leading-6 text-[#173064]">{title}</h3>
            <Illustration className="mt-2 h-[86px] w-full" />
            <p className="mt-3 min-h-[45px] text-[13.5px] leading-[1.35] text-[#46577e]">{description}</p>
            <a href="#" className="mt-4 inline-flex items-center text-[14px] font-semibold text-cobalt hover:text-cobaltDark">
              Explore
              <span className="ml-2 text-lg leading-none" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
