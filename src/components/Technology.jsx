export default function Technology({ id, name }) {
  return (
    <div className="flex items-center text-lg mx-2 my-1">
      <i className={`devicon-${id}-plain colored pr-1 pt-1`}></i>
      <span>{name}</span>
    </div>
  );
}
