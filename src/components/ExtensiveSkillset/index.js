import React from 'react';
import {Grid} from '@material-ui/core';
import SkillBricks from '../SkillBricks';

const styles = {
  container: {
    backgroundImage: "url(./assets/concrete-3.jpg)",
    backgroundOrigin: "content-box",
    backgroundSize: "cover", 
    height: "100vh"
  },
  header: {
    marginTop: "10vh",
    marginLeft: "10vh",
    color: "white"
  },
  attribution: {
    fontSize: "0.5em"
  }
}


function ExtensiveSkillset() {
  return (
    <Grid container style={styles.container} justify="center">
      <h1 style={styles.header}>Extensive Skillset</h1>
      <SkillBricks></SkillBricks>
    </Grid>
  )
}

export default ExtensiveSkillset