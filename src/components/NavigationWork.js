import "./Navigation.css";

import BasicSelect from "./BasicSelect";

export default function Navigation() {
  return (
    <nav>
      <a className="links" href="#">
        HOME
      </a>
      <a className="links" href="#">
        EMPLOYEES
      </a>
      <a className="links" href="#">
        CAREER
      </a>
      <div className="dropdown-menu">
        <button className="menu-btn">Open </button>
        <div className="menu-content">
          <a className="links-hidden" href="#">
            Contact Us
          </a>
          <a className="links-hidden" href="#">
            Visit Us
          </a>
          <a className="links-hidden" href="#">
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
}
