const CV = () => {
  const CVLink =
    "https://drive.google.com/file/d/1nW5QXdKQruV0JlqMb8icISAwsBpQaf5J/view?usp=share_link";

  return (
    <div className="card col-span-3 row-span-2 flex flex-col items-center justify-around overflow-hidden rounded-lg bg-white/20 shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 md:col-span-4 md:row-span-1 md:flex-row lg:col-span-5 lg:row-span-1 lg:flex-row xl:col-span-3 xl:row-span-1 xl:flex-row dark:bg-black/20">
      <h3 className="hidden text-center text-2xl font-bold sm:inline">
        Curriculum
        <br />
        Vitae
      </h3>
      <h3 className="text-center text-2xl font-bold sm:hidden">CV</h3>
      <a
        tabIndex={1}
        href={CVLink}
        target="_blank"
        className="items-center justify-center transition-all duration-500 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="65"
          viewBox="0 0 442.04 442.04"
          xmlSpace="preserve"
        >
          <path
            fill="currentColor"
            d="M221.02 341.304c-49.708 0-103.206-19.44-154.71-56.22-38.502-27.494-62.266-54.733-63.259-55.881a12.5 12.5 0 0 1 0-16.367c.993-1.146 24.756-28.387 63.259-55.881 51.505-36.777 105.003-56.219 154.71-56.219s103.207 19.441 154.71 56.219c38.502 27.494 62.266 54.734 63.259 55.881a12.5 12.5 0 0 1 0 16.367c-.993 1.146-24.756 28.387-63.259 55.881-51.503 36.779-105.001 56.22-154.71 56.22M29.638 221.021c9.61 9.799 27.747 27.03 51.694 44.071 32.83 23.361 83.714 51.212 139.688 51.212s106.859-27.851 139.688-51.212c23.944-17.038 42.082-34.271 51.694-44.071-9.609-9.799-27.747-27.03-51.694-44.071-32.829-23.362-83.714-51.212-139.688-51.212s-106.858 27.85-139.688 51.212c-23.944 17.038-42.082 34.269-51.694 44.071"
          />
          <path
            fill="currentColor"
            d="M221.02 298.521c-42.734 0-77.5-34.767-77.5-77.5s34.766-77.5 77.5-77.5a77.44 77.44 0 0 1 51.048 19.188c5.193 4.549 5.715 12.446 1.166 17.639s-12.447 5.714-17.639 1.166a52.45 52.45 0 0 0-34.576-12.993c-28.949 0-52.5 23.552-52.5 52.5s23.551 52.5 52.5 52.5 52.5-23.552 52.5-52.5c0-6.903 5.597-12.5 12.5-12.5s12.5 5.597 12.5 12.5c.002 42.733-34.765 77.5-77.499 77.5"
          />
          <path
            fill="currentColor"
            d="M221.02 246.021c-13.785 0-25-11.215-25-25s11.215-25 25-25 25 11.215 25 25-11.214 25-25 25"
          />
        </svg>
      </a>
      <a
        tabIndex={1}
        href="./CV.pdf"
        className="items-center justify-center transition-all duration-500 hover:scale-110"
        download
      >
        <svg
          width="65"
          height="65"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M3 12.3v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path data-name="Right" d="m7.9 12.3 4.1 4 4.1-4" />
            <path d="M12 2.7v11.5" />
          </g>
        </svg>
      </a>
    </div>
  );
};

export default CV;
