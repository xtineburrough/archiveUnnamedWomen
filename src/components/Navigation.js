import "./styles/Navigation.css";

export default function Navigation({ listOfCollections, changeCollection }) {
  return (
    <nav>
      <div id="logo" onClick={() => changeCollection("Home")}>
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
                <a onClick={() => changeCollection(collectionName)}>
                  {collectionName}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}
