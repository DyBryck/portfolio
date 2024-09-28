import React from "react";
import projectsList from "./assets/data/projectsList.json";
import sections from "./assets/data/sections.json";

import Background from "./components/Background";
import {
  CardCV,
  CardDunkirk,
  CardGitHub,
  CardLille,
  CardMail,
  CardProject,
  CardSection,
  CardSkills,
} from "./components/Components";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <>
      <Background />
      <div className="mb-16 mt-4 flex items-center justify-center rounded-xl bg-white/20 p-8 text-center shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105">
        <h1 className="rounded-lg text-3xl font-bold uppercase md:text-5xl">
          Portfolio Dylan Bryckaert
        </h1>
      </div>
      <div className="grid max-w-7xl grid-flow-row auto-rows-[150px] grid-cols-6 gap-4 md:gap-8">
        <CardSection
          title={sections[0].heading}
          image={sections[0].image}
          content={sections[0].content}
        />
        <CardLille />
        <CardMail />
        <CardGitHub />
        <CardDunkirk />
        <CardCV />
        <CardSkills />
        <CardSection
          title={sections[1].heading}
          image={sections[1].image}
          content={sections[1].content}
        />

        {projectsList.map((project) => (
          <React.Fragment key={project.id}>
            <CardProject project={project} />
          </React.Fragment>
        ))}
      </div>
      <ContactForm />
    </>
  );
};
export default App;
