import Menu from "./Menu";
import Project from "./Project";
import Technology from "./Technology";
import Section from "./Section";
import ContactForm from "./ContactForm";
import TECHNOLOGIES from "../data/technologies.json";
import PROJECTS from "../data/projects.json";
import MENU_ITEMS from "../data/menuItems.json";
import TechnologyIcon from "./TechnologyIcon";

export default function App() {
  const projects = PROJECTS.map(data => (
    <Project key={data.title} {...data}>
      {data.technologies.map(techId => (
        <Technology key={techId} id={techId} name={TECHNOLOGIES[techId]} />
      ))}
    </Project>
  ));

  return (
    <>
      <header className="fixed w-full top-0 left-0 p-2 flex justify-between bg-white shadow-md sm:p-4 md:p-5">
        <a className="text-2xl" href="/">
          Vlad<span className="text-blue">Brok</span>
        </a>
        <Menu items={MENU_ITEMS} />
      </header>

      <main className="mx-6 sm:mx-8 md:mx-14 lg:mx-32">
        <Section className="flex items-center" name="about">
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
            praesentium, reprehenderit quos a voluptatibus voluptatum ipsa quia
            nemo inventore eum.
          </p>
        </Section>

        <Section className="text-center" name="projects">
          <h2 className="font-semibold text-3xl my-8 decoration-blue underline underline-offset-2">
            Projects
          </h2>
          <div className="grid auto-rows-fr gap-10 md:grid-cols-2 xl:grid-cols-3">
            {projects}
          </div>
        </Section>

        <Section
          className="text-center flex items-center justify-center mt-28"
          name="contact"
        >
          <h2 className="font-semibold text-3xl decoration-blue underline underline-offset-2">
            Contact me
          </h2>
          <ContactForm />
        </Section>
      </main>

      <footer className="border-t-[2px] border-gray text-center p-6 mt-6 md:p-10">
        <div className="flex justify-center">
          <div className="flex-centered group relative">
            <a href="https://github.com/VladBrok/">
              <TechnologyIcon id="github" className="text-3xl" />
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
