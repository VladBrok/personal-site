import { useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import { Link, Element } from "react-scroll";

export default function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleMenuClick() {
    setMenuIsOpen(value => !value);
  }

  const menuDisplay = menuIsOpen ? "block" : "hidden";

  return (
    <>
      <header className="fixed w-full top-0 left-0 pt-2 px-2 flex justify-between bg-white sm:pt-4 sm:px-4 md:pt-6 md:px-6">
        <a className="text-2xl" href="/">
          VladBrok
        </a>

        {/* todo: extract menu class */}
        <MobileMenuButton isOpen={menuIsOpen} onClick={handleMenuClick} />
        <nav
          className={`${menuDisplay} fixed top-0 left-0 z-40 w-screen h-screen flex flex-col items-center justify-center text-center text-3xl text-gray sm:relative sm:w-fit sm:h-fit sm:text-xl sm:block`}
        >
          <ul className="sm:flex md:gap-2">
            <li>
              <Link
                className="p-4 inline-block hover:underline hover:cursor-pointer sm:py-1"
                to="home"
                smooth={true}
                offset={-300}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="p-4 inline-block hover:underline hover:cursor-pointer sm:py-1"
                to="projects"
                smooth={true}
                offset={-100}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="p-4 inline-block hover:underline hover:cursor-pointer sm:py-1"
                to="contact"
                smooth={true}
                offset={-100}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-4">
        <section className="min-h-screen flex items-center">
          <Element name="home">
            <h1 className="font-semibold text-4xl">
              <span className="text-gray text-xl mt-2 font-normal block">
                Hi, my name is
              </span>{" "}
              Vladislav Brakalo
            </h1>
            <p className="text-gray text-xl mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              praesentium, reprehenderit quos a voluptatibus voluptatum ipsa
              quia nemo inventore eum.
            </p>
          </Element>
        </section>

        <section className="min-h-screen text-center">
          <Element name="projects">
            <h2 className="font-semibold text-3xl">Projects</h2>
          </Element>
        </section>

        <section className="min-h-screen text-center">
          <Element name="contact">
            <h2 className="font-semibold text-3xl">Contact me</h2>
          </Element>
        </section>
      </main>

      <footer></footer>
    </>
  );
}
