import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import SocialButtons from '../SocialButtons';

const styles = {
  container: {
    paddingLeft: "0",
    paddingRight: "0"
  },
  gridContainer: {
    backgroundImage: 'url(./assets/codingbackground.png)',
    backgroundSize: "contain",
    height: '100vh',
    color: 'white',

  },
  gridLeft: {

    height: "100%",
    verticalAlign: 'middle'
  },
  gridRight: {

  },
  johnny: {
    height: '80%',
    zIndex: 0,

  }
}

function Hero() {
  const [fadeInJohnny, setFadeInJohnny] = useState(false);
  useEffect(() => {
    if (!fadeInJohnny) {
      setTimeout(() => {
        setFadeInJohnny(true);
      }, 1000);
    }
  },[fadeInJohnny]);
  return (
    <Container maxWidth="xl" style={styles.container}>
      <Grid container direction="row" justify="center" alignItems="center" style={styles.gridContainer}>
        <Grid container item xs={3} style={styles.gridLeft} justify="center" alignItems="flex-end" >
          <Fade in={fadeInJohnny} timeout={1000}>
            <img src="./assets/professionaljohnny.png" alt="Johnny Li" style={styles.johnny}></img>
          </Fade>
        </Grid>
        <Grid container direction="column" item xs={9} style={styles.gridRight}>
          <h1>Johnny Li</h1>
          <h2>Full Stack Web Developer</h2>
          <SocialButtons></SocialButtons> 
        </Grid>
      </Grid>
      
    </Container>
  )
}

export default Hero