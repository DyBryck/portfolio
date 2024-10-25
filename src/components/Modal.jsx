import { Image } from "antd";
import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";

const Modal = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 500);
  }, [onClose]);

  useEffect(() => {
    setIsVisible(true);
    document.body.classList.add("overflow-hidden");

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);

  const handleClickOutside = (e) => {
    if (e.target.id === "modal-background") {
      closeModal();
    }
  };

  return (
    <div
      id="modal-background"
      className={`fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center p-4 transition-all duration-500 md:p-8 ${isVisible ? "backdrop-blur-xl" : ""}`}
      onClick={handleClickOutside}
    >
      <div
        className={`relative flex h-full max-h-[550px] w-full max-w-7xl transform flex-col items-center justify-center overflow-hidden rounded-lg bg-[#e1e7e7]/60 shadow-xl backdrop-blur-xl transition-all duration-500 md:max-h-[650px] md:flex-col md:justify-between md:p-4 lg:max-w-7xl lg:flex-row lg:p-9 dark:bg-[#111a2a]/80 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <button onClick={closeModal} className="absolute right-2 top-2 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path
              d="M7.719 6.281 6.28 7.72 23.563 25 6.28 42.281l1.44 1.439L25 26.438l17.281 17.28 1.438-1.437L26.438 25l17.28-17.281-1.437-1.438L25 23.563Z"
              stroke="currentColor"
              fill="currentColor"
            />
          </svg>
        </button>
        <div className="flex h-full w-full flex-col justify-center p-4 md:h-1/2 lg:h-full lg:w-2/6 lg:p-0 lg:pr-6 xl:pr-12">
          <h4 className="mb-4 text-2xl font-bold">{project.heading}</h4>
          <p className="mb-4 xl:leading-8">{project.content}</p>
          <div className="inline text-right">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                className="underline opacity-60 transition-opacity duration-300 hover:opacity-100"
              >
                Voir sur GitHub
              </a>
            )}
          </div>
        </div>
        <div className="image-container hidden h-4/6 w-full overflow-hidden md:flex md:h-1/2 md:rounded-lg lg:h-full lg:w-4/6">
          <Image
            width={"100%"}
            src={project.image}
            alt={`Projet ${project.id} ${project.heading}`}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  project: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
