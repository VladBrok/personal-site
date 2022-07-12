export default function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor}>
      {children}
      <abbr className="text-red no-underline pl-1" title="required">
        *
      </abbr>
    </label>
  );
}
