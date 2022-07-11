import "./styles/Navigation.css";

export default function Navigation({ listOfCollections, changeCollection }) {
  return (
    <nav>
      <div id="logo">
        {" "}
        An Archive of <span style={{ color: "white" }}>Unnamed</span> Women
      </div>

      <label htmlFor="drop" className="toggle">
        Menu
      </label>
      <input type="checkbox" id="drop" />
      <ul className="menu">
        <li>
          <a onClick={() => changeCollection("Home")}>Home</a>
        </li>
        <li>
          <label htmlFor="drop-1" className="toggle">
            All Collections +
          </label>
          <a>All Collections</a>
          <input type="checkbox" id="drop-1" />
          <ul>
            {listOfCollections.map((collectionName, idx) => (
              <li key={idx}>
                <a href="#" onClick={() => changeCollection(collectionName)}>
                  {collectionName}
                </a>
              </li>
            ))}
            {/* <li>
              <a href="#">Collection #1</a>
            </li>
            <li>
              <a href="#">Collection #2</a>
            </li>
            <li>
              <a href="#">Collection #3</a>
            </li> */}
          </ul>
        </li>
        {/* <li>
          <label htmlFor="drop-2" className="toggle">
            Web Design +
          </label>
          <a href="#">Web Design</a>
        </li> */}
      </ul>
    </nav>
  );
}
