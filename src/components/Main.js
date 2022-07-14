import Masonry from "react-masonry-css";

import NewModal from "./NewModal";
import "./styles/Print.css";
import "./styles/Main.css";

export default function Main({
  currentCollection,
  quoteList,
  collectionName,
  idName,
  currentArtistType,
}) {
  let showCollection = (currentCollection) => {
    if (currentCollection == "Home") {
      console.log("RETRNUNG TO HOME");
      return;
    }
    const colCopy = [...currentCollection];
    let content = [];

    for (let i = 0; i < currentCollection.length; i++) {
      const randomNum = Math.floor(Math.random() * colCopy.length);
      const itemData = colCopy[randomNum];
      colCopy.splice(randomNum, 1);
      content.push(
        <div key={itemData.id}>
          <NewModal
            className="modalPrint"
            itemData={itemData}
            quoteList={quoteList}
            collectionName={collectionName}
            idName={idName}
            currentArtistType={currentArtistType}
          />
        </div>
      );
    }

    return content;
  };

  return (
    <>
      <Masonry
        breakpointCols={{
          default: 4,
          1100: 3,
          700: 2,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        style={{
          margin: 0,
          width: "100%",
        }}
      >
        {showCollection(currentCollection)}
      </Masonry>
    </>
  );
}
