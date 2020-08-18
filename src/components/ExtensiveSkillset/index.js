import React from 'react';
import {Grid, Paper, Container, GridList, GridListTile} from '@material-ui/core';
import SkillBricks from '../SkillBricks';

const styles = {
  container: {
    height: "100vh"
  },
  attribution: {
    fontSize: "0.5em"
  }
}

const skills = [
  "React",
  "Material-UI",
  "Vue",
  "Vuetify",
  "MongoDB",
  "MySQL",
  "Express",
  "Node",
  "ES6",
  "JQuery",
  "Javascript",
  "Bootstrap",
  "Foundation",
  "CSS3",
  "HTML5",
  "C#",
  "Java",
  "Intersystems Caché",
  "Python",
  "GDScript",
  "VB6"
]

const skillColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple"
]


function ExtensiveSkillset() {
  return (
    <Grid container style={styles.container}>
      <h1>Extensive Skillset</h1>
      <SkillBricks></SkillBricks>
      {/*
      <GridList cols={3}>
        {skills.map((skill,index) => {
          const color = skillColors[index % skillColors.length];
          const paperStyle = {
            backgroundColor: color,
            height: "10vh",
            verticalAlign: "bottom",
            borderRadius: "0px"
          }
          return (
            <GridListTile key={skill}>
              <Paper style={paperStyle}>
                {skill}
              </Paper>
            </GridListTile>
          )
        })}
      <GridListTile></GridListTile>
      </GridList>
      <Container item container justify="flex-start">
        {skills.map((skill) => {
          return (
            <Grid key={skill} item container justify="center" alignItems="middle">
              <Paper>{skill}
              </Paper>
            </Grid>
          )
        })}
      </Container>
      */}
    </Grid>
  )
}

export default ExtensiveSkillset