import PropTypes from "prop-types";

const CardSection = ({ title, image, content }) => {
  return (
    <div className="group col-span-8 row-span-3 flex flex-col items-center justify-around rounded-lg bg-white/20 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 md:col-span-4 lg:col-span-4 lg:row-span-3 xl:col-span-4 xl:row-span-2 dark:bg-black/20">
      <h2 className="mb-4 text-center text-2xl font-bold sm:text-4xl">
        {title}
      </h2>
      <div className="mb-4 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-white/30 shadow-inner transition-all duration-500 group-hover:scale-110 dark:bg-black/30">
        <img src={image} alt="Memoji" className="h-28 object-cover" />
      </div>
      <p className="leading-7 sm:text-xl">{content}</p>
    </div>
  );
};

CardSection.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
};

export default CardSection;
