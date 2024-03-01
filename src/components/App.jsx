import { useEffect, useMemo, useState } from "react";
import MENU_ITEMS from "../data/menuItems.json";
import PROJECTS from "../data/projects.json";
import TECHNOLOGIES from "../data/technologies";
import { changeTheme, getCurrentTheme } from "../lib/theme";
import ContactForm from "./ContactForm";
import Menu from "./Menu";
import Project from "./Project";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Technology from "./Technology";
import TechnologyIcon from "./TechnologyIcon";
import ThemeSelect from "./ThemeSelect";

export default function App() {
  const [theme, setTheme] = useState(() => getCurrentTheme());

  function handleThemeChange(newTheme) {
    changeTheme(newTheme);
    setTheme(newTheme);
  }

  useEffect(() => {
    const hash = window.location.hash?.trim() || "";
    if (!hash) {
      return;
    }

    const el = document.getElementById(hash.slice(1));
    el?.scrollIntoView();
  });

  const projects = PROJECTS.map(data => (
    <Project key={data.title} {...data}>
      {data.technologies.map(techId => (
        <Technology
          key={techId}
          id={techId}
          name={TECHNOLOGIES[techId].name}
          isColored={TECHNOLOGIES[techId].isColored}
          isSvg={TECHNOLOGIES[techId].isSvg}
        />
      ))}
    </Project>
  ));

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <header className="text-min-lg text-contrast bg-contrast fixed top-0 left-0 z-30 flex w-full items-center justify-between p-2 shadow-md dark:shadow-slate sm:items-baseline sm:p-4 md:p-5">
        <a href="/">
          Vlad<span className="text-highlight">Brok</span>
        </a>
        <ThemeSelect onChange={handleThemeChange} value={theme} />
        <Menu items={MENU_ITEMS} />
      </header>

      <main className="mx-6 md:mx-8 lg:mx-16">
        <Section className="flex items-center" name="about">
          <h1 className="my-4 font-semibold">
            <span className="block font-normal">Hi, my name is</span>{" "}
            <span className="text-min-2xl header block md:mb-5 md:mt-1">
              Vladislav Brakalo
            </span>
          </h1>
          <article className="-mt-1 max-w-4xl">
            <p>
              I'm a software engineer with 1.5+ years of commercial experience
              and a computer science background. I'm also a co-maintainer of{" "}
              <a
                className="link"
                href="https://marketplace.visualstudio.com/items?itemName=vscode-snippet.Snippet"
              >
                VSCode extension "vscode-snippet"
              </a>
              .
            </p>
            <p className="mt-2">
              In spare time, I create{" "}
              <a className="link" href="https://github.com/VladBrok/">
                personal projects
              </a>{" "}
              and contribute to open source software.
            </p>
            <div>
              For example, I've contributed to:{" "}
              <ul className="my-1">
                <li className="list-item">
                  <a
                    className="link"
                    href="https://github.com/quasarframework/quasar"
                  >
                    Quasar
                  </a>
                  , Developer-oriented, front-end framework with VueJS
                  components
                </li>
                <li className="list-item">
                  <a
                    className="link"
                    href="https://github.com/postcss/postcss-dark-theme-class"
                  >
                    PostCSS Dark Theme Class
                  </a>
                  , PostCSS plugin to make dark/light theme switcher
                </li>
                <li className="list-item">
                  <a
                    className="link"
                    href="https://github.com/mre/vscode-snippet"
                  >
                    vscode-snippet
                  </a>
                  , a Visual Studio Code extension for cht.sh
                </li>
                <li className="list-item">
                  <a className="link" href="https://github.com/logux">
                    logux
                  </a>
                  , a client-server communication framework based on Optimistic
                  UI, CRDT, and log
                </li>
                <li className="list-item">
                  <a className="link" href="https://github.com/ai/keyux">
                    keyux
                  </a>
                  , JS library to improve keyboard UI of web apps
                </li>
                <li className="list-item">
                  <a className="link" href="https://github.com/logux/vuex">
                    logux Vuex
                  </a>
                  , Vuex compatible API for Logux
                </li>
                <li className="list-item">
                  <a
                    className="link"
                    href="https://github.com/MitchellMarkGeorge/TabButler"
                  >
                    TabButler
                  </a>
                  , a browser extension for managing tabs
                </li>
                <li className="list-item">
                  <a
                    className="link"
                    href="https://github.com/rohitdasu/projectmate"
                  >
                    Projectmate
                  </a>
                  , a site for searching open source projects
                </li>
                <li className="list-item">
                  <a
                    className="link"
                    href="https://github.com/HaaLeo/publish-vscode-extension"
                  >
                    publish-vscode-extension
                  </a>
                  , a github action for publishing vscode extensions
                </li>
              </ul>
            </div>
            <p className="mt-2">
              You can contact me via{" "}
              <a className="link" href="https://t.me/VladBrok">
                Telegram
              </a>{" "}
              or{" "}
              <a className="link" href="mailto:vlad.brok99@gmail.com">
                Email
              </a>
            </p>
          </article>
        </Section>

        <Section className="text-center" name="projects">
          <div className="my-8">
            <SectionTitle text="Projects" id="projects" />
          </div>
          <div className="flex flex-wrap justify-center gap-16 sm:gap-20 lg:gap-28">
            {projects}
          </div>
        </Section>

        <Section
          className="mt-28 flex items-center justify-center text-center"
          name="contact"
        >
          <SectionTitle text="Contact me" id="contact" />
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
        <p className="mt-4">Copyright (c) {year} Vladislav Brakalo</p>
      </footer>
    </>
  );
}
