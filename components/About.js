import Image from "next/image";

const About = () => {
  return (
    <section className="about">
      <div className="big_container desktop:my-44">
        <h2 className="text-light font-extralight mb-32">
          This is my personal digital space. The serious bits are mainly about
          UI- design and development. Still, it's also a place to throw in other
          relateable stuff with no apparent significanse other than the fun of
          it. Could be poster compositions, branding items, or the odd blog
          post. Stuff like that.
        </h2>
      </div>

      <div className="big_container desktop:flex">
        <div className="big_left">
          <h4>About</h4>
        </div>

        <div className="big_right">
          <p>
            So this is a bit touchy for me. I’ve never known which title to call
            myself when people ask what I do. Over the past 10 or so years. I’ve
            been mainly working self-employed in design. <br />
            <br />
            What I actually did was more jack of all trades. Branding, logo
            design, editorial design, webdesign, webmaster, web supporter, SEO
            helper, SEO workshopper, photoshopper, static web coder, wordpress
            theme developer. These subjects have all been part of my day to day.
            I would spin my “what do you do” pitch, in the more suitable
            direction depending on who I was addressing. <br />
            <br />
            It’s been fun for the most part, and I’ve gathered som great tools
            along the way. I’ve had some great wins and taking some beatings
            when out of my depth. These days I’m comfortably settled as calling
            myself a designer & UI developer. It covers my main areas of
            expertise.
            <br />
            <br />
            To answer the question "what do you do?". I design stuff, and then I
            code some of it.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 desktop:grid-cols-4 gap-4 items-center justify-center px-4 pt-44">
        <div className="relative w-full aspect-w-1 aspect-h-1">
          <Image
            src="https://images.unsplash.com/photo-1653851794739-5f4eab419938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            layout="fill"
            objectFit="cover"
            alt="Thabo Rasmussen"
          />
        </div>
        <div className="relative w-full aspect-w-1 aspect-h-1">
          <Image
            src="https://images.unsplash.com/photo-1579405317876-9340f1d26061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            layout="fill"
            objectFit="cover"
            alt="Thabo Rasmussen"
          />
        </div>
        <div className="relative w-full aspect-w-1 aspect-h-1">
          <Image
            src="https://images.unsplash.com/photo-1579405317876-9340f1d26061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            layout="fill"
            objectFit="cover"
            alt="Thabo Rasmussen"
          />
        </div>
        <div className="relative w-full aspect-w-1 aspect-h-1">
          <Image
            src="https://images.unsplash.com/photo-1579405317876-9340f1d26061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            layout="fill"
            objectFit="cover"
            alt="Thabo Rasmussen"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
