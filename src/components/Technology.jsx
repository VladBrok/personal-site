import TechnologyIcon from "./TechnologyIcon";

export default function Technology({ id, name, isColored }) {
  return (
    <div className="flex-centered">
      <TechnologyIcon id={id} className="pr-2" isColored={isColored} />
      <span>{name}</span>
    </div>
  );
}
