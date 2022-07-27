export default function ProjectLink({ url, Icon, name, screenReaderOnlyName }) {
  return (
    <a className="button mx-auto max-w-[15rem]" href={url}>
      <Icon className="mb-[0.2rem] inline-block" />{" "}
      <span className="sr-only">{screenReaderOnlyName} </span>
      {name}
    </a>
  );
}
