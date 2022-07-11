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

  return (
    <>
      <header>
        <a href="/">VladBrok</a>

        <button
          className="absolute right-2 top-2 text-4xl text-black"
          onClick={handleOpenMenuClick}
        >
          <FaBars />
        </button>

        {menuIsOpen && (
          <nav className="fixed top-0 left-0 z-40 w-screen h-screen flex flex-col items-center justify-center text-center bg-white text-gray">
            <button
              className="absolute right-2 top-2 text-5xl text-black"
              onClick={handleCloseMenuClick}
            >
              <MdClose />
            </button>
            <ul>
              <li>
                <a className="text-3xl p-4 inline-block hover:underline hover:cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a className="text-3xl p-4 inline-block hover:underline hover:cursor-pointer">
                  Projects
                </a>
              </li>
              <li>
                <a className="text-3xl p-4 inline-block hover:underline hover:cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main></main>

      <footer></footer>
    </>
  );
}
