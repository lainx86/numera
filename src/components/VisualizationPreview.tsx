import { MouseEvent, useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { CheckIcon, CloseIcon, ExpandIcon } from './Icons';

type PreviewTab = 'plot' | 'iterations' | 'code';
type CodeLanguage = 'Python' | 'MATLAB';

type IterationRow = {
  k: number;
  x: string;
  error: string;
  cx: number;
  cy: number;
  label: string;
};

const iterationRows: IterationRow[] = [
  { k: 0, x: '2.500000', error: '1.000000', cx: 409, cy: 70, label: 'x0' },
  { k: 1, x: '1.347826', error: '0.278114', cx: 348, cy: 159, label: 'x1' },
  { k: 2, x: '1.070458', error: '0.064392', cx: 321, cy: 190, label: 'x2' },
  { k: 3, x: '1.001550', error: '0.004654', cx: 302, cy: 210, label: 'x3' },
  { k: 4, x: '1.000000', error: '0.000000', cx: 294, cy: 218, label: 'root' },
];

const tabs: { id: PreviewTab; label: string }[] = [
  { id: 'plot', label: 'Plot' },
  { id: 'iterations', label: 'Iterations' },
  { id: 'code', label: 'Code' },
];

const codeSnippets: Record<CodeLanguage, string> = {
  Python: `# Template preview only
state = {"x": 2.5, "error": 1.0}

def next_step(current):
    return current`,
  MATLAB: `% Template preview only
state.x = 2.5;
state.error = 1.0;

function nextState = next_step(current)
    nextState = current;
end`,
};

type PlotGraphicProps = {
  activeStep: number;
};

function PlotGraphic({ activeStep }: PlotGraphicProps) {
  const visibleRows = iterationRows.slice(0, activeStep + 1);

  return (
    <svg viewBox="0 0 492 360" className="h-full w-full" fill="none" aria-label="Placeholder iteration plot">
      <path d="M66 309h390" stroke="#3d496b" strokeWidth="1.45" strokeLinecap="round" />
      <path d="M66 309V46" stroke="#3d496b" strokeWidth="1.45" strokeLinecap="round" />
      <path d="m456 309-8-5M456 309l-8 5M66 46l-5 8M66 46l5 8" stroke="#3d496b" strokeWidth="1.45" strokeLinecap="round" />

      {[103, 169, 235, 301, 367, 433].map((x) => (
        <path key={`x-${x}`} d={`M${x} 309v5`} stroke="#9aa8c2" strokeWidth="1" strokeLinecap="round" />
      ))}
      {[82, 139, 196, 253].map((y) => (
        <path key={`y-${y}`} d={`M61 ${y}h5`} stroke="#9aa8c2" strokeWidth="1" strokeLinecap="round" />
      ))}

      <path d="M66 253H456" stroke="#b9c5d8" strokeWidth="1" strokeDasharray="4 5" opacity="0.32" />
      <path d="M66 196H456" stroke="#b9c5d8" strokeWidth="1" strokeDasharray="4 5" opacity="0.28" />
      {visibleRows.map((row) => (
        <path key={`guide-${row.k}`} d={`M${row.cx} 309V${row.cy}`} stroke="#8fa1bf" strokeWidth="1" strokeDasharray="3 4" />
      ))}

      <path
        d="M66 286 C96 210 127 141 169 137 C217 132 238 221 282 218 C327 214 339 143 371 91 C392 56 415 50 433 36"
        stroke="#284fc9"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M249 276 433 34" stroke="#ff6c63" strokeWidth="1.5" strokeDasharray="7 8" strokeLinecap="round" />
      <path d="M295 207 409 70" stroke="#ff6c63" strokeWidth="1.5" strokeLinecap="round" opacity="0.72" />

      {visibleRows.map((row, index) => {
        const active = index === activeStep;
        const isRoot = row.k === iterationRows.length - 1;
        return (
          <g key={`point-${row.k}`}>
            <circle
              cx={row.cx}
              cy={row.cy}
              r={active ? 6.6 : 5.2}
              fill="white"
              stroke={isRoot ? '#26a36d' : '#ff6c63'}
              strokeWidth={active ? 2.4 : 2}
            />
            <text
              x={row.cx + (row.k === 0 ? -36 : 12)}
              y={row.cy + (row.k === 4 ? 23 : -10)}
              className="font-mono text-[14px]"
              fill={isRoot ? '#249467' : '#1d2d58'}
              fontStyle="italic"
            >
              {row.label}
            </text>
          </g>
        );
      })}

      <g className="font-mono text-[14px] fill-[#1d2d58]">
        <text x="24" y="52" fontStyle="italic">f(x)</text>
        <text x="456" y="330" fontStyle="italic">x</text>
      </g>

      <g className="font-mono text-[13px] fill-[#52617f]">
        <text x="43" y="258">-1</text>
        <text x="51" y="201">0</text>
        <text x="51" y="144">1</text>
        <text x="51" y="87">2</text>
        <text x="99" y="330">-2</text>
        <text x="166" y="330">-1</text>
        <text x="230" y="330">0</text>
        <text x="296" y="330">1</text>
        <text x="362" y="330">2</text>
        <text x="427" y="330">3</text>
      </g>

      <g className="font-ui text-[13px] fill-[#3d496b]">
        <path d="M96 78h30" stroke="#284fc9" strokeWidth="2" strokeLinecap="round" />
        <text x="138" y="83">curve</text>
        <path d="M96 103h30" stroke="#ff6c63" strokeWidth="1.5" strokeDasharray="6 6" strokeLinecap="round" />
        <text x="138" y="108">guide</text>
        <circle cx="111" cy="129" r="4.5" fill="white" stroke="#26a36d" strokeWidth="2" />
        <text x="138" y="134">target</text>
      </g>
    </svg>
  );
}

type IterationTableProps = {
  activeStep: number;
  compact?: boolean;
};

function IterationTable({ activeStep, compact = false }: IterationTableProps) {
  const visibleRows = iterationRows.slice(0, activeStep + 1);

  return (
    <div className="overflow-hidden rounded-md border border-line bg-white/76">
      <table className={`w-full border-collapse text-center font-mono text-[#3c4a70] ${compact ? 'text-[13px]' : 'text-[14px]'}`}>
        <thead>
          <tr className="h-[39px] bg-[#f7f9fc] text-[12.5px] text-navy">
            <th className="border-b border-r border-line font-semibold">k</th>
            <th className="border-b border-r border-line font-semibold">
              x<sub>k</sub>
            </th>
            <th className="border-b border-line font-semibold">error</th>
          </tr>
        </thead>
        <tbody>
          {visibleRows.map((row, index) => (
            <tr
              key={row.k}
              className={`h-[38px] transition-colors ${index === activeStep ? 'bg-success/80 text-[#214c3c]' : ''}`}
            >
              <td className="border-r border-t border-line">{row.k}</td>
              <td className="border-r border-t border-line">{row.x}</td>
              <td className="border-t border-line">{row.error}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type PreviewContentProps = {
  activeTab: PreviewTab;
  activeStep: number;
  language: CodeLanguage;
  setLanguage: (language: CodeLanguage) => void;
};

function PreviewContent({ activeTab, activeStep, language, setLanguage }: PreviewContentProps) {
  if (activeTab === 'iterations') {
    return (
      <div className="h-[346px] rounded-md border border-line bg-white/72 p-4">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-[16px] font-semibold text-navy">Iteration sequence</h3>
            <p className="mt-1 font-mono text-[12px] text-muted">Rows reveal as the preview step advances.</p>
          </div>
          <span className="rounded-full border border-line bg-white/75 px-3 py-1 font-mono text-[12px] text-muted">
            step {activeStep + 1}/{iterationRows.length}
          </span>
        </div>
        <IterationTable activeStep={activeStep} />
      </div>
    );
  }

  if (activeTab === 'code') {
    return (
      <div className="h-[346px] rounded-md border border-line bg-white/72 p-4">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-[16px] font-semibold text-navy">Implementation shell</h3>
            <p className="mt-1 font-mono text-[12px] text-muted">Placeholder code for future interactive methods.</p>
          </div>
          <div className="grid h-9 grid-cols-2 overflow-hidden rounded-md border border-line bg-white/80 text-[13px] font-semibold">
            {(['Python', 'MATLAB'] as const).map((item) => (
              <button
                key={item}
                className={`px-3 transition ${language === item ? 'bg-cobalt text-white' : 'text-ink hover:text-cobalt'}`}
                type="button"
                onClick={() => setLanguage(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <pre className="h-[246px] overflow-auto rounded-md border border-softLine bg-[#f7f9fc] p-4 font-mono text-[13px] leading-6 text-ink">
          <code>{codeSnippets[language]}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="h-[346px] rounded-md border border-line bg-white/72 p-3">
      <PlotGraphic activeStep={activeStep} />
    </div>
  );
}

type PreviewFrameProps = {
  activeTab: PreviewTab;
  setActiveTab: (tab: PreviewTab) => void;
  activeStep: number;
  setActiveStep: (step: number) => void;
  language: CodeLanguage;
  setLanguage: (language: CodeLanguage) => void;
  isRunning: boolean;
  onRun: () => void;
  onReset: () => void;
  onExpand?: () => void;
  onClose?: () => void;
  closeButtonRef?: RefObject<HTMLButtonElement | null>;
  fullscreen?: boolean;
};

function PreviewFrame({
  activeTab,
  setActiveTab,
  activeStep,
  setActiveStep,
  language,
  setLanguage,
  isRunning,
  onRun,
  onReset,
  onExpand,
  onClose,
  closeButtonRef,
  fullscreen = false,
}: PreviewFrameProps) {
  const canMovePrevious = activeStep > 0;
  const canMoveNext = activeStep < iterationRows.length - 1;

  return (
    <aside className={`glass-panel w-full rounded-[10px] border border-line shadow-panel ${fullscreen ? 'max-h-[calc(100vh-40px)] overflow-auto' : ''}`}>
      <div className="flex flex-col gap-5 border-b border-softLine px-6 pb-[10px] pt-[20px] sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-[19px] font-semibold tracking-[0.01em] text-navy">Interactive Method Preview</h2>
          <p className="mt-1 text-[13px] leading-5 text-[#50607f]">
            A visual workspace for formulas, plots, and iterations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid h-[38px] grid-cols-3 overflow-hidden rounded-md border border-line bg-white/76 text-[15px] text-ink" role="tablist" aria-label="Preview view">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`min-w-[72px] border-line px-3 font-medium transition sm:min-w-[82px] sm:px-4 ${index !== 2 ? 'border-r' : ''} ${
                  activeTab === tab.id ? 'bg-white text-cobalt shadow-[inset_0_0_0_1px_rgba(40,79,201,0.05)]' : 'hover:text-cobalt'
                }`}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {activeTab === tab.id && <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-cobalt" />}
                {tab.label}
              </button>
            ))}
          </div>
          {onExpand && (
            <button
              className="grid h-[38px] w-[38px] place-items-center rounded-md border border-line bg-white/76 text-ink transition hover:text-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
              type="button"
              aria-label="Expand preview"
              onClick={onExpand}
            >
              <ExpandIcon className="h-[18px] w-[18px]" />
            </button>
          )}
          {onClose && (
            <button
              ref={closeButtonRef}
              className="grid h-[38px] w-[38px] place-items-center rounded-md border border-line bg-white/76 text-ink transition hover:text-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
              type="button"
              aria-label="Close fullscreen preview"
              onClick={onClose}
            >
              <CloseIcon className="h-[18px] w-[18px]" />
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-4 px-6 pb-1 pt-1 lg:grid-cols-[minmax(0,1fr)_282px]">
        <div className="min-w-0">
          <PreviewContent activeTab={activeTab} activeStep={activeStep} language={language} setLanguage={setLanguage} />

          <div className="mt-4 grid min-h-[76px] grid-cols-1 items-center rounded-md border border-line bg-white/78 px-5 py-3 sm:h-[76px] sm:grid-cols-[1fr_220px]">
            <div className="font-display text-[25px] italic leading-none text-ink">
              x<sub className="text-[14px]">k+1</sub>
              <span className="mx-3 font-ui text-[22px] not-italic">=</span>
              x<sub className="text-[14px]">k</sub>
              <span className="mx-3 font-ui text-[22px] not-italic">+</span>
              step
            </div>
            <p className="border-t border-softLine pt-3 font-mono text-[12px] leading-[1.45] text-muted sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
              Placeholder formula for future iterations.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <IterationTable activeStep={activeStep} compact />

          <div className="rounded-md border border-[#bfe2cf] bg-success/82 px-4 py-3 text-[#27644f]">
            <div className="flex items-center gap-3">
              <CheckIcon className="h-[22px] w-[22px] shrink-0" />
              <div>
                <p className="text-[17px] font-bold leading-5">Ready to explore</p>
                <p className="mt-1 font-mono text-[12.5px] leading-5 text-[#416d5c]">Template preview only</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-softLine bg-white/72 px-4 py-3">
            <p className="text-[13px] font-bold text-ink">Preview controls</p>
            <div className="mt-2 grid grid-cols-2 gap-2 text-[12.5px]">
              <button
                className="rounded border border-line bg-white px-2 py-1.5 font-semibold text-ink transition hover:text-cobalt disabled:cursor-not-allowed disabled:opacity-45"
                type="button"
                onClick={() => setActiveStep(activeStep - 1)}
                disabled={!canMovePrevious || isRunning}
              >
                Previous
              </button>
              <button
                className="rounded border border-line bg-white px-2 py-1.5 font-semibold text-ink transition hover:text-cobalt disabled:cursor-not-allowed disabled:opacity-45"
                type="button"
                onClick={() => setActiveStep(activeStep + 1)}
                disabled={!canMoveNext || isRunning}
              >
                Next
              </button>
              <button
                className="rounded border border-line bg-white px-2 py-1.5 font-semibold text-ink transition hover:text-cobalt"
                type="button"
                onClick={onReset}
              >
                Reset
              </button>
              <button
                className="rounded border border-cobalt/35 bg-cobalt px-2 py-1.5 font-semibold text-white transition hover:bg-cobaltDark"
                type="button"
                onClick={onRun}
              >
                {isRunning ? 'Stop' : 'Run'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function VisualizationPreview() {
  const [activeTab, setActiveTab] = useState<PreviewTab>('plot');
  const [activeStep, setActiveStep] = useState(iterationRows.length - 1);
  const [language, setLanguage] = useState<CodeLanguage>('Python');
  const [isRunning, setIsRunning] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const timerRef = useRef<number | null>(null);
  const modalCloseRef = useRef<HTMLButtonElement | null>(null);

  useBodyScrollLock(fullscreen);

  function clearRunTimer() {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function resetPreview() {
    clearRunTimer();
    setIsRunning(false);
    setActiveStep(0);
  }

  function runPreview() {
    if (isRunning) {
      clearRunTimer();
      setIsRunning(false);
      return;
    }

    clearRunTimer();
    setActiveStep(0);
    setIsRunning(true);
    timerRef.current = window.setInterval(() => {
      setActiveStep((current) => {
        if (current >= iterationRows.length - 1) {
          clearRunTimer();
          setIsRunning(false);
          return current;
        }

        return current + 1;
      });
    }, 700);
  }

  useEffect(() => {
    return clearRunTimer;
  }, []);

  useEffect(() => {
    if (!fullscreen) {
      return;
    }

    const focusTimer = window.setTimeout(() => modalCloseRef.current?.focus(), 0);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setFullscreen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [fullscreen]);

  const frameProps = {
    activeTab,
    setActiveTab,
    activeStep,
    setActiveStep,
    language,
    setLanguage,
    isRunning,
    onRun: runPreview,
    onReset: resetPreview,
  };

  return (
    <>
      <PreviewFrame {...frameProps} onExpand={() => setFullscreen(true)} />

      {fullscreen && (
        <div
          className="fixed inset-0 z-50 bg-navy/35 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event: MouseEvent<HTMLDivElement>) => {
            if (event.target === event.currentTarget) {
              setFullscreen(false);
            }
          }}
        >
          <div
            className="mx-auto max-w-[1180px]"
            role="dialog"
            aria-modal="true"
            aria-label="Fullscreen interactive method preview"
          >
            <PreviewFrame {...frameProps} fullscreen onClose={() => setFullscreen(false)} closeButtonRef={modalCloseRef} />
          </div>
        </div>
      )}
    </>
  );
}
