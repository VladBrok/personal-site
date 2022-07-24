import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Notification({ isError, onClose, children }) {
  const [visibility, setVisibility] = useState("translate-y-full");
  const containerRef = useRef();
  useEffect(() => {
    setVisibility("visible -translate-y-14");
  }, []);

  function handleClose() {
    setVisibility("invisible translate-y-full");
    containerRef.current.ontransitionend = () => {
      containerRef.current.ontransitionend = null;
      onClose();
    };
  }

  const colors = isError
    ? "bg-danger shadow-danger"
    : "bg-highlight shadow-highlight";

  return (
    <div
      className={`min-h-14 fixed bottom-0 left-1/2 z-50 flex w-[min(70%,22rem)] -translate-x-1/2 items-center justify-center rounded-xl py-4 px-8 text-center font-semibold text-white shadow-sm [transition:visibility_0.6s,transform_0.6s] dark:text-light ${colors} ${visibility}`}
      ref={containerRef}
    >
      {children}
      <button
        type="button"
        className="absolute top-2 right-2 text-2xl"
        aria-label="Close notification"
        onClick={handleClose}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
}
