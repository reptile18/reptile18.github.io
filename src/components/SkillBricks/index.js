import React from 'react';
import { Grid, Paper, Container } from '@material-ui/core';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

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
  "Caché",
  "Python",
  "GDScript",
  "VB6"
]

const styles = {
  brickSpot: {

  },
  brick: {
    backgroundColor: "#BB4545",
    backgroundImage: "url(./assets/brick.png)",
    width: "100%",
    height: "10vh",
    padding: "10px 10px 10px 10px",
    margin: "5px 5px 5px 5px",
    color: "white",
    fontSize: "2em",
    fontWeight: "bolder",
    verticalAlign:"middle"
  },
  spacer: {
    marginLeft: "10px"
  },
  wall: {
    marginLeft: "15vw"
  }
}

const oddRows = 3;
const evenRows = 4;

function renderBrick(skill, index) {
  return (
    <Grid key={index} item xs={2} container justify="center" alignItems="center">
      <Paper style={styles.brick}>
        {skill}
      </Paper>
    </Grid>
  )
}

function renderSpacer(space) {
  return (
    <Grid style={styles.spacer} item xs={space}></Grid>
  )
}

function renderContainer(index) {
  const skillIndex = Math.floor((index)/2)*7 + ((index)%2)*3; // 0: 3, 1: 7, 2: 10, 3: 14, 4: 17, 5: 21
  // if odd containerIndex, render 3, if even, render 4
  if (index%2===0) {
    return (
      <Grid container direction="row" alignItems="center" justify="center">
        {
          [skills[skillIndex], skills[skillIndex+1], skills[skillIndex+2], skills[skillIndex+3]].map((skill)=> {
            return renderBrick(skill)
          })
        }
      </Grid>
    )
  }
  else {
    return (
      <Grid container direction="row" alignItems="center" justify="center">
        {
          [skills[skillIndex], skills[skillIndex+1], skills[skillIndex+2]].map((skill)=> {
            return renderBrick(skill)
          })
        }
      </Grid>
    )
  }
  
}

function renderLayers() {
  let rowIsEven = false;
  let rowIndex = 0;

  let gridItems = [];
  let containers = [];
  let containerIndices = [];

  let numContainers = (skills.length / (evenRows+oddRows))*2;
  for (let i = 0; i < numContainers; i++) {
    containerIndices.push(i);
  }
  return containerIndices.map((containerIndex) => {
    return renderContainer(containerIndex);
  });

}

function SkillBricks() {
  return (
    <Grid item xs={10} container spacing={0} direction="column" alignItems="flex-start" justify="flex-start" style={styles.wall}>
      {renderLayers()}
    </Grid>
  )
}

export default SkillBricks