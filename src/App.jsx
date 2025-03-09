import {
  ButtonToTop,
  CV,
  Dunkirk,
  Form,
  GitHub,
  Lille,
  Mail,
  Name,
  Project,
  Section,
  Skills,
} from "./components/index";
import projectList from "./data/projects.json";
import sections from "./data/sections.json";

const App = () => {
  return (
    <>
      <Name />
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
      <ButtonToTop />
    </>
  );
};
export default App;
