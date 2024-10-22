import { Image } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "./Modal";

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
        className="group col-span-8 row-span-2 flex cursor-pointer flex-col items-center overflow-hidden rounded-lg bg-white/20 shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 lg:col-span-4 dark:bg-black/20"
        onClick={handleOpenModal}
      >
        <div className="card-project-image h-3/4 w-full overflow-hidden rounded-t-lg object-cover">
          <Image
            preview={false}
            width={"100%"}
            src={project.image}
            alt={`Projet ` + project.id}
            loading="lazy"
            className="object-cover object-top transition-all duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col items-center justify-between p-4">
          <h4 className="mb-4 h-1/4 text-center text-base font-bold sm:text-xl">
            {project.heading}
          </h4>
          <div className="flex items-center justify-center gap-4 text-sm sm:text-base">
            {project.tags.map((tag, i) => (
              <p key={project.heading + i}>{tag}</p>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && <Modal project={project} onClose={handleCloseModal} />}
    </>
  );
};

CardProject.propTypes = {
  project: PropTypes.object.isRequired,
};

export default CardProject;
