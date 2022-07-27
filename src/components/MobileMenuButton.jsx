export default function MobileMenuButton({ isOpen, ...props }) {
  const label = isOpen ? "Close" : "Open";
  const correctiveBarStyle = isOpen ? "-translate-x-4 opacity-0" : "";
  const correctiveEdgeBarStyle = isOpen
    ? "before:rotate-45 before:translate-y-[13px] after:-rotate-45 after:-translate-y-[13px]"
    : "";

  return (
    <button
      className={`${correctiveEdgeBarStyle} before:bar after:bar relative z-50 flex h-8 w-fit flex-col justify-between outline-offset-4 sm:hidden`}
      aria-label={`${label} menu`}
      {...props}
    >
      <div className={`bar fixed mt-[0.85rem] ${correctiveBarStyle}`}></div>
    </button>
  );
}
