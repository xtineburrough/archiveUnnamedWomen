import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";

import Main from "./components/Main";

function App() {
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
