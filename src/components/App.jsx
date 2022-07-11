import { useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import { Link, Element } from "react-scroll";

export default function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleMenuButtonClick() {
    setMenuIsOpen(value => !value);
  }

  function handleMenuItemClick() {
    setMenuIsOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  const menuDisplay = menuIsOpen ? "block" : "hidden";

  return (
    <>
      <header className="fixed w-full top-0 left-0 p-2 flex justify-between bg-white shadow-md sm:p-4 md:p-5">
        <a className="text-2xl" href="/">
          Vlad<span className="text-blue">Brok</span>
        </a>

        {/* todo: extract menu class */}
        <MobileMenuButton isOpen={menuIsOpen} onClick={handleMenuButtonClick} />
        <nav
          className={`${menuDisplay} fixed top-0 left-0 z-40 w-screen h-screen flex flex-col items-center justify-center text-center text-3xl text-gray bg-white sm:relative sm:w-fit sm:h-fit sm:text-xl sm:block`}
        >
          <ul className="sm:flex md:gap-2">
            <li>
              <Link
                className="p-4 inline-block hover:underline hover:cursor-pointer hover:text-blue sm:py-1"
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
                className="p-4 inline-block hover:underline hover:cursor-pointer hover:text-blue sm:py-1"
                to="projects"
                smooth={true}
                offset={-70}
                onClick={handleMenuItemClick}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="p-4 inline-block hover:underline hover:cursor-pointer hover:text-blue sm:py-1"
                to="contact"
                smooth={true}
                offset={-70}
                onClick={handleMenuItemClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-6 sm:mx-8 md:mx-14 lg:mx-32">
        <section className="min-h-screen flex items-center">
          <Element name="home">
            <h1 className="font-semibold text-4xl my-4">
              <span className="text-gray text-xl font-normal block">
                Hi, my name is
              </span>{" "}
              <span className="block decoration-blue underline underline-offset-2 md:mb-6 md:mt-2">
                Vladislav Brakalo
              </span>
            </h1>
            <p className="text-gray text-xl -mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              praesentium, reprehenderit quos a voluptatibus voluptatum ipsa
              quia nemo inventore eum.
            </p>
          </Element>
        </section>

        <section className="min-h-screen text-center">
          <Element name="projects">
            <h2 className="font-semibold text-3xl my-8 decoration-blue underline underline-offset-2">
              Projects
            </h2>

            <div className="grid auto-rows-fr gap-10 md:grid-cols-2 xl:grid-cols-3">
              <div className="flex flex-col items-center max-w-xs m-auto shadow-lg shadow-gray rounded-2xl h-full">
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
                    Quidem molestias modi tempora voluptate reiciendis,
                    voluptatem vero eum eos accusantium cumque.
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
              <div className="flex flex-col items-center max-w-xs m-auto shadow-lg shadow-gray rounded-2xl h-full">
                <img
                  className="w-full block rounded-t-2xl"
                  src="/public/images/project-placeholder.jpg"
                  alt="This is the project"
                />
                <div className="mx-4 flex flex-col h-full">
                  <h3 className="font-semibold text-2xl mb-5 mt-6">
                    Another One
                  </h3>
                  <p className="text-gray text-lg mb-6">
                    Lorem ipsum dolor sit amet.
                  </p>
                  <div className="flex flex-wrap justify-center mb-6 mt-auto">
                    <div className="flex items-center text-lg mx-2 my-1">
                      <i className="devicon-html5-plain colored pr-1 pt-1"></i>
                      <span>HTML</span>
                    </div>
                    <div className="flex items-center text-lg mx-2 my-1">
                      <i className="devicon-css3-plain colored pr-1 pt-1"></i>
                      <span>CSS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Element>
        </section>

        <section className="min-h-screen text-center flex items-center justify-center mt-28">
          <Element name="contact">
            <h2 className="font-semibold text-3xl decoration-blue underline underline-offset-2">
              Contact me
            </h2>
            <form
              className="my-4 text-left text-gray text-lg md:w-96"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name">
                  Name:
                  <abbr className="text-red no-underline pl-1" title="required">
                    *
                  </abbr>
                </label>
                <input
                  className="block rounded-md p-1 border mt-1 mb-4 border-lightgray w-full md:mb-6"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div>
                <label htmlFor="email">
                  Email:
                  <abbr className="text-red no-underline pl-1" title="required">
                    *
                  </abbr>
                </label>
                <input
                  className="block rounded-md p-1 border mt-1 mb-4 border-lightgray w-full md:mb-6"
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
              <div>
                <label htmlFor="msg">
                  Message:
                  <abbr className="text-red no-underline pl-1" title="required">
                    *
                  </abbr>
                </label>
                <textarea
                  className="block rounded-md p-1 border mt-1 mb-4 border-lightgray w-full md:mb-6"
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div>
                <button className="block w-full px-2 py-1 text-white bg-blue rounded-md text-center my-6 hover:[filter:brightness(110%)] md:my-10">
                  Send Message
                </button>
              </div>
            </form>
          </Element>
        </section>
      </main>

      <footer className="border-t-[2px] border-gray text-center p-6 mt-6 md:p-10">
        {/* dup: devicon container ?*/}
        <div className="flex justify-center">
          {/* dup: devicon ? */}
          <div className="flex items-center text-lg mx-2 my-1 group relative">
            <a href="https://github.com/VladBrok/">
              <i className="devicon-github-plain colored text-3xl"></i>
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:mb-14 [transition:opacity_0.6s,margin_0.6s] pointer-events-none">
              Github
            </span>
          </div>
        </div>
        <p className="text-gray text-lg mt-4">
          Copyright (c) 2022 Vladislav Brakalo
        </p>
      </footer>
    </>
  );
}
