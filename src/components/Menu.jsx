import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import FocusTrap from "focus-trap-react";
import { listenBreakpointChange } from "../lib/breakpointListener";

export default function Menu({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pageScroll, setPageScroll] = useState(0);

  useEffect(() => listenBreakpointChange("640px", close), [isOpen]);

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

  function close() {
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
      onClick={close}
    />
  ));

  return (
    <FocusTrap active={isOpen}>
      <div role="dialog" aria-label="Select menu option">
        <MobileMenuButton isOpen={isOpen} onClick={handleButtonClick} />
        <nav
          className={`${display} fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center bg-white text-center text-xl dark:bg-darkgray sm:relative sm:block sm:h-fit sm:w-fit sm:text-lg`}
        >
          <ul className="sm:flex md:gap-2">{menuItems}</ul>
        </nav>
      </div>
    </FocusTrap>
  );
}
