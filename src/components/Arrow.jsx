import { BsArrowRightSquare } from "react-icons/bs";

export default function Arrow({ onClick }) {
  return (
    <button
      className="button-like text-4xl mt-auto mb-3 mr-3 self-end text-blue sm:mb-5 sm:mr-5"
      onClick={onClick}
    >
      <BsArrowRightSquare />
    </button>
  );
}
