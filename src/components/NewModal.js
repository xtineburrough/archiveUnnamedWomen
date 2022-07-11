import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Grid } from "@mui/material";

import "./styles/NewModal.css";

import "./styles/Print.css";

export default function NewModal({ itemData, quoteList, collectionName }) {
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
    console.log("changing");
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
        // src={`${itemData.imageLink}`}
        src={`./CollectionImages/${collectionName}/${itemData.nypl}.png`}
        // srcSet={`${itemData.imageLink}`}
        // backgroundimage={itemData.imageLink}
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
        className=""
      >
        <Box className="modal">
          <div className="auser-match-container modal-content">
            <div className="image-quote">
              <div className="modal-left">
                <img
                  id="modal-image"
                  src={`./CollectionImages/${collectionName}/${itemData.nypl}.png`}
                />
                {/* <p className="test123">
                  asdhlkashdlkashdlkahsdlkhasdasgjgjgjkgjlkgjdhlkashdlkashdlkahkahsdlkhasd
                </p> */}
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
                    <p className="item__desc">{description}</p>
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
                      <div className="item ">
                        <p className="item__desc--title left">LOCATION</p>
                        <p className="item__desc left">{location}</p>
                      </div>
                      <div className="item ">
                        <p className="item__desc--title">PHOTOGRAPHER</p>
                        <p className="item__desc">{photographer}</p>
                      </div>
                      <div className="item">
                        <p className="item__desc--title ">YEAR</p>
                        <p className="item__desc right">{year}</p>
                      </div>
                      <div className="item">
                        <p className="item__desc--title ">NYPL</p>
                        <p className="item__desc right">{NYPL}</p>
                      </div>
                    </Box>
                    {/* <div className="item">
                      <Grid item xs={6}>
                        <div className="item">
                          <p className="item__desc--title">LOCATION</p>
                          <p className="item__desc">Dallas, TX</p>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
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
                    </div> */}
                  </Grid>
                </Grid>

                {/* <Grid item xs={3} md={3} spacing={0}>
                  <div className="item">
                    <p className="item__desc--title">LOCATION</p>
                    <p className="item__desc">Dallas, TX</p>
                  </div>
                </Grid>
                <Grid item xs={3} md={3} spacing={0}>
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
                </Grid> */}
                {/* <Grid item xs={6}>
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
                  <button
                    className="button close"
                    onClick={() => handleClose()}
                  >
                    Close
                  </button>
                </Grid> */}
              </Grid>
              <Grid item xs={12}>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  className="button"
                >
                  Identify
                </a>
              </Grid>
              {/* <div id="info-section" className="info">
                <div className="description">
                  Sam am aamam aamam aamam aamam aamam aamam aamam aamam aamam
                  aamamm aamam aamam aamamamp
                </div>
                <div className="other-info">
                  Sample t, saample aample t, ample t, mple
                </div>
              </div>{" "} */}
              {/* <div className="bottomModal">
                <div id="quote-container" className="quote">
                  <h2 id="quote">
                    I like to look at one or two random quotes each morning. It
                    can be a good exercise for journaling prompts.
                  </h2>
                </div>
              </div> */}
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
