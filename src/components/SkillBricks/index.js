import React from 'react';
import { Grid, Paper, Typography} from '@material-ui/core';
import './index.css';

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
    height: "5vw",
    padding: "10px 10px 10px 10px",
    margin: "5px 5px 5px 5px",
    fontWeight: "bolder",
    verticalAlign:"middle",
    color: "white"
  },
  spacer: {
    marginLeft: "10px"
  },
  wall: {
    marginLeft: "0vw"
  }
}

const oddRows = 3;
const evenRows = 4;

function renderBrick(skill, index) {
  return (
    <Grid key={index} item xs={3} container justify="center" alignItems="center">
      <Grid className="brick" container item justify="center" alignItems="center" style={styles.brick}>
        <div>
          <Typography variant="h4" component="h1">
            {skill}
          </Typography>
        </div>

      </Grid>
    </Grid>
  )
}

function renderContainer(index) {
  const skillIndex = Math.floor((index)/2)*7 + ((index)%2)*3; // 0: 3, 1: 7, 2: 10, 3: 14, 4: 17, 5: 21
  // if odd containerIndex, render 3, if even, render 4
  if (index%2===0) {
    return (
      <Grid key={index} container direction="row" alignItems="center" justify="center">
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
      <Grid key={index} container direction="row" alignItems="center" justify="center">
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
    <Grid item xs={12} sm={12} md={10} container spacing={0} direction="column" alignItems="center" justify="center" style={styles.wall}>
      {renderLayers()}
    </Grid>
  )
}

export default SkillBricks