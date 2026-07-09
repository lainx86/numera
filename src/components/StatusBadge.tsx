type StatusBadgeProps = {
  children?: string;
};

export function StatusBadge({ children = 'Curriculum in planning' }: StatusBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#bfe2cf] bg-success/80 px-3 py-1 text-[12px] font-semibold text-successText">
      {children}
    </span>
  );
}
