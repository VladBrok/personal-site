export default function SectionTitle({ text, id }) {
  return (
    <div>
      <div className="relative -top-[70px]" id={id}>
        &nbsp;
      </div>
      <h2 className="text-min-xl header font-semibold">
        <a href={`#${id}`} className="section-title-link">
          {text}
        </a>
      </h2>
    </div>
  );
}
