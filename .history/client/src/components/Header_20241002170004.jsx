import '../../src/output.css'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <header className="header-area bg-red-500">
      <div className="container mx-auto px-4 py-4">
        <div className="row">
          <div className="col">
            <nav className="main-nav">
            <Link to='/' />

            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
