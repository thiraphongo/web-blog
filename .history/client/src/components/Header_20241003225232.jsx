import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // true
  };

  return (
    <nav className="px4">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
              <div className="logo">
                <img src="" />
              <div className="text-black text-4xl font-bold">Hurricane</div>

              </div>
          <ul className="hidden md:flex space-x-4">
            <li>
              <a href="/" className="text-black">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-black">
                About
              </a>
            </li>
            <li>
              <a href="/" className="text-black">
                Service
              </a>
            </li>
            <li>
              <a href="/" className="text-black">
                Contact
              </a>
            </li>
          </ul>

          {/* toggle menu */}
          <div className="md:hidden">
            <button
              id="menu-toggle"
              className="text-black"
              onClick={toggleMenu}
            >
              <FaBars />

            </button>
          </div>

          <div className="btn  flex items-center gap-x-2.5">Login <FiLogIn /></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen ? (
        <ul className="flex-col md:hidden px-4 py-4 bg-slate-100">
        <li>
          <a href="/" className="text-black">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="text-black">
            About
          </a>
        </li>
        <li>
          <a href="/" className="text-black">
            Service
          </a>
        </li>
        <li>
          <a href="/" className="text-black">
            Contact
          </a>
        </li>
      </ul>
      ): null
      }


    </nav>
  );
};

export default Header;
