import React from "react";
import {
  Paper,
  Typography,
  Button,
  Grid
} from "@material-ui/core";
import {Add } from "@material-ui/icons";
import ListingDialog from "./ListingDialog";
import EmailDialog from "./EmailDialog";
import Racer from "./Racer";

const racers = [
  {
    name: "Trish",
    description:
      "New in town and run about a 7 minute mile. Willing to team up with another or a group!",
    isSingle: true
  },
  {
      name: "Mark and Alice",
      description:
      "Beer-drinking couple looking for 2 more for a Superteam",
      isSingle: false
  },
  {
    name: "Trish",
    description:
      "New in town and run about a 7 minute mile. Willing to team up with another or a group!",
    isSingle: true
  },
  {
    name: "Bob",
    description:
      "My first race and not the most in shape, but would love to meet new people!",
    isSingle: true
  },
  {
      name: "Mark and Alice",
      description:
      "Beer-drinking couple looking for 2 more for a Superteam",
      isSingle: false
  },
  {
    name: "Trish",
    description:
      "New in town and run about a 7 minute mile. Willing to team up with another or a group!",
    isSingle: true
  },
  {
      name: "Mark and Alice",
      description:
      "Beer-drinking couple looking for 2 more for a Superteam",
      isSingle: false
  },
  {
    name: "Trish",
    description:
      "New in town and run about a 7 minute mile. Willing to team up with another or a group!",
    isSingle: true
  },
  {
      name: "Mark and Alice",
      description:
      "Beer-drinking couple looking for 2 more for a Superteam",
      isSingle: false
  },
  {
    name: "Trish",
    description:
      "New in town and run about a 7 minute mile. Willing to team up with another or a group!",
    isSingle: true
  },
  {
      name: "Mark and Alice",
      description:
      "Beer-drinking couple looking for 2 more for a Superteam",
      isSingle: false
  },
  {
    name: "Trish",
    description:
      "New in town and run about a 7 minute mile. Willing to team up with another or a group!",
    isSingle: true
  },
  {
      name: "Mark and Alice",
      description:
      "Beer-drinking couple looking for 2 more for a Superteam",
      isSingle: false
  }
];

export default function Listings() {
  const [open, setOpen] = React.useState(false);
  const [openEmail, setOpenEmail] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenEmail = () => {
    setOpenEmail(true);
  };
  const handleCloseEmail = () => {
    setOpenEmail(false);
  };

  return (
    <Paper
      style={{
        width: "95%",
        borderRadius: "30px 30px 0 0",
        //maxHeight: "70vh",
        backgroundColor: "rgba(0, 0, 0, .5)",
        color: "white"
        //overflow:'auto'
      }}
    >
      <Typography
        variant="h5"
        style={{
          borderRadius: "30px 30px 0 0",
          padding: "0.5em",
          backgroundColor: "rgba(0, 0, 0, .7)"
        }}
      >
        TEAM FINDER
      </Typography>

      <div
        style={{
          maxHeight: "70vh",
          overflow: "auto"
        }}
      >
        <Grid container>
            {racers.map(racer=>(
                <Racer handleClickOpenEmail={handleClickOpenEmail}
                name={racer.name}
                description={racer.description}
                isSingle={racer.isSingle}
                />
            ))}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Button
              onClick={handleClickOpen}
              fullWidth
              style={{ color: "orange", height: "150px" }}
            >
              <Add fontSize="large" />
              Create Listing
            </Button>
          </Grid>
        </Grid>

        <ListingDialog
          //selectedValue={selectedValue}
          open={open}
          handleClose={handleClose}
        />
        <EmailDialog
          //selectedValue={selectedValue}
          openEmail={openEmail}
          handleCloseEmail={handleCloseEmail}
        />
      </div>
    </Paper>
  );
}
