import { Link } from "react-router-dom";
import { routes } from "../../config/Router";

import "./Navbar.scss";

function Navbar(props) {
  return (
    <nav className="navbar">
      <span className="navbar__logo">MessLife</span>
      <div className="navbar__items-container">
        {routes.map((route) => {
          if (route.isHeader) {
            return (
              <span
                key={route.title}
                className={route.className ? route.className : ""}
              >
                <Link to={route.path}>{route.title}</Link>
              </span>
            );
          } else return null;
        })}
        <span
          onClick={props.onToggle}
          className="navbar__item navbar__item--login"
        >
          Login
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
