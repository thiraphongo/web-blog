import "../../src/output.css";

const Header = () => {
  return (
    <header className="header-area bg-red-500">
      <div className="container mx-auto px-4 py-4">
        <div className="row">
          <div className="col">
            <nav className="main-nav">
              <div className="flex">
                <div className="flex-1 grow  ">01</div>
                <div className="flex-1  grow ">02</div>
                <div className="flex-1 grow-0 ">03</div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
