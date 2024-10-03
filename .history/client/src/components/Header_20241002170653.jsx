import "../../src/output.css";

const Header = () => {
  return (
    <header className="header-area bg-red-500">
      <div className="container mx-auto px-4 py-4">
        <div className="row">
          <div className="col">
            <nav className="main-nav">
              <div className="flex">
                <div className="flex-none w-14 ">01</div>
                <div className="flex-1 w-64 grow">02</div>
                <div className="flex-1 w-32 ">03</div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
