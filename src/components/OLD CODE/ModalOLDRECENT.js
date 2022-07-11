import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Grid } from "@mui/material";

import "./styles/Modal.css";

export default function NewModal({ itemData, quoteList }) {
  // States
  const [open, setOpen] = useState(false);
  const [imageLink, setImageLink] = useState(
    "https://images.nypl.org/index.php?id=1206642&t=w"
  );
  const [description, setDescription] = useState("N/A");
  const [location, setLocation] = useState("N/A");
  const [photographer, setPhotographer] = useState("N/A");
  const [year, setYear] = useState("N/A");
  const [NYPL, setNYPL] = useState("N/A");
  const [quote, setQuote] = useState("");

  const changeQuote = () => {
    setQuote(quoteList[Math.floor(Math.random() * quoteList.length)].quote);
  };

  const handleOpen = (itemData) => {
    setOpen(true);
    setImageLink(itemData.imageLink);
    setDescription(itemData.description);
    setPhotographer(itemData.photographer);
    setNYPL(itemData.nypl);
    setYear(itemData.year);
    changeQuote();
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <img
        className="masonryImage"
        onClick={() => handleOpen(itemData)}
        src={`${itemData.imageLink}`}
        srcSet={`${itemData.imageLink}`}
        backgroundimage={itemData.imageLink}
        alt={"test"}
        loading=""
        style={{
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          display: "block",
          width: "100%",
        }}
      ></img>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="hello"
      >
        <Box className="modal">
          <div className="card">
            <img src={imageLink} />
            <div className="bottom-left">{quote}</div>
          </div>
          <div></div>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <div className="item">
                <p className="item__desc--title">DESCRIPTION</p>
                <p className="item__desc">{description}</p>
              </div>
            </Grid>

            <Grid item xs={3} md={3}>
              <div className="item">
                <p className="item__desc--title">LOCATION</p>
                <p className="item__desc">Dallas, TX</p>
              </div>
            </Grid>
            <Grid item xs={3} md={3}>
              <div className="item">
                <p className="item__desc--title">PHOTOGRAPHER</p>
                <p className="item__desc">{photographer}</p>
              </div>
            </Grid>
            <Grid item xs={3} md={3}>
              <div className="item">
                <p className="item__desc--title right">YEAR</p>
                <p className="item__desc right">{year}</p>
              </div>
            </Grid>
            <Grid item xs={3} md={3}>
              <div className="item">
                <p className="item__desc--title right">NYPL</p>
                <p className="item__desc right">{NYPL}</p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <button className="button" onClick={() => changeQuote()}>
                Change Quote
              </button>
            </Grid>
            <Grid item xs={6}>
              <a
                href="https://www.google.com/"
                target="_blank"
                className="button"
              >
                Identify
              </a>
            </Grid>
            <Grid item xs={12}>
              <button className="button close" onClick={() => handleClose()}>
                Close
              </button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
