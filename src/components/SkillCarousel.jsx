import Marquee from "react-fast-marquee";
import skills from "../data/skills.json";

const SkillCarousel = () => {
  return (
    <div className="card col-span-8 flex flex-col items-center justify-center rounded-lg bg-white/20 shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 md:col-span-4 md:row-span-1 lg:col-span-5 lg:row-span-1 xl:col-span-3 xl:row-span-1 dark:bg-black/20">
      <h2 className="text-center text-2xl font-bold sm:text-3xl md:mt-4 lg:mb-4 xl:mb-0">
        Mes compétences
      </h2>
      <Marquee
        className="h-24 cursor-pointer md:h-32 lg:h-32 xl:h-24"
        pauseOnHover="true"
        speed={30}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="mr-12 flex h-16 w-16 items-center justify-center rounded-full bg-white/30 transition-transform duration-500 hover:scale-110 lg:h-16 lg:w-16 dark:bg-black/30"
          >
            <img src={skill.logo} alt={"Logo " + skill.name} className="h-8" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillCarousel;
