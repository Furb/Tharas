import Image from "next/image";
import Link from "next/link";
import { FiArrowDownRight } from "react-icons/fi";

Image;

const Card = () => {
  return (
    <Link href="/projects/1">
      <figure className="group cursor-pointer">
        <div className="relative w-full aspect-w-5 aspect-h-4 mb-4">
          <Image
            src="https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            layout="fill"
            objectFit="cover"
            alt="Thabo Rasmussen"
            className="group-hover:opacity-50"
          />
        </div>

        <h3>
          <a className="text-white group-hover:text-lightYellow">
            Sollicitudin Ligula Porta{" "}
            <FiArrowDownRight className="h3 inline trans group-hover:rotate-45 group-hover:opacity-50 ml-8" />
          </a>
        </h3>
      </figure>
    </Link>
  );
};

export default Card;
