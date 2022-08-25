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
            <Link href="/projects">
              <a>Projects</a>
            </Link>

            <Link href="/stories">
              <a>Stories</a>
            </Link>
            <Link href="/oddity">
              <a>#oddity</a>
            </Link>
            <Link href="/contact">
              <a>Get in touch</a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
