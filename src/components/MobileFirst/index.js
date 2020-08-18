import React from 'react';
import {Grid} from '@material-ui/core';

const styles = {
  container: {
    backgroundImage: "url(./assets/cellphones.png)",
    height: "100vh"
  },
  header: {
    right: "10vw",
    top: "0vw",
    position: "relative"
  },
  mobiles: {
    width: "20%",
  }
}

function MobileFirst() {
  return (
    <Grid container style={styles.container} justify="flex-end" alignItems="center">
      <h1 style={styles.header}>Mobile-First Design</h1>
      <Grid item container justify="space-around">
        <img style={styles.mobiles} src="./assets/pixel2_ccidi.png" alt="covid can i do it, on mobile"></img>
        <img style={styles.mobiles} src="./assets/pixel2_sttl.png" alt="skip to the loo, on mobile"></img>
      </Grid>
    </Grid>
  )
}

export default MobileFirst