// Import App's CSS
import "./App.css";
// Import Navigation Component
import Navigation from "./components/Navigation";
// Import Main Component
import Main from "./components/Main";

// THIS IS WHERE THE "important stuff" STARTS
// Navigation is Loaded from here
// Main is loaded from here

// Everything works as "components" think of them as "puzzle pieces" you can add and remove

function App() {
  // We insert the Navigation and Main Components
  return (
    <div>
      <Navigation />
      <div className="App">
        <Main />
      </div>
    </div>
  );
}

export default App;
