import { useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import { Link, Element } from "react-scroll";

export default function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleMenuButtonClick() {
    setMenuIsOpen(value => !value);
  }

  function handleMenuItemClick() {
    console.log("active");
    setMenuIsOpen(false);
  }

  const menuDisplay = menuIsOpen ? "block" : "hidden";

  return (
    <>
      <header className="fixed w-full top-0 left-0 pt-2 px-2 flex justify-between bg-white sm:pt-4 sm:px-4 md:pt-6 md:px-6">
        <a className="text-2xl" href="/">
          VladBrok
        </a>

        {/* todo: extract menu class */}
        <MobileMenuButton isOpen={menuIsOpen} onClick={handleMenuButtonClick} />
        <nav
          className={`${menuDisplay} fixed top-0 left-0 z-40 w-screen h-screen flex flex-col items-center justify-center text-center text-3xl text-gray bg-white sm:relative sm:w-fit sm:h-fit sm:text-xl sm:block`}
        >
          <ul className="sm:flex md:gap-2">
            <li>
              <Link
                className="p-4 inline-block hover:underline hover:cursor-pointer sm:py-1"
                to="home"
                smooth={true}
                offset={-300}
                onClick={handleMenuItemClick}
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
                onClick={handleMenuItemClick}
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
                onClick={handleMenuItemClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-6">
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
            <h2 className="font-semibold text-3xl my-8">Projects</h2>

            <div className="flex flex-col items-center max-w-xs m-auto shadow-lg shadow-gray rounded-2xl">
              <img
                className="w-full block rounded-t-2xl"
                src="/public/images/project-placeholder.jpg"
                alt="This is the project"
              />
              <div className="mx-4">
                <h3 className="font-semibold text-2xl mb-5 mt-6">
                  This is the project
                </h3>
                <p className="text-gray text-lg mb-6">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem molestias modi tempora voluptate reiciendis, voluptatem
                  vero eum eos accusantium cumque.
                </p>
                <div className="flex flex-wrap justify-center mb-6">
                  <div className="flex items-center text-lg mx-2 my-1">
                    <i className="devicon-html5-plain colored pr-1 pt-1"></i>
                    <span>HTML</span>
                  </div>
                  <div className="flex items-center text-lg mx-2 my-1">
                    <i className="devicon-css3-plain colored pr-1 pt-1"></i>
                    <span>CSS</span>
                  </div>
                  <div className="flex items-center text-lg mx-2 my-1">
                    <i className="devicon-javascript-plain colored pr-1 pt-1"></i>
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center text-lg mx-2 my-1">
                    <i className="devicon-react-plain colored pr-1 pt-1"></i>
                    <span>React</span>
                  </div>
                </div>
              </div>
            </div>
          </Element>
        </section>

        <section className="min-h-screen text-center flex items-center justify-center">
          <Element name="contact">
            <h2 className="font-semibold text-3xl">Contact me</h2>
          </Element>
        </section>
      </main>

      <footer></footer>
    </>
  );
}
