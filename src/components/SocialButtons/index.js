import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const GITHUB = "Github";
const LINKEDIN = "LinkedIn";
const FACEBOOK = "Facebook";
const TWITTER = "Twitter";
const INSTAGRAM = "Instagram";

const socials = [
  {
    name: GITHUB,
    link: "https://github.com/reptile18"
  },
  {
    name: LINKEDIN,
    link: "https://www.linkedin.com/in/johnny-li-031b949/"
  },
  {
    name: FACEBOOK,
    link: "https://www.facebook.com/johnny.li.144"
  },
  {
    name: TWITTER,
    link: "https://twitter.com/hotreptile18"
  },
  {
    name: INSTAGRAM,
    link: "https://www.instagram.com/johnnyli8004/"
  }
]

const styles = {
  link: {
    color: "white"
  }
}

function renderSocialIcon(type) {
  switch(type) {
    case GITHUB:
      return <GitHubIcon></GitHubIcon>
    case LINKEDIN:
      return <LinkedInIcon></LinkedInIcon>
    case FACEBOOK:
      return <FacebookIcon></FacebookIcon>
    case TWITTER:
      return <TwitterIcon></TwitterIcon>
    case INSTAGRAM:
      return <InstagramIcon></InstagramIcon>
    default:
      return
  }
}

function renderSocial(item) {
  return <Grid key={item.name} item><Link style={styles.link} href={item.link}>{renderSocialIcon(item.name)}</Link></Grid>
}

function SocialButtons() {
  return (
    <Grid container spacing={10} justify="center">
      {socials.map(renderSocial)}
    </Grid>
  )
}

export default SocialButtons