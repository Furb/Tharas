const Footer = () => {
  return (
    <footer className="bg-darkest pt-56 pb-44">
      <div className="container mx-auto space-x-24 desktop:space-x-48 flex justify-center tablet:justify-end tablet:pr-44 desktop:pr-72">
        <div className="contact">
          <h4 className="mb-8">Hello</h4>
          <a href="#">jesper@tharas.dk</a>
        </div>
        <div className="connect">
          <h4 className="mb-8">Connect</h4>

          <div className="flex flex-col">
            <a href="#">LinkedIn</a>
            <a href="#">Behance</a>
            <a href="#">Dribbble</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
