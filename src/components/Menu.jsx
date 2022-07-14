import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import FocusTrap from "focus-trap-react";
import { listenBreakpointChange } from "../lib/breakpointListener";

export default function Menu({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pageScroll, setPageScroll] = useState(0);

  useEffect(
    () => listenBreakpointChange("640px", handleMenuItemClick),
    [isOpen]
  );

  function handleButtonClick() {
    const newIsOpen = !isOpen;

    if (!newIsOpen) {
      allowPageScrolling();
    } else {
      preventPageScrolling();
    }

    setIsOpen(newIsOpen);
  }

  function allowPageScrolling() {
    const page = document.documentElement;
    page.style.position = "static";
    page.style.overflowY = "auto";
    page.scrollTop = pageScroll;
  }

  function preventPageScrolling() {
    const page = document.documentElement;
    const currentScroll = page.scrollTop;
    page.style.position = "fixed";
    page.style.overflowY = "scroll";
    setPageScroll(currentScroll);
  }

  function handleMenuItemClick() {
    if (!isOpen) {
      return;
    }
    allowPageScrolling();
    setIsOpen(false);
  }

  const display = isOpen ? "block" : "hidden";
  const menuItems = items.map(item => (
    <MenuItem
      key={item.name}
      name={item.name}
      offset={item.offset}
      onClick={handleMenuItemClick}
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
