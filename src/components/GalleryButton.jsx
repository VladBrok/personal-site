import EmptyButton from "./EmptyButton";

export default function GalleryButton({
  label,
  className,
  children,
  ...buttonProps
}) {
  return (
    <EmptyButton
      className={`gallery-button ${className}`}
      label={label}
      {...buttonProps}
    >
      {children}
    </EmptyButton>
  );
}
