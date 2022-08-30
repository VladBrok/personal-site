import Menu from "./Menu";
import Project from "./Project";
import Technology from "./Technology";
import Section from "./Section";
import ContactForm from "./ContactForm";
import TechnologyIcon from "./TechnologyIcon";
import ThemeSelect from "./ThemeSelect";
import TECHNOLOGIES from "../data/technologies";
import PROJECTS from "../data/projects.json";
import MENU_ITEMS from "../data/menuItems.json";
import { changeTheme, getCurrentTheme } from "../lib/theme";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(() => getCurrentTheme());

  function handleThemeChange(newTheme) {
    changeTheme(newTheme);
    setTheme(newTheme);
  }

  const projects = PROJECTS.map(data => (
    <Project key={data.title} {...data}>
      {data.technologies.map(techId => (
        <Technology
          key={techId}
          id={techId}
          name={TECHNOLOGIES[techId].name}
          isColored={TECHNOLOGIES[techId].isColored}
        />
      ))}
    </Project>
  ));

  return (
    <>
      <header className="text-min-lg text-contrast bg-contrast fixed top-0 left-0 z-30 flex w-full items-center justify-between p-2 shadow-md dark:shadow-slate sm:items-baseline sm:p-4 md:p-5">
        <a href="/">
          Vlad<span className="text-highlight">Brok</span>
        </a>
        <ThemeSelect onChange={handleThemeChange} value={theme} />
        <Menu items={MENU_ITEMS} />
      </header>

      <main className="mx-6 sm:mx-8 md:mx-14 lg:mx-32">
        <Section className="flex items-center" name="about">
          <h1 className="my-4 font-semibold">
            <span className="block font-normal">Hi, my name is</span>{" "}
            <span className="text-min-2xl header block md:mb-6 md:mt-2">
              Vladislav Brakalo
            </span>
          </h1>
          <p className="-mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            praesentium, reprehenderit quos a voluptatibus voluptatum ipsa quia
            nemo inventore eum.
          </p>
        </Section>

        <Section className="text-center" name="projects">
          <h2 className="text-min-xl header my-8 font-semibold">Projects</h2>
          <div className="grid auto-rows-fr gap-10 md:grid-cols-2 xl:grid-cols-3">
            {projects}
          </div>
        </Section>

        <Section
          className="mt-28 flex items-center justify-center text-center"
          name="contact"
        >
          <h2 className="text-min-xl header font-semibold">Contact me</h2>
          <ContactForm />
        </Section>
      </main>

      <footer className="mt-6 border-t-[2px] border-gray p-6 text-center md:p-8">
        <div className="text-contrast flex justify-center">
          <a className="group relative" href="https://github.com/VladBrok/">
            <TechnologyIcon
              id="github"
              className="text-3xl "
              isColored={false}
            />
            <span className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 opacity-0 [transition:opacity_0.6s,bottom_0.6s] group-hover:bottom-9 group-hover:opacity-100">
              Github
            </span>
          </a>
        </div>
        <p className="mt-4">Copyright (c) 2022 Vladislav Brakalo</p>
      </footer>
    </>
  );
}
