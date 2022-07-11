export default function MobileMenuButton({ isOpen, ...props }) {
  const label = isOpen ? "Close" : "Open";
  const correctiveBarStyle = isOpen ? "-translate-x-4 opacity-0" : "";
  const correctiveEdgeBarStyle = isOpen
    ? "before:rotate-45 before:translate-y-[13px] after:-rotate-45 after:-translate-y-[13px]"
    : "";

  return (
    <button
      className={`z-50 fixed right-2 top-2 w-10 h-8 flex flex-col justify-between before:bar ${correctiveEdgeBarStyle} after:bar sm:hidden`}
      aria-label={`${label} menu`}
      {...props}
    >
      <div className={`bar ${correctiveBarStyle}`}></div>
    </button>
  );
}
