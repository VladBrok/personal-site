// fixme: dup with Arrow.jsx
export default function GalleryButton({
  label,
  className,
  children,
  ...buttonProps
}) {
  return (
    <button className={`gallery-button ${className}`} {...buttonProps}>
      {children}
      <span className="sr-only">{label}</span>
    </button>
  );
}
