import "../../src/output.css";

const Header = () => {
  return (
    <header className="header-area bg-red-500">
      <div className="container mx-auto px-4 py-6">
        <div className="row">
          <div className="col">
            <nav className="main-nav">
              <div className="flex">
                <div className="flex-1 grow  ">Logo</div>
                <div className="flex-1  grow ">
                <ul className="menu flex gap-x-8">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Property Details</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                </div>
                <div className="flex-1 grow-0 ">Login</div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
