import "./Navigation.css";

export default function Navigation() {
  return (
    <ul>
      <li>
        <a href="#">An Archive of Unnamed Women</a>
      </li>

      <li style={{ float: "right" }}>
        <a href="#contact">Contact</a>
      </li>
      <li style={{ float: "right" }}>
        <a className="active" href="#about">
          About
        </a>
      </li>
    </ul>
  );
}
