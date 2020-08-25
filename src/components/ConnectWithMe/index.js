import React from 'react';
import { Grid } from '@material-ui/core';
import VizSensor from 'react-visibility-sensor';
import Resume from '../Resume';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import './style.css';
import SocialButtons from '../SocialButtons';
import LightTunnelImg from '../../assets/lighttunnel.jpeg'

const styles = {
  container: {
    height: "100vh",
    color: "white",
    backgroundImage: `url(${LightTunnelImg})`
  },
  connectContainer: {
  },
  headerGrid: {
  },
  emailLink: {
    color: "white"
  }
}

function ConnectWithMe() {
  return (
    <VizSensor>
      <Grid container style={styles.container} justify="center" alignItems="center" direction="column" >
          <Grid style={styles.headerGrid} item xs={3} container justify="center" alignItems="center">
            <h1>Connect with Me</h1>
          </Grid>
          <Grid style={styles.connectContainer} item xs={9} container direction="row" justify="space-between" alignItems="center">
            <Grid style={styles.debugGrid} item xs={3} container direction="row" justify="center" alignItems="center">
              <Resume />
            </Grid>
            <Grid item xs={3} container justify="center">
              <SocialButtons lg={12} md={8} sm={12} xs={2}/>
            </Grid>
            <Grid item xs={3}>
              <a style={styles.emailLink} href="mailto:reptile18@gmail.com">
                <ContactMailIcon className="email" />
              </a>
            </Grid>
            
            
          </Grid>
          
        </Grid>
    </VizSensor>
  )
}

export default ConnectWithMe