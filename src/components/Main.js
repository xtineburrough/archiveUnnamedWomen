import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import BasicModal from "./BasicModal";

// Importing Data under the name "BasicData"
import { data as BasicData } from "./Collections/BasicData";

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

export default function Main() {
  // This is "React Hook" called "useState"
  // currentCollection = current VALUE stored, NEVER CHANGE THIS VALUE DIRECTLY
  // setCurrentCollection = function to change "currentCollection"
  // useState("Basic") = setting the default value
  const [currentCollection, setCurrentCollection] = useState(BasicData);

  var changeCollection = (collectionName) => {
    if (collectionName == "Basic") {
      setCurrentCollection(BasicData);
    } else {
      // Collection does not exist, set a default collection to show
      setCurrentCollection(BasicData);
    }
  };

  // Masonry is a component from the MaterialUI Library
  return (
    <>
      <Masonry columns={{ xs: 2, sm: 4 }} spacing={0} className="test">
        {currentCollection.map((item, index) => (
          <div key={index}>
            <BasicModal itemData={item}></BasicModal>
          </div>
        ))}
      </Masonry>
    </>
  );
}
