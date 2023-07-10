import { Link } from "react-router-dom";
import StyledLayout, { StyledHeader } from "./styles";
import avatar from "../assets/avatar.jpg";

interface LayoutProps {
  isPageIndex?: boolean;
  children?: React.ReactNode;
}

const navOptions = [
  {
    name: "About Me.",
    path: "/about",
  },
  {
    name: "Projects.",
    path: "/projects",
  },
  {
    name: "Availability.",
    path: "/availability",
  },
];

const Layout: React.FC<LayoutProps> = ({ children, isPageIndex = true }) => {
  return (
    <StyledLayout className="layout">
      <StyledHeader className="header">
        <div className="header__left">
          <Link to="/" className="header__logo">
            Jeffrey Leung
            <span className="header__title">frontend developer</span>
          </Link>

          <div
            className="header__avatar"
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
        </div>
        <nav className="header__nav">
          <ul className="header__nav__list">
            {navOptions.map((option) => (
              <li className="header__nav__item" key={option.path}>
                <Link className="header__nav__link" to={option.path}>
                  {option.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </StyledHeader>
      {children}
    </StyledLayout>
  );
};

export default Layout;
