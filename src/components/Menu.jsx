import MenuItem from "./MenuItem";
import { useState } from "react";
import MobileMenuButton from "./MobileMenuButton";

export default function Menu({ items }) {
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <MobileMenuButton isOpen={isOpen} onClick={handleButtonClick} />
      <nav
        className={`${display} fixed top-0 left-0 z-40 w-screen h-screen flex flex-col items-center justify-center text-center text-3xl text-gray bg-white sm:relative sm:w-fit sm:h-fit sm:text-xl sm:block`}
      >
        <ul className="sm:flex md:gap-2">{menuItems}</ul>
      </nav>
    </>
  );
}
