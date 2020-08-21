import React, { useEffect, useState } from 'react';
import {Grid} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
// import loo from '../assets/interface0.png';
// import ccidi from '../assets/interface1.png';
// import purple from '../assets/interface2.png';
import VizSensor from 'react-visibility-sensor';

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
  const [fade0, setFade0] = useState(false);
  const [fade1, setFade1] = useState(false);
  const [fade2, setFade2] = useState(false);

  return (
    <Grid container style={styles.container}>
      <Grid container item justify="flex-start">
        <h1 style={styles.header}>Intuitive Interfaces</h1>
      </Grid>
      <Grid item>
        {/* Skip to the Loo */}
        <VizSensor onChange={(isVisible) => {setFade0(isVisible)}}>
          <Fade in={fade0} timeout={2000}>
            <img style={styles.loo} src={'./assets/interface0.png'} alt="skip to the loo" />
          </Fade>
        </VizSensor>
        {/* CCIDI */}
        <VizSensor onChange={isVisible => {setFade1(isVisible)}}>
          <Fade in={fade1} timeout={2000}>
            <img style={styles.ccidi} src={'./assets/interface1.png'} alt="covid can i do it" />
          </Fade>
        </VizSensor>
        {/* Portfolio */}
        <VizSensor onChange={isVisible => {setFade2(isVisible)}}>
          <Fade in={fade2} timeout={2000}>
            <img style={styles.purple} src={'./assets/interface2.png'} alt="purple pages" />
          </Fade>
        </VizSensor>
        
      </Grid>
    </Grid>
  )
}

export default IntuitiveInterfaces