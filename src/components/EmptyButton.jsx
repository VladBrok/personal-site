export default function EmptyButton({ label, children, ...buttonProps }) {
  return (
    <button type="button" {...buttonProps}>
      {children}
      <span className="sr-only">{label}</span>
    </button>
  );
}
