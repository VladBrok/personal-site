export default function Label({ htmlFor, required, children }) {
  return (
    <label htmlFor={htmlFor}>
      {children}
      {required && (
        <abbr
          className="pl-1 text-red no-underline"
          title="required"
          aria-label="required"
        >
          *
        </abbr>
      )}
    </label>
  );
}
