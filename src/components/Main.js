import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import BasicModal from "./BasicModal";

import { data } from "./BasicData";

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
  return (
    <>
      <Masonry columns={{ xs: 2, sm: 4 }} spacing={0} className="test">
        {data.map((item, index) => (
          <div key={index}>
            <BasicModal itemData={item}></BasicModal>
          </div>
        ))}
        {data.map((item, index) => (
          <div key={index}>
            <BasicModal itemData={item}></BasicModal>
          </div>
        ))}
      </Masonry>
    </>
  );
}
