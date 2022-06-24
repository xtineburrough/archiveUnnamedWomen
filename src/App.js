import { useState } from "react";

// Import App's CSS
import "./App.css";
// Import Navigation Component
import Navigation from "./components/Navigation";
// Import Main Component
import Main from "./components/Main";

// Importing Data under the name "BasicData"
import { data as BasicData } from "./components/Collections/BasicData";
import { data as FoodData } from "./components/Collections/FoodData";
import { data as CarData } from "./components/Collections/CarData";

// THIS IS WHERE THE "important stuff" STARTS
// Navigation is Loaded from here
// Main is loaded from here

// Everything works as "components" think of them as "puzzle pieces" you can add and remove

function App() {
  // We insert the Navigation and Main Components

  // Make sure the name matches! Had to use an array because Array keeps order while objects does not
  const listOfCollections = [
    "Basic Collection",
    "Food Collection",
    "Car Collection",
  ];

  const collection = {
    "Food Collection": { data: FoodData },
    "Basic Collection": { data: BasicData },
    "Car Collection": { data: CarData },
  };
  listOfCollections.map((collectionName) => {
    if (!collection[collectionName]) {
      console.error(
        "listOfCollections and collection variable data does not match"
      );
    }
  });
  // This is "React Hook" called "useState"
  // currentCollection = current VALUE stored, NEVER CHANGE THIS VALUE DIRECTLY
  // setCurrentCollection = function to change "currentCollection"
  // useState("Basic") = setting the default value
  const [currentCollection, setCurrentCollection] = useState(BasicData);

  var changeCollection = (collectionName) => {
    if (collection[collectionName]) {
      setCurrentCollection(collection[collectionName].data);
    } else {
      // Collection does not exist, set a default collection to show
      setCurrentCollection(BasicData);
    }
  };
  return (
    <div>
      <Navigation
        listOfCollections={listOfCollections}
        changeCollection={changeCollection}
      />
      <div className="App">
        <Main currentCollection={currentCollection} />
      </div>
    </div>
  );
}

export default App;
