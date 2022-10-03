import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="big_container">
        <div className="flex justify-between items-center h-[10vh]">
          <div className="logo text-lg font-bold tracking-widest text-lightYellow">
            <Link href="/" className="cursor-pointer">
              ThaRas
            </Link>
          </div>
          <nav className="hidden desktop:flex">
            <Link href="/stories">
              <a className="link">
                <h4>Stories</h4>
              </a>
            </Link>
            <Link href="/projects">
              <a className="link">
                <h4>Projects</h4>
              </a>
            </Link>

            <Link href="/tharassen">
              <a className="link">
                <h4>#tharassen</h4>
              </a>
            </Link>
            <Link href="/contact">
              <a className="link">
                <h4>Get in touch</h4>
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
