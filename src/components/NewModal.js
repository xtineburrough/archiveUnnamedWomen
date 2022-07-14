import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Grid } from "@mui/material";

import "./styles/NewModal.css";

export default function NewModal({
  itemData,
  quoteList,
  collectionName,
  idName,
  currentArtistType,
}) {
  // States
  // quote is the name of the div id and class relating to styles and the text
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("N/A");
  const [location, setLocation] = useState("N/A");
  const [artist, setArtist] = useState("N/A");
  const [year, setYear] = useState("N/A");
  const [id, setId] = useState("N/A");
  const [quote, setQuote] = useState("");

  const changeQuote = () => {
    setQuote(quoteList[Math.floor(Math.random() * quoteList.length)].quote);
  };

  const handleOpen = (itemData) => {
    setOpen(true);
    setDescription(setBlank(itemData.description));
    setArtist(setBlank(itemData.artist));
    setLocation(setBlank(itemData.location));
    setId(setBlank(itemData.id));
    setYear(setBlank(itemData.year));
    changeQuote();
  };

  // Sets N/A
  const setBlank = (word) => {
    if (word == "") {
      return "N/A";
    }
    return word;
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <img
        className="masonryImage"
        onClick={() => handleOpen(itemData)}
        src={`./CollectionImages/${collectionName}/${itemData.id}.jpg`}
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
        className=""
      >
        <Box className="modal">
          <div className="modal-content">
            <div className="image-quote">
              <div className="modal-left">
                <img
                  id="modal-image"
                  src={`./CollectionImages/${collectionName}/${itemData.id}.jpg`}
                />
              </div>
              <div className="modal-right">
                <div id="quote-container" className="quote">
                  <h2 id="quote">{quote}</h2>
                </div>
              </div>

              <Grid
                onClick={changeQuote}
                className="pointer"
                container
                spacing={0}
                columnSpacing={{ xs: 0 }}
              >
                <Grid item xs={12}>
                  <div className="item">
                    <p className="item__desc--title">DESCRIPTION</p>
                    <p className="item__desc">
                      {description.split("<br/>").join("\n")}
                    </p>
                  </div>
                  <Grid
                    item
                    xs={12}
                    columnSpacing={{ xs: 0 }}
                    alignItems="flex-start"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        m: 0,
                        p: 0,
                        borderRadius: 1,
                        justifyContent: "flex-start",
                      }}
                    >
                      <div className="item">
                        <p className="item__desc--title left">LOCATION</p>
                        <p className="item__desc left">{location}</p>
                      </div>
                      <div className="item">
                        <p className="item__desc--title">{currentArtistType}</p>
                        <p className="item__desc">{artist}</p>
                      </div>
                      <div className="item">
                        <p className="item__desc--title ">YEAR</p>
                        <p className="item__desc right">{year}</p>
                      </div>
                      <div className="item">
                        <p className="item__desc--title ">{idName}</p>
                        <p className="item__desc right">{id}</p>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf-DY6IbATYtpLbiEGyKlLWlTRdJL9COXQfA0-BXGC1hYcHRw/viewform?pli=1"
                  target="_blank"
                  className="button"
                >
                  Identify
                </a>
              </Grid>
            </div>
          </div>
          <button id="x" onClick={() => handleClose()}>
            X
          </button>
        </Box>
      </Modal>
    </div>
  );
}
