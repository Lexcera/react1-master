import { Link } from "react-router-dom";
import { useState, useContext } from "react";

// Assets
import "./Header.css";
import Logo from "../../assets/dnc-logo-2.svg";

// components
import Button from "../button/Button";

// context
import { AppContext } from "../contexts/AppContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const appContext = useContext(AppContext);
  return (
    <header>
      <div className="container">
        <div className="al-center d-flex jc-space-between">
          <Link to="/">
            <img src={Logo} />
          </Link>
          <div className="mobile-menu">
            <Button buttonStyle="secondary" onClick={toggleMenu}>
              Menu
            </Button>
          </div>
          <nav className={`${isOpen ? "open" : ""}`}>
            <Button
              buttonStyle="Unstyled"
              className="mobile-menu close-btn"
              onClick={toggleMenu}
            >
              x
            </Button>
            <ul className="d-flex">
              <li>
                <Link to="/">
                  {appContext.languages[appContext.language].menu.home}
                </Link>
              </li>
              <li>
                <Link to="/about">
                  {appContext.languages[appContext.language].menu.about}
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  {appContext.languages[appContext.language].menu.projects}
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  {appContext.languages[appContext.language].menu.contact}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
