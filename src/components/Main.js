import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import BasicModal from "./BasicModal";
import NewModal from "./NewModal";

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

export default function Main({ currentCollection }) {
  // Masonry is a component from the MaterialUI Library
  return (
    <>
      <Masonry columns={{ xs: 2, sm: 4 }} spacing={0} className="test">
        {currentCollection.map((item, index) => (
          <div key={index}>
            <NewModal itemData={item} />
          </div>
        ))}
      </Masonry>
    </>
  );
}
