import { useContext } from "react";
import { Link } from "react-router-dom";

// Assets
import "./Footer.css";
import Logo from "../../assets/dnc-logo-2.svg";
import BrazilIcon from "../../assets/BrasilIcon.svg";
import UsaIcon from "../../assets/USAIcon.svg";
import FacebookIcon from "../../assets/facebookIcon.svg";
import LinkedinIcon from "../../assets/linkedinIcon.svg";
import InstagramIcon from "../../assets/instaIcon.svg";
import TwitterIcon from "../../assets/twitterIcon.svg";
import Button from "../button/Button";

// context
import { AppContext } from "../contexts/AppContext";

function Footer() {
  const appContext = useContext(AppContext);
  const changeLanguage = (country) => {
    appContext.setLanguage(country);
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="d-flex jc-space-between mobile-fd-column">
          <div className="footer-logo-col">
            <img src={Logo} className="footer-logo" alt="Logo DNC" />
            <p className="gray-1-color">
              {appContext.languages[appContext.language].general.footerLogoText}
            </p>
            <div className="d-flex social-links">
              <a href="#" target="_blank" rel="noreferrer">
                <img src={FacebookIcon} alt="Facebook" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img src={InstagramIcon} alt="Instagram" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img src={LinkedinIcon} alt="LinkedIn" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img src={TwitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>

          <div className="d-flex mobile-fd-column">
            <div className="footer-col">
              <h3>{appContext.languages[appContext.language].general.pages}</h3>
              <ul>
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
            </div>

            <div className="footer-col">
              <h3>{appContext.languages[appContext.language].menu.contact}</h3>
              <p className="gray-1-color">
                R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP
                12243-030
              </p>
              <p className="gray-1-color">suporte@escoladnc.com.br</p>
              <p className="gray-1-color">(19) 99187-4342</p>
            </div>
          </div>
        </div>

        <div className="d-flex jc-space-between footer-copy">
          <p className="gray-1-color">Copyright DNC - 2024</p>
          <div className="langs-area d-flex">
            <Button buttonStyle="unstyled" onClick={() => changeLanguage("br")}>
              <img src={BrazilIcon} height="29px" alt="Português - Brasil" />
            </Button>
            <Button buttonStyle="unstyled" onClick={() => changeLanguage("en")}>
              <img src={UsaIcon} height="29px" alt="English - USA" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
