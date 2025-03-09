import { useEffect, useState } from "react";

const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      aria-label="Retourner en haut de la page"
      tabIndex={0}
      onClick={scrollToTop}
      className={`card fixed right-5 bottom-5 z-10 rounded-full bg-white/30 p-4 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-90 active:duration-100 dark:bg-black/30 ${isVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m8 12 4-4m0 0 4 4m-4-4v12M4 4h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ButtonToTop;
