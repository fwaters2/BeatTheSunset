import React from "react";
import logo from "./logo.png";
import "./App.css";
import bkgdImage from "./bkgdRoad.jpg";
import Listings from "./Listings";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, Link, Grid } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

function App() {
  return (
    <div className="App">
      <img
        src={bkgdImage}
        alt="backgroundImage"
        style={{
          position: "fixed",
          left: 0,
          height: "100vh",
          width: "100%",
          zIndex: -2
        }}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ThemeProvider theme = {theme} >
        <Listings />
        </ThemeProvider>
        <Grid container>
        <Grid item xs= {6}>
            <Link style={{color:'white'}} href="https://www.jotform.com/beatthesunset/register">Race Website</Link>
          </Grid>
          <Grid item xs= {6}>
            <Link style={{color:'white'}} href="https://www.jotform.com/beatthesunset/register">Register!</Link>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
