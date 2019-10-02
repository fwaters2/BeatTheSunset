import React from "react";
import { Paper, Typography, Button, Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import ListingDialog from "./ListingDialog";
import EmailDialog from "./EmailDialog";
import Racer from "./Racer";
import Firebase from './Firebase'
import DeleteDialog from "./DeleteDialog";

const racers = [
  {
    name: "Example 1: Trish",
    description:
      "New in town and run about a 7 minute mile. Willing to team up with another or a group!",
    isSingle: true,
    phone: "217-233-1233",
    facebook: "Trisha McPhallen",
    line: "trish1234",
    email: "trish@gmail.com",
    other: "find me at Revolver bar on Thursdays"
  },
  {
    name: "Example 2: Mark and Alice",
    description: "Beer-drinking couple looking for 2 more for a Superteam",
    isSingle: false,
    facebook: null,
    line: "mark67",
    email: "1nW0nderland@hotmail.com",
    other: null
  },
  {
    name: "Example 3: Barry Allen",
    description:
      "Looking to find a group trying to make it to the top of the podium!",
    isSingle: true,
    facebook: "facebook.com/barryAllIn",
    line: null,
    email: "Allen3117@aol.com",
    other: null
  }
];

export default function Listings() {
  const [open, setOpen] = React.useState(false);

  const [data, setFBData] = React.useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  React.useEffect(() => {
    const unsubscribe = Firebase.firestore()
      .collection("teamfinderlisting")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        const runner = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFBData(runner);
      });

    return () => unsubscribe;
  }, []);

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
        Looking for teammates
      </Typography>
      <div
        style={{
          maxHeight: "60vh",
          overflow: "auto"
        }}
      >
        <Grid container>
        
        {data.filter(racer=>!racer.isDeleted).map(racer => (
          <React.Fragment>
            <Racer
              name={racer.name}
              description={racer.description}
              isSingle={racer.isSingle}
              phone={racer.phone}
              facebook={racer.facebook}
              line={racer.line}
              email={racer.email}
              other={racer.other}
              secret={racer.secret}
              id={racer.id}
            />
            
            </React.Fragment>
          ))}
          {racers.map(racer => (
            <Racer
              name={racer.name}
              description={racer.description}
              isSingle={racer.isSingle}
              phone={racer.phone}
              facebook={racer.facebook}
              line={racer.line}
              email={racer.email}
              other={racer.other}
            />
          ))}
          <Grid item xs={12} md={6} xl={4}>
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
        
      </div>
      <Grid item xs={12}>
            <Button onClick={handleClickOpen}
              fullWidth
              variant='contained'
              color='primary'
              >Create Listing</Button>
          </Grid>
    </Paper>
  );
}
