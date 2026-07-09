type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-[8px] border border-dashed border-line bg-white/65 px-6 py-10 text-center shadow-card">
      <h2 className="text-[20px] font-semibold text-navy">{title}</h2>
      <p className="mx-auto mt-2 max-w-xl text-[15px] leading-6 text-muted">{description}</p>
    </div>
  );
}
