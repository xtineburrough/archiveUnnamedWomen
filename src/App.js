import { useState } from "react";

// Import App's CSS
import "./App.css";
// Import Navigation Component
import Navigation from "./components/Navigation";
// Import Main Component
import Main from "./components/Main";
//Import About Component
import About from "./components/About";

// Importing Data under the name "BasicData"
import { data as BasicData } from "./components/Collections/BasicData";
import { data as FoodData } from "./components/Collections/FoodData";
import { data as CarData } from "./components/Collections/CarData";
import { data as NEW_DATA_NAME } from "./components/Collections/NEW_DATA_NAME";

// Quote Data
import { quoteData as BasicQuote } from "./components/Quotes/BasicQuote";
import { quoteData as NewQuote } from "./components/Quotes/NewQuote";
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
    "New Collection Name",
  ];

  const collection = {
    "Food Collection": { data: FoodData, quoteData: BasicQuote },
    "Basic Collection": { data: BasicData, quoteData: BasicQuote },
    "Car Collection": { data: CarData, quoteData: BasicQuote },
    "New Collection Name": { data: NEW_DATA_NAME, quoteData: NewQuote },
  };
  // function to warn you if listOfCollections does not match collection
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
  // const [variableName, functionName to change variable] = useState(defaultValue)
  const [currentCollection, setCurrentCollection] = useState(BasicData);
  const [quoteList, setQuoteList] = useState(BasicQuote);

  const [count, setCount] = useState(5);

  var changeCollection = (collectionName) => {
    if (collectionName == "About") {
      setCurrentCollection("About");

      return;
    }
    if (collection[collectionName]) {
      setCurrentCollection(collection[collectionName].data);
    } else {
      // Collection does not exist, set a default collection to show
      setCurrentCollection(BasicData);
    }

    if (collection[collectionName]) {
      setQuoteList(collection[collectionName].quoteData);
    } else {
      // Quote does not exist, set a default quote list to show
      setQuoteList(BasicQuote);
    }
  };
  return (
    <div>
      <Navigation
        className="noPrint"
        listOfCollections={listOfCollections}
        changeCollection={changeCollection}
      />
      <div className="marginUp"></div>
      <div className="App noPrint">
        {currentCollection == "About" ? (
          <About />
        ) : (
          <Main
            currentCollection={currentCollection}
            quoteList={quoteList}
            setCount={setCount}
            count={count}
          />
        )}
      </div>
    </div>
  );
}

export default App;
