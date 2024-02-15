import TechnologyIcon from "./TechnologyIcon";

export default function Technology({ id, name, isColored, isSvg }) {
  return (
    <div className="flex-centered">
      <TechnologyIcon
        id={id}
        className="pr-2"
        isColored={isColored}
        isSvg={isSvg}
      />
      <span>{name}</span>
    </div>
  );
}
