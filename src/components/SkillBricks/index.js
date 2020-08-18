import React from 'react';
import { Grid, Paper } from '@material-ui/core';

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
    width: "80%",
    height: "80%",
    padding: "10px 10px 10px 10px",
    color: "white",
    fontWeight: "bolder"
  },
  spacer: {
    marginLeft: "10px"
  },
  wall: {
    height: "50vh"
  }
}

const oddRows = 3;
const evenRows = 4;

function renderBrick(skill, index) {
  return (
    <Grid key={index} item xs={2} container justify="center" alignItems="stretch">
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

function renderLayers() {
  let rowIsEven = true;
  let rowIndex = 0;

  let gridItems = [];

  skills.forEach((skill, index) => {
    const indexInSet = index % (oddRows+evenRows);


    // new formation
    if (indexInSet === 0) {
      gridItems.push(renderSpacer(1));
    }

    gridItems.push(renderBrick(skill,index))
    
    if (indexInSet === oddRows-1) {
      gridItems.push(renderSpacer(3));
    }
    if (indexInSet === oddRows+evenRows-1) {
      gridItems.push(renderSpacer(3))
    }
  })

  return gridItems;

  // return skills.map((skill, index) => {
  //   if (rowIsEven && rowIndex > evenRows) {
  //     rowIsEven = false;
  //     rowIndex = 0;
  //   }
  //   else if (!rowIsEven && rowIndex > oddRows)
  //   {
  //     rowIsEven = true;
  //     rowIndex = 0;
  //   }
  //   return renderBrick(skill, rowIsEven, rowIndex)
  // })
}

function SkillBricks() {
  return (
    <Grid item xs={10} container spacing={0} alignItems="center" justify="center" style={styles.wall}>
      {renderLayers()}
    </Grid>
  )
}

export default SkillBricks