import Masonry from "react-masonry-css";

import NewModal from "./Modal";

import "./Main.css";

export default function Main({ currentCollection, quoteList }) {
  let showCollection = (currentCollection) => {
    let content = [];
    currentCollection.map((item, index) =>
      content.push(
        <div key={index}>
          <NewModal itemData={item} quoteList={quoteList} />
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
