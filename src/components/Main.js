import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import BasicModal from "./BasicModal";
import NewModal from "./NewModal";
import useEffect from "react";

import "./Main.css";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function Main({
  currentCollection,
  setCount,
  count,
  renderCollection,
}) {
  // Masonry is a component from the MaterialUI Library
  // var showMore = () => {
  //   for (let i = 0; i < 10; i++) {
  //     text += cars[i] + "<br>";
  //   }
  // };
  let comp = (col) => {
    let content = [];
    console.log(count);
    for (let i = 0; i < count; i++) {
      if (col[i]) {
        content.push(
          <div key={i}>
            <NewModal itemData={col[i]} />
          </div>
        );
      }
    }

    console.log(content);

    return content;
  };
  return (
    <>
      <Masonry
        columns={{ xs: 2, sm: 4 }}
        spacing={0}
        style={{
          margin: 0,
          width: "100%",
        }}
      >
        {/* {currentCollection.map((item, index) => (
          <div key={index}>
            <NewModal itemData={item} />
          </div>
        ))} */}

        {comp(currentCollection)}
      </Masonry>
      <button className="showButton" onClick={() => setCount(count + 10)}>
        Show more
      </button>
    </>
  );
}
