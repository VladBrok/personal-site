import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export default function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleCloseMenuClick() {
    setMenuIsOpen(false);
  }

  function handleOpenMenuClick() {
    setMenuIsOpen(true);
  }

  const menuDisplay = menuIsOpen ? "block" : "hidden";

  return (
    <>
      <header className="mt-2 mx-2 flex justify-between sm:mt-4 sm:mx-4 md:mt-6 md:mx-6">
        <a className="text-2xl" href="/">
          VladBrok
        </a>

        <button
          className="text-4xl text-black sm:hidden"
          onClick={handleOpenMenuClick}
        >
          <FaBars />
        </button>

        <nav
          className={`${menuDisplay} fixed top-0 left-0 z-40 w-screen h-screen flex flex-col items-center justify-center text-center text-3xl bg-white text-gray sm:relative sm:w-fit sm:h-fit sm:text-xl sm:block`}
        >
          <button
            className="absolute right-2 top-2 text-5xl text-black sm:hidden"
            onClick={handleCloseMenuClick}
          >
            <MdClose />
          </button>
          <ul className="sm:flex md:gap-2">
            <li>
              <a className="p-4 inline-block hover:underline hover:cursor-pointer sm:py-1">
                Home
              </a>
            </li>
            <li>
              <a className="p-4 inline-block hover:underline hover:cursor-pointer sm:py-1">
                Projects
              </a>
            </li>
            <li>
              <a className="p-4 inline-block hover:underline hover:cursor-pointer sm:py-1">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main></main>

      <footer></footer>
    </>
  );
}
