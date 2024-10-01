import { Image } from "antd";

const CardDunkirk = () => {
  return (
    <div className="col-span-4 row-span-2 overflow-hidden rounded-lg shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:opacity-100 md:col-span-3 md:opacity-80 lg:col-span-3 xl:col-span-2 xl:row-span-1">
      <Image
        preview={false}
        width={"100%"}
        height={"100%"}
        src={"./images/maps/dunkirk.webp"}
        alt="Carte de Dunkerque, lieu de résidence"
        className="object-cover transition-all duration-500 hover:scale-110"
      />
    </div>
  );
};

export default CardDunkirk;
