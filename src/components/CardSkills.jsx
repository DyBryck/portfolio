import Marquee from "react-fast-marquee";
import skillsList from "../assets/data/skillsList.json";

const CardSkills = () => {
  return (
    <div className="col-span-6 flex flex-col items-center justify-center rounded-lg bg-white/20 shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:opacity-100 md:opacity-80 lg:col-span-3 lg:row-span-2 xl:col-span-2 xl:row-span-1">
      <h2 className="text-3xl font-bold">Mes compétences</h2>
      <Marquee className="h-24 cursor-pointer" pauseOnHover="true" speed={30}>
        {skillsList.map((skill) => (
          <div
            key={skill.name}
            className="mr-12 flex h-16 w-16 items-center justify-center rounded-full bg-white/30 transition-transform duration-500 hover:scale-110"
          >
            <img src={skill.logo} alt={"Logo " + skill.name} className="h-8" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CardSkills;
