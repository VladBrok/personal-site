import { Element } from "react-scroll";

export default function Section({ name, children, className = "" }) {
  return (
    <section className={`section ${className}`}>
      <Element name={name}>{children}</Element>
    </section>
  );
}
