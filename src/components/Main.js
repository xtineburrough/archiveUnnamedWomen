import Masonry from "react-masonry-css";

import NewModal from "./NewModal";

import "./styles/Main.css";

export default function Main({ currentCollection, quoteList, collectionName }) {
  let showCollection = (currentCollection) => {
    let content = [];
    currentCollection.map((itemData, index) =>
      content.push(
        <div key={index}>
          <NewModal
            itemData={itemData}
            quoteList={quoteList}
            collectionName={collectionName}
          />
        </div>
      )
    );
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
