import { useState } from "react";

// Import App's CSS
import "./App.css";
// Import Navigation Component
import Navigation from "./components/Navigation";
// Import Main Component
import Main from "./components/Main";
//Import About Component
import Home from "./components/Home";

// Importing Data under the name "BasicData"
import { data as BasicData } from "./components/Collections/BasicData";
import { data as LOCLomax } from "./components/Collections/LOC-lomac";

// Quote Data
import { quoteData as BasicQuote } from "./components/Quotes/BasicQuote";
import { quoteData as LomaxQuote } from "./components/Quotes/LomaxQuote";

// THIS IS WHERE THE "important stuff" STARTS
// Navigation is Loaded from here
// Main is loaded from here

// Everything works as "components" think of them as "puzzle pieces" you can add and remove

function App() {
  // We insert the Navigation and Main Components

  // Make sure the name matches! Had to use an array because Array keeps order while objects does not
  // saving this for when Lomax is ready  const listOfCollections = ["NYPL Edition", "LOC Lomax Edition"];
  const listOfCollections = ["NYPL Edition"];

  const collection = {
    "NYPL Edition": {
      data: BasicData,
      quoteData: BasicQuote,
      idName: "NYPL",
      artistType: "Photographer",
    },
    //PUT THIS BACK WHEN YOU ARE READY FOR LOMAX QUOTES
    // "LOC Lomax Edition": {
    //   data: LOCLomax,
    //   quoteData: LomaxQuote,
    //   idName: "LOC Control #",
    //   artistType: "Artist",
    // },
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
  const [currentCollection, setCurrentCollection] = useState("Home");
  const [collectionName, setCollectionName] = useState("Home");
  const [quoteList, setQuoteList] = useState(BasicQuote);
  const [currentIdName, setCurrentIdName] = useState("ID");
  const [currentArtistType, setCurrentArtistType] = useState("Artist");

  const [count, setCount] = useState(5);

  var changeCollection = (collectionName) => {
    if (collectionName == "Home") {
      setCurrentCollection("Home");
      setCollectionName("Home");

      return;
    }
    if (collection[collectionName]) {
      setCollectionName(collectionName);

      setCurrentCollection(collection[collectionName].data);
      setCurrentIdName(collection[collectionName].idName);
      setCurrentArtistType(collection[collectionName].artistType);
      setQuoteList(collection[collectionName].quoteData);
    } else {
      // Collection does not exist, set a default collection to show
      setCurrentCollection(BasicData);
      setCurrentIdName("ID");
      setCurrentArtistType("Artist");
      // Quote does not exist, set a default quote list to show
      setQuoteList(BasicQuote);
    }
  };
  return (
    <div>
      <div className="mobile">
        <h1> Archive for Unnamed Women is a desktop experience</h1>
      </div>
      <Navigation
        className="noPrint"
        listOfCollections={listOfCollections}
        changeCollection={changeCollection}
      />
      <div className="marginUp"></div>
      <div className="App noPrint">
        {currentCollection == "Home" ? (
          <Home />
        ) : (
          <Main
            currentCollection={currentCollection}
            collectionName={collectionName}
            quoteList={quoteList}
            setCount={setCount}
            count={count}
            idName={currentIdName}
            currentArtistType={currentArtistType}
          />
        )}
      </div>
    </div>
  );
}

export default App;
