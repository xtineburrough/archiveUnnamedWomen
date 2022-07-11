import "./Navigation.css";

import BasicSelect from "./BasicSelect";

export default function Navigation() {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="#">
            An Archive of <span style={{ color: "white" }}>Unnamed</span> Women
          </a>
        </li>

        <li style={{ float: "right" }}>
          <div>
            <BasicSelect />
          </div>
        </li>
        <li style={{ float: "right" }}>
          <a className="active" href="#about">
            Home
          </a>
        </li>
      </ul>
    </div>
  );
}
