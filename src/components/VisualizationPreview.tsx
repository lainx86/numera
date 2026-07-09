import { CheckIcon, ExpandIcon } from './Icons';

const rows = [
  ['0', '2.500000', '1.000000'],
  ['1', '1.347826', '0.278114'],
  ['2', '1.070458', '0.064392'],
  ['3', '1.001550', '0.004654'],
  ['4', '1.000000', '0.000000'],
];

function PlotGraphic() {
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
      <path d="M294 309V206" stroke="#8fa1bf" strokeWidth="1" strokeDasharray="3 4" />
      <path d="M348 309V159" stroke="#8fa1bf" strokeWidth="1" strokeDasharray="3 4" />
      <path d="M409 309V70" stroke="#8fa1bf" strokeWidth="1" strokeDasharray="3 4" />

      <path
        d="M66 286 C96 210 127 141 169 137 C217 132 238 221 282 218 C327 214 339 143 371 91 C392 56 415 50 433 36"
        stroke="#284fc9"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M249 276 433 34" stroke="#ff6c63" strokeWidth="1.5" strokeDasharray="7 8" strokeLinecap="round" />
      <path d="M295 207 409 70" stroke="#ff6c63" strokeWidth="1.5" strokeLinecap="round" opacity="0.72" />

      <circle cx="294" cy="218" r="5.2" fill="white" stroke="#26a36d" strokeWidth="2" />
      <circle cx="348" cy="159" r="5.2" fill="white" stroke="#ff6c63" strokeWidth="2" />
      <circle cx="409" cy="70" r="5.2" fill="white" stroke="#ff6c63" strokeWidth="2" />
      <circle cx="371" cy="91" r="3.5" fill="#284fc9" />
      <circle cx="321" cy="190" r="3.5" fill="#284fc9" />

      <g className="font-mono text-[14px] fill-[#1d2d58]">
        <text x="24" y="52" fontStyle="italic">f(x)</text>
        <text x="456" y="330" fontStyle="italic">x</text>
        <text x="394" y="69" fontStyle="italic">x0</text>
        <text x="316" y="145" fontStyle="italic">x1</text>
        <text x="237" y="290" fontStyle="italic">x2</text>
        <text x="306" y="242" fill="#249467" fontStyle="italic">root</text>
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

export function VisualizationPreview() {
  return (
    <aside className="glass-panel w-full rounded-[10px] border border-line shadow-panel">
      <div className="flex flex-col gap-5 border-b border-softLine px-6 pb-[10px] pt-[20px] sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-[19px] font-semibold tracking-[0.01em] text-navy">Interactive Method Preview</h2>
          <p className="mt-1 text-[13px] leading-5 text-[#50607f]">
            A visual workspace for formulas, plots, and iterations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="grid h-[38px] grid-cols-3 overflow-hidden rounded-md border border-line bg-white/76 text-[15px] text-ink">
            {['Plot', 'Iterations', 'Code'].map((tab, index) => (
              <button
                key={tab}
                className={`min-w-[72px] border-line px-3 font-medium sm:min-w-[82px] sm:px-4 ${index !== 2 ? 'border-r' : ''} ${
                  index === 0 ? 'bg-white text-cobalt shadow-[inset_0_0_0_1px_rgba(40,79,201,0.05)]' : ''
                }`}
                type="button"
              >
                {index === 0 && <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-cobalt" />}
                {tab}
              </button>
            ))}
          </div>
          <button
            className="grid h-[38px] w-[38px] place-items-center rounded-md border border-line bg-white/76 text-ink transition hover:text-cobalt"
            type="button"
            aria-label="Expand preview"
          >
            <ExpandIcon className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>

      <div className="grid gap-4 px-6 pb-1 pt-1 lg:grid-cols-[minmax(0,1fr)_282px]">
        <div className="min-w-0">
          <div className="h-[346px] rounded-md border border-line bg-white/72 p-3">
            <PlotGraphic />
          </div>

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
          <div className="overflow-hidden rounded-md border border-line bg-white/76">
            <table className="w-full border-collapse text-center font-mono text-[13px] text-[#3c4a70]">
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
                {rows.map(([k, x, error], index) => (
                  <tr key={k} className={`h-[38px] ${index === rows.length - 1 ? 'bg-success/80 text-[#214c3c]' : ''}`}>
                    <td className="border-r border-t border-line">{k}</td>
                    <td className="border-r border-t border-line">{x}</td>
                    <td className="border-t border-line">{error}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
            <div className="mt-2 grid gap-2 font-mono text-[12.5px] text-muted">
              <label className="grid grid-cols-[1fr_96px] items-center gap-3">
                Initial value
                <span className="rounded border border-line bg-white px-3 py-1.5 text-ink">2.5</span>
              </label>
              <label className="grid grid-cols-[1fr_96px] items-center gap-3">
                Tolerance
                <span className="rounded border border-line bg-white px-3 py-1.5 text-ink">1e-6</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
