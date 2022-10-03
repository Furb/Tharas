import Link from "next/link";
import { FiArrowDownRight } from "react-icons/fi";

const ProjectCard = () => {
  return (
    <div className="desktop:flex justify-between items-center mb-24 group cursor-pointer">
      <div className="flex-1 desktop:mr-48 desktop:w-36">
        <img
          src="https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="mb-2 desktop:mb-0"
        />
      </div>
      <div className="desktop:w-32">
        <Link href="#">
          <h3>
            <a className="text-white group-hover:text-lightYellow">
              Sollicitudin Ligula Porta{" "}
              <FiArrowDownRight className="h3 inline trans group-hover:rotate-45 group-hover:opacity-50 ml-8" />
            </a>
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
