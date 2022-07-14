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

  const colors = isError ? "bg-red shadow-red" : "bg-blue shadow-blue";

  return (
    <div
      className={`fixed z-50 -translate-x-1/2 bottom-0 rounded-xl left-1/2 flex items-center justify-center text-center font-semibold w-[min(70%,22rem)] py-4 px-8 [transition:visibility_0.6s,transform_0.6s] text-white dark:text-light min-h-14 shadow-sm ${colors} ${visibility}`}
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
