import { useState } from "react";
import MobileMenuButton from "./MobileMenuButton";

export default function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleMenuClick() {
    setMenuIsOpen(value => !value);
  }

  const menuDisplay = menuIsOpen ? "block" : "hidden";

  return (
    <>
      <header className="mt-2 mx-2 flex justify-between sm:mt-4 sm:mx-4 md:mt-6 md:mx-6">
        <a className="text-2xl" href="/">
          VladBrok
        </a>

        {/* todo: extract menu class */}
        <MobileMenuButton isOpen={menuIsOpen} onClick={handleMenuClick} />
        <nav
          className={`${menuDisplay} fixed top-0 left-0 z-40 w-screen h-screen flex flex-col items-center justify-center text-center text-3xl bg-white text-gray sm:relative sm:w-fit sm:h-fit sm:text-xl sm:block`}
        >
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

      <main className="mx-4">
        <section className="min-h-screen mt-28">
          <h1 className="font-semibold text-4xl">
            <span className="text-gray text-xl mt-2 font-normal block">
              Hi, my name is
            </span>{" "}
            Vladislav Brakalo
          </h1>
          <p className="text-gray text-xl mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            praesentium, reprehenderit quos a voluptatibus voluptatum ipsa quia
            nemo inventore eum.
          </p>
        </section>

        <section className="min-h-screen mt-28 text-center">
          <h2 className="font-semibold text-3xl">Projects</h2>
        </section>

        <section className="min-h-screen mt-28 text-center">
          <h2 className="font-semibold text-3xl">Contact me</h2>
        </section>
      </main>

      <footer></footer>
    </>
  );
}
