import TechnologyIcon from "./TechnologyIcon";

export default function Technology({ id, name }) {
  return (
    <div className="flex-centered">
      <TechnologyIcon id={id} className="pr-1 pt-1" />
      <span>{name}</span>
    </div>
  );
}
