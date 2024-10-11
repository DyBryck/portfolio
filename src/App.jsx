import {
  ButtonToTop,
  CardCV,
  CardDunkirk,
  CardForm,
  CardGitHub,
  CardLille,
  CardMail,
  CardProject,
  CardSection,
  CardSkills,
} from "./components/Components";
import projectsList from "./data/projectsList.json";
import sections from "./data/sections.json";

const App = () => {
  return (
    <>
      <ButtonToTop />
      <div className="mb-8 mt-4 flex items-center justify-center rounded-lg p-8 text-center shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 md:mb-16 dark:bg-black/20">
        <h1 className="rounded-lg text-2xl font-bold uppercase sm:text-3xl md:text-5xl">
          Portfolio
          <br />
          Dylan Bryckaert
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
        <CardForm />
        <CardSection
          title={sections[1].heading}
          image={sections[1].image}
          content={sections[1].content}
        />
        {projectsList.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};
export default App;
