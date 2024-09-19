import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Modal = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleClickOutside = (e) => {
    if (e.target.id === "modal-background") {
      setIsVisible(false);
      setTimeout(onClose, 500);
    }
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsVisible(false);
        setTimeout(onClose, 500);
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div
      id="modal-background"
      className={`fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center p-4 transition-all duration-500 md:p-8 ${isVisible ? "backdrop-blur-2xl" : "bg-black/0"}`}
      onClick={handleClickOutside}
    >
      <div
        className={`relative flex h-full max-h-[800px] w-full max-w-7xl transform flex-col items-center justify-center overflow-hidden rounded-lg shadow-xl backdrop-blur-xl transition-all duration-500 md:flex-col lg:flex-row ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 500);
          }}
          className="absolute right-2 top-2 z-10 text-gray-500 hover:text-gray-800"
        >
          X
        </button>
        <div className="flex h-auto w-full flex-col justify-center overflow-scroll bg-white/40 p-4 md:h-2/6 lg:h-full lg:w-2/6 xl:p-12">
          <h4 className="mb-4 text-2xl font-bold">{project.heading}</h4>
          <p className="mb-4 xl:leading-8">{project.content}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="text-right underline"
            >
              Voir le projet
            </a>
          )}
        </div>
        <div className="relative hidden h-4/6 w-full overflow-scroll md:flex lg:h-full lg:w-4/6">
          <img
            src={project.image}
            alt={`Projet ` + project.id}
            loading="lazy"
            className="absolute left-0 top-0 object-cover"
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

const CardProject = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="group col-span-6 row-span-2 flex cursor-pointer flex-col items-center overflow-hidden rounded-lg bg-white/20 opacity-80 shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:opacity-100 lg:col-span-3"
        onClick={handleOpenModal}
      >
        <div className="h-3/4 w-full overflow-hidden rounded-t-lg object-cover">
          <img
            src={project.image}
            alt={`Projet ` + project.id}
            loading="lazy"
            className="max-w-full object-cover object-top transition-all duration-500 group-hover:scale-105"
          />
        </div>
        <h4 className="p-4 font-bold">{project.heading}</h4>
      </div>

      {isModalOpen && <Modal project={project} onClose={handleCloseModal} />}
    </>
  );
};

CardProject.propTypes = {
  project: PropTypes.object.isRequired,
};

export default CardProject;
