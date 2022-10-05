import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero h-[90vh] relative">
      <Image
        src="https://res.cloudinary.com/dahciljdo/image/upload/v1656062871/tharas/thabo-transparent_hxo8md.png"
        layout="fill"
        objectFit="contain"
        objectPosition="right top"
        alt="Thabo Rasmussen"
      />

      <div className="big_container absolute w-full bottom-[5vh]">
        <div className="container_left"></div>
        <div className="right container_right">
          <p>Designer & UI developer</p>
          <h1>Thabo Rasmussen</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
