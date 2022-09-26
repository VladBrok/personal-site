import { BsArrowRightSquare } from "react-icons/bs";
import EmptyButton from "./EmptyButton";

export default function FlipCardButton({ onClick }) {
  return (
    <EmptyButton
      className="button-like text-highlight mt-auto mb-3 mr-3 self-end text-4xl sm:mb-5 sm:mr-5"
      onClick={onClick}
      label="Flip project card"
    >
      <BsArrowRightSquare />
    </EmptyButton>
  );
}
