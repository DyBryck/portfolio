const CardLille = () => {
  return (
    <div className="col-span-8 row-span-2 overflow-hidden rounded-lg shadow-xl transition-all duration-500 hover:scale-105 md:col-span-4 md:row-span-3 lg:row-span-2 xl:col-span-3 xl:row-span-2">
      <img
        src={"./images/maps/lille.webp"}
        alt="Carte de Lille, région dans laquelle je suis prêt à me déplacer"
        className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
        loading="lazy"
      />
    </div>
  );
};

export default CardLille;
