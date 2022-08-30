import TechnologyIcon from "./TechnologyIcon";

export default function Technology({ id, name, isColored }) {
  return (
    <div className="flex-centered">
      <TechnologyIcon
        id={id}
        className="pr-2 pt-[0.15rem]"
        isColored={isColored}
      />
      <span>{name}</span>
    </div>
  );
}
