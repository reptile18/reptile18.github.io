import React from 'react';
import {Grid} from '@material-ui/core';
// import loo from '../assets/interface0.png';
// import ccidi from '../assets/interface1.png';
// import purple from '../assets/interface2.png';

const styles = {
  container: {
    backgroundImage: "url(./assets/interfaces.jpg)",
    backgroundSize: "cover",
    color: "white",
    height: "100vh"
  },
  header: {
    marginLeft: "10vw",
    marginTop: "10vw"
  },
  ccidi: {
    position: "relative",
    top: "0vw",
    left: "-15vw",
    width: "50vw",
    zIndex: "5",
    boxShadow: "-1px 1px 5px 1px rgba(100,100,100,0.5)"

  },
  loo: {
    position: "relative",
    top: "-10vw",
    left: "50vw",
    width: "40vw",
    zIndex: "10",
    boxShadow: "-1px 1px 5px 1px rgba(100,100,100,0.5)"
  },
  purple: {
    position: "relative",
    top: "-10vw",
    left: "-20vw",
    width: "35vw",
    zIndex: "0"
  }

}

function IntuitiveInterfaces() {
  return (
    <Grid container style={styles.container}>
      <Grid container item justify="flex-start">
        <h1 style={styles.header}>Intuitive Interfaces</h1>
      </Grid>
      <Grid item>
        {/* Skip to the Loo */}
        <img style={styles.loo} src={'./assets/interface0.png'} alt="skip to the loo" />
        {/* CCIDI */}
        <img style={styles.ccidi} src={'./assets/interface1.png'} alt="covid can i do it" />
        {/* Portfolio */}
        <img style={styles.purple} src={'./assets/interface2.png'} alt="purple pages" />
      </Grid>
    </Grid>
  )
}

export default IntuitiveInterfaces