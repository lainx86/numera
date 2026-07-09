type SectionHeadingProps = {
  id?: string;
  title: string;
  description: string;
};

export function SectionHeading({ id, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <h2 id={id} className="font-display text-[clamp(2.4rem,4vw,3.7rem)] leading-none text-navy">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-[16px] leading-7 text-muted">{description}</p>
    </div>
  );
}
