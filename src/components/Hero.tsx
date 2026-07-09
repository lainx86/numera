import { FeatureStrip } from './FeatureStrip';
import { VisualizationPreview } from './VisualizationPreview';

export function Hero() {
  return (
    <main className="grid items-start gap-11 pt-[62px] lg:grid-cols-[615px_minmax(0,1fr)] lg:gap-10 lg:pt-[48px]">
      <section className="max-w-[610px] lg:pt-[21px]">
        <div className="relative inline-block font-script text-[19px] font-semibold italic leading-none text-[#6d80ad]">
          See the math. Code it. Understand it.
          <svg
            className="absolute -bottom-4 left-0 h-3 w-28 text-[#7185b4]"
            viewBox="0 0 114 12"
            fill="none"
            aria-hidden="true"
          >
            <path d="M1 8.2c23.5-5.4 51.6-6 82.8-2.4 10.7 1.2 20.4 1.7 29.2.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </div>

        <h1 className="mt-9 max-w-[615px] font-display text-[clamp(3.35rem,14vw,5.55rem)] leading-[0.96] tracking-0 text-navy">
          Learn numerical
          <br />
          <span className="lg:whitespace-nowrap">
            methods <span className="italic text-cobalt">visually.</span>
          </span>
        </h1>

        <p className="mt-7 max-w-[535px] text-[19px] leading-[1.55] text-[#495a82]">
          Interactive lessons that connect theory, visualization, and implementation. Explore algorithms step by step
          in Python or MATLAB and build confidence through clear, beautiful examples.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <button
            className="inline-flex h-[46px] w-full items-center justify-center rounded-md bg-cobalt px-6 text-[16px] font-semibold text-white shadow-button transition hover:bg-cobaltDark sm:w-auto sm:min-w-[230px]"
            type="button"
          >
            Start Learning Free
            <span className="ml-5 text-xl leading-none" aria-hidden="true">
              &rarr;
            </span>
          </button>
          <a
            href="#modules"
            className="inline-flex h-[39px] w-full items-center border-b border-cobalt/55 text-[16px] font-semibold text-cobalt transition hover:text-cobaltDark sm:w-auto"
          >
            Browse Methods
            <span className="ml-7 text-xl leading-none" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>

        <FeatureStrip />
      </section>

      <VisualizationPreview />
    </main>
  );
}
