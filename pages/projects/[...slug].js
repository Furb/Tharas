import Image from "next/image";

const projects = () => {
  return (
    <div className="projects px-4">
      <div className="flex flex-col min-h-[40vh] desktop:min-h-[80vh] bg-light mb-4 justify-end desktop:pb-24 pl-24">
        <h1 className="text-darkBlue hidden desktop:block">Title</h1>
      </div>
      <h1 className="text-white desktop:hidden">Title</h1>

      <div className="big_container mx-auto m_space grid grid-cols-6 gap-4">
        <div className="box flex justify-center items-center min-h-[50vh] col-span-6 py-48">
          <h2 className="text-light font-extralight">
            Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo
            risus, porta ac consectetur ac,s vestibulum at eros. Donec id elit
            non mi porta gravida at eget metus. Donec ullamcorper nulla non
            metus auctor fringilla. Sed posuere consectetur est at lobortis.
            elit.
          </h2>
        </div>
        <div className="box min-h-[50vh] bg-lightYellow col-span-3 text-darkBlue">
          <div className="relative w-full aspect-w-1 aspect-h-1">
            <Image
              src="https://images.unsplash.com/photo-1594808985790-98a065b97476?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80"
              layout="fill"
              objectFit="cover"
              alt="Thabo Rasmussen"
            />
          </div>
        </div>
        <div className="box min-h-[50vh] col-span-3 bg-white text-darkBlue">
          <div className="relative w-full aspect-w-1 aspect-h-1">
            <Image
              src="https://images.unsplash.com/photo-1508161773455-3ada8ed2bbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
              layout="fill"
              objectFit="cover"
              alt="Thabo Rasmussen"
            />
          </div>
        </div>
        <div className="box min-h-[50vh] bg-white col-span-6 text-darkBlue">
          <div className="relative w-full aspect-w-2 aspect-h-1">
            <Image
              src="https://images.unsplash.com/photo-1582275902060-7a4368e84acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              layout="fill"
              objectFit="cover"
              alt="Thabo Rasmussen"
            />
          </div>
        </div>
        <div className="box min-h-[50vh] bg-white col-span-3 text-darkBlue">
          <div className="relative w-full aspect-w-1 aspect-h-1">
            <Image
              src="https://images.unsplash.com/photo-1604161546853-1a097fbc30fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80"
              layout="fill"
              objectFit="cover"
              alt="Thabo Rasmussen"
            />
          </div>
        </div>
        <div className="box flex flex-col items-center justify-center py-24 min-h-[50vh] bg-white text-darkBlue col-span-3">
          <ul>
            <li>
              <h4 className="text-darkBlue">- Wireframe</h4>
            </li>
            <li>
              <h4 className="text-darkBlue">- UI in Figma</h4>
            </li>

            <li>
              <h4 className="text-darkBlue">- Next.js</h4>
            </li>
            <li>
              <h4 className="text-darkBlue">- Tailwind CSS</h4>
            </li>
            <li>
              <h4 className="text-darkBlue">- Graph CMS</h4>
            </li>
          </ul>
        </div>
        <div className="box min-h-[50vh] bg-white col-span-6 text-darkBlue">
          <div className="relative w-full aspect-w-2 aspect-h-1">
            <Image
              src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              layout="fill"
              objectFit="cover"
              alt="Thabo Rasmussen"
            />
          </div>
        </div>
        <div className="box min-h-[30vh] bg-white col-span-2 text-darkBlue">
          <div className="relative w-full aspect-w-1 aspect-h-1">
            <Image
              src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
              layout="fill"
              objectFit="cover"
              alt="Thabo Rasmussen"
            />
          </div>
        </div>
        <div className="box min-h-[30vh] bg-white col-span-2 text-darkBlue">
          <div className="relative w-full aspect-w-1 aspect-h-1">
            <Image
              src="https://images.unsplash.com/photo-1617727553252-65863c156eb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              layout="fill"
              objectFit="cover"
              alt="Thabo Rasmussen"
            />
          </div>
        </div>
        <div className="box min-h-[30vh] bg-white col-span-2 text-darkBlue">
          <div className="relative w-full aspect-w-1 aspect-h-1">
            <Image
              src="https://images.unsplash.com/photo-1555596899-d634257b55bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              layout="fill"
              objectFit="cover"
              alt="Thabo Rasmussen"
            />
          </div>
        </div>
        <div className="box min-h-[50vh] bg-white col-span-6 text-darkBlue">
          <div className="relative w-full aspect-w-2 aspect-h-1">
            <Image
              src="https://images.unsplash.com/photo-1605859465655-84c45e14a0af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              layout="fill"
              objectFit="cover"
              alt="Thabo Rasmussen"
            />
          </div>
        </div>
      </div>
      <div className="min-h-[80vh] bg-white mb-4 pt-24">
        <p className="text-darkBlue">Title</p>
        <div className="big_container mx-auto">
          <h1>Hollo</h1>
        </div>
      </div>

      <div className="min-h-[80vh] bg-light mb-4 pt-24 pl-24">
        <p className="text-darkBlue">Title</p>
      </div>
    </div>
  );
};

export default projects;
