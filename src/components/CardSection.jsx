import PropTypes from "prop-types";

const CardSection = ({ title, image, content }) => {
  return (
    <div className="group col-span-6 row-span-3 flex flex-col items-center justify-around rounded-lg bg-white/20 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:opacity-100 md:col-span-4 md:opacity-80 lg:col-span-3 lg:row-span-3 xl:col-span-3 xl:row-span-2">
      <h2 className="mb-4 text-center text-4xl font-bold">{title}</h2>
      <div className="mb-4 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-white/30 transition-all duration-500 group-hover:scale-110">
        <img src={image} alt="Memoji" className="h-28 object-cover" />
      </div>
      <p className="text-xl leading-7">{content}</p>
    </div>
  );
};

CardSection.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
};

export default CardSection;
