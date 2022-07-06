import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Grid } from "@mui/material";
import { data } from "./Collections/BasicData";
import { quoteData } from "./Quote";

import "./NewModal.css";

export default function NewModal({ itemData }) {
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
    setQuote(quoteData[Math.floor(Math.random() * quoteData.length)].quote);
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

  let linkData = data.map((women) => <p>{women.imageLink}</p>);

  return (
    <div className="img-hover-zoomNO">
      <img
        className="masonryImage"
        onClick={() => handleOpen(itemData)}
        src={`${itemData.imageLink}`}
        srcSet={`${itemData.imageLink}`}
        backgroundimage={itemData.imageLink}
        alt={"test"}
        loading="lazy"
        style={{
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          display: "block",
          width: "100%",
        }}
      ></img>

      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="hello"
      >
        <Box className="modal">
          {/* <button className="boxButton" onClick={() => handleClose(itemData)}>
            X
          </button> */}
          {/* <div className="image imageContainer ">
            <img
              className="img"
              src={imageLink}
              srcSet={imageLink}
              alt={"img"}
              loading="lazy"
            />
            <div className="imageText"></div>
          </div> */}
          <div className="card">
            <img
              src={imageLink}
              // style={{
              //   height: "100%",
              // }}
            />
            <div className="bottom-left">{quote}</div>
            {/* <div className="container">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div> */}
          </div>
          <div className="atextcontainer aimage aimageContainer">
            {/* <div
              className="actImg"
              style={{ backgroundImage: "url(" + imageLink + ")" }}
              alt={"img"}
              loading="lazy"
            /> */}

            {/* <img
              className="actImg"
              src={imageLink}
              srcSet={imageLink}
              alt={"img"}
              loading="lazy"
            /> */}
          </div>
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
              {" "}
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
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
