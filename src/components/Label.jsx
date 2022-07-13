export default function Label({ htmlFor, required, children }) {
  return (
    <label htmlFor={htmlFor}>
      {children}
      {required && (
        <abbr
          className="text-red no-underline pl-1"
          title="required"
          aria-label="required"
        >
          *
        </abbr>
      )}
    </label>
  );
}
