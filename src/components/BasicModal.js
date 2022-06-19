import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Grid } from "@mui/material";
import { data } from "./BasicData";
import { quoteData } from "./Quote";

import "./BasicModal.css";

export default function BasicModal({ itemData }) {
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

  const handleOpen = (itemData) => {
    setOpen(true);
    setImageLink(itemData.imgLink);
    setDescription(itemData.description);
    setPhotographer(itemData.photographer);
    setNYPL(itemData.nypl);
    setYear(itemData.year);
    setQuote(quoteData[Math.floor(Math.random() * quoteData.length)].quote);
  };
  const handleClose = () => setOpen(false);

  let linkData = data.map((women) => <p>{women.imgLink}</p>);

  return (
    <div className="img-hover-zoomNO">
      <img
        className="masonryImage"
        onClick={() => handleOpen(itemData)}
        src={`${itemData.imgLink}`}
        srcSet={`${itemData.imgLink}`}
        backgroundimage={itemData.imgLink}
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

          <div class="textcontainer image imageContainer img-hover-zoomNO">
            <img
              className="img"
              src={imageLink}
              srcSet={imageLink}
              alt={"img"}
              loading="lazy"
            />
          </div>

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <div className="item">
                <p className="quote">{quote}</p>
              </div>
            </Grid>
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
