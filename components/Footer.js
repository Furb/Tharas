import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-darkest pt-32 desktop:pt-56 p_space">
      <div className="container mx-auto space-x-24 desktop:space-x-48 flex justify-center tablet:justify-end tablet:pr-44 desktop:pr-72">
        <div className="contact">
          <h4 className="mb-8">Hello</h4>
          <Link href="#">
            <a className="hover:text-lightBlue trans">jesper@tharas.dk</a>
          </Link>
        </div>
        <div className="connect">
          <h4 className="mb-8">Connect</h4>

          <div className="flex flex-col">
            <Link href="#">
              <a className="hover:text-lightBlue trans">LinkedIn</a>
            </Link>
            <Link href="#">
              <a className="hover:text-lightBlue trans">Behance</a>
            </Link>
            <Link href="#">
              <a className="hover:text-lightBlue trans">Dribbble</a>
            </Link>
            <Link href="#">
              <a className="hover:text-lightBlue trans">Instagram</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
