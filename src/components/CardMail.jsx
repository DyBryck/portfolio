const CardMail = () => {
  return (
    <div className="col-span-3 row-span-1 flex items-center justify-center rounded-lg bg-white/20 opacity-80 shadow-lg backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:opacity-100 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-1">
      <a
        href="mailto:dylan.bryckaert@gmail.com"
        className="items-center justify-center transition-all duration-500 hover:scale-110"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.75 5.25 3 6v12l.75.75h16.5L21 18V6l-.75-.75zm.75 2.446v9.554h15V7.695L12 14.514zm13.81-.946H5.69L12 12.486z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
};

export default CardMail;
