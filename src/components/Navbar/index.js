import React from 'react';
import {AppBar, Toolbar, Typography, Link as MuiLink} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';

const styles = {
  toolbar: {
    backgroundColor: "#333"
  },
  appName: {
    fontWeight: "bold"
  },
  link: {
    color: "white",
    marginLeft: "1em"
  },
  nav: {
    textAlign: "right"
  }
}

function Navbar() {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar style={styles.toolbar}>
          <Typography  variant="h6">
            My Portfolio
          </Typography>
          <nav style={styles.nav}>
            <RouterLink to="/">
              <MuiLink style={styles.link}>
                Home
              </MuiLink>
            </RouterLink>
            <RouterLink to="/portfolio">
              <MuiLink style={styles.link}>
                Portfolio
              </MuiLink>
            </RouterLink>
            <RouterLink to="/contact">
              <MuiLink style={styles.link}>
                Contact
              </MuiLink>
            </RouterLink>
          </nav>
        </Toolbar>

      </AppBar>
    </React.Fragment>
  )
}

export default Navbar