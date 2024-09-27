import mapScreenLille from "/images/maps/lille.webp";

const CardLille = () => {
  return (
    <div className="col-span-6 row-span-1 overflow-hidden rounded-lg shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:opacity-100 md:col-span-2 md:row-span-3 md:opacity-80 lg:col-span-3 lg:row-span-2 xl:col-span-2 xl:row-span-2">
      <img
        src={mapScreenLille}
        alt="Carte de Lille, région dans laquelle je suis prêt à me déplacer"
        className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
      />
    </div>
  );
};

export default CardLille;
