import { BsArrowRightSquare } from "react-icons/bs";

export default function Arrow({ text, onClick }) {
  return (
    <button
      className="button-like mt-auto mb-3 mr-3 self-end text-4xl text-blue sm:mb-5 sm:mr-5"
      onClick={onClick}
    >
      <BsArrowRightSquare />
      <span className="sr-only">{text}</span>
    </button>
  );
}
