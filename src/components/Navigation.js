import "./Navigation.css";

export default function Navigation() {
  return (
    <nav>
      <div id="logo">
        {" "}
        An Archive of <span style={{ color: "white" }}>Unnamed</span> Women
      </div>

      <label for="drop" class="toggle">
        Menu
      </label>
      <input type="checkbox" id="drop" />
      <ul class="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <label for="drop-1" class="toggle">
            All Collections +
          </label>
          <a href="#">All Collections</a>
          <input type="checkbox" id="drop-1" />
          <ul>
            <li>
              <a href="#">Collection #1</a>
            </li>
            <li>
              <a href="#">Collection #2</a>
            </li>
            <li>
              <a href="#">Collection #3</a>
            </li>
          </ul>
        </li>
        {/* <li>
          <label for="drop-2" class="toggle">
            Web Design +
          </label>
          <a href="#">Web Design</a>
        </li> */}
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
}
