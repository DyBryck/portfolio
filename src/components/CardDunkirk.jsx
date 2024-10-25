const CardDunkirk = () => {
  return (
    <div className="col-span-5 row-span-2 overflow-hidden rounded-lg shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 md:col-span-4 lg:col-span-3 xl:col-span-2 xl:row-span-1">
      <img
        src={"./images/maps/dunkirk.webp"}
        alt="Carte de Dunkerque, lieu de résidence"
        className="h-full object-cover transition-all duration-500 hover:scale-110"
        loading="lazy"
      />
    </div>
  );
};

export default CardDunkirk;
