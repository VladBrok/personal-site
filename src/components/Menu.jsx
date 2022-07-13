import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import FocusTrap from "focus-trap-react";

export default function Menu({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const breakpoint = window.matchMedia("(min-width: 640px)");
    function adjustOpenState() {
      if (breakpoint.matches) {
        setIsOpen(false);
      }
    }
    breakpoint.addEventListener("change", adjustOpenState);
    return () => breakpoint.removeEventListener("change", adjustOpenState);
  }, []);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  function handleButtonClick() {
    setIsOpen(value => !value);
  }

  function handleItemClick() {
    setIsOpen(false);
  }

  const display = isOpen ? "block" : "hidden";
  const menuItems = items.map(item => (
    <MenuItem
      key={item.name}
      name={item.name}
      offset={item.offset}
      onClick={handleItemClick}
    />
  ));

  return (
    <FocusTrap active={isOpen}>
      <div role="dialog" aria-label="Select menu option">
        <MobileMenuButton isOpen={isOpen} onClick={handleButtonClick} />
        <nav
          className={`${display} fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center text-center text-xl bg-white dark:bg-darkgray sm:relative sm:w-fit sm:h-fit sm:text-lg sm:block`}
        >
          <ul className="sm:flex md:gap-2">{menuItems}</ul>
        </nav>
      </div>
    </FocusTrap>
  );
}
