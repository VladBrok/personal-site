import { AiOutlineClose } from "react-icons/ai";

export default function Notification({ isActive, isError, onClose, children }) {
  const colors = isError ? "bg-red shadow-red" : "bg-blue shadow-blue";
  const visibility = isActive
    ? "visible -translate-y-14"
    : "invisible translate-y-full";

  return (
    <div
      className={`fixed z-50 -translate-x-1/2 bottom-0 rounded-xl left-1/2 flex items-center justify-center text-center font-semibold w-[min(70%,25rem)] py-4 px-8 [transition:visibility_0.6s,transform_0.6s] text-white dark:text-light min-h-14 shadow-sm ${colors} ${visibility}`}
    >
      {children}
      <button
        type="button"
        className="absolute top-2 right-2 text-2xl"
        aria-label="Close notification"
        onClick={onClose}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
}
