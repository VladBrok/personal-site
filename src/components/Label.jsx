export default function Label({ htmlFor, required, children }) {
  return (
    <label htmlFor={htmlFor}>
      {children}
      {required && (
        <abbr
          className="text-danger pl-1 no-underline"
          title="required"
          aria-label="required"
        >
          *
        </abbr>
      )}
    </label>
  );
}
