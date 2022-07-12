export default function TechnologyIcon({ id, className, isColored = true }) {
  const colored = isColored ? "colored" : "";

  return (
    <i
      className={`devicon-${id}-plain ${colored} ${className}`}
      color="white"
    ></i>
  );
}
