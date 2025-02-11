import {
  ButtonToTop,
  CV,
  Dunkirk,
  Form,
  GitHub,
  Lille,
  Mail,
  Project,
  Section,
  Skills,
} from "./components/index";
import projectList from "./data/projects.json";
import sections from "./data/sections.json";

const App = () => {
  return (
    <>
      <ButtonToTop />
      <div className="mt-4 mb-8 flex items-center justify-center rounded-lg p-8 text-center shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 md:mb-16 dark:bg-black/20">
        <h1 className="rounded-lg text-2xl font-bold uppercase sm:text-3xl md:text-5xl">
          Dylan Bryckaert
        </h1>
      </div>
      <div className="grid max-w-7xl grid-flow-row auto-rows-[150px] grid-cols-8 gap-4 md:gap-8">
        <Section
          title={sections[0].heading}
          image={sections[0].image}
          content={sections[0].content}
        />
        <Lille />
        <Mail />
        <GitHub />
        <Dunkirk />
        <CV />
        <Skills />
        <Form />
        <Section
          title={sections[1].heading}
          image={sections[1].image}
          content={sections[1].content}
        />
        {projectList.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};
export default App;
