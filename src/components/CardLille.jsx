import mapScreenLille from "../../public/images/maps/lille.webp";

const CardLille = () => {
  return (
    <div className="col-span-6 row-span-1 overflow-hidden rounded-lg opacity-80 shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:opacity-100 md:col-span-2 md:row-span-3 lg:col-span-3 lg:row-span-2 xl:col-span-2 xl:row-span-2">
      <img
        src={mapScreenLille}
        className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
      />
    </div>
  );
};

export default CardLille;
