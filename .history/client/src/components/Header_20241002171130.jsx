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
                <ul className="menu flex gap-x-8">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="flex-1 grow-0 ">Login</div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
