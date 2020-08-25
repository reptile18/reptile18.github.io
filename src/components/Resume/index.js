import React from 'react';
import page1 from '../../assets/resume/pg1.png';
import page2 from '../../assets/resume/pg2.png';
import gDrive from '../../assets/resume/drive.png';

import './style.css';

const paperHeight = 351;

const styles = {
  container: {
    height: "375px",
    width: "100%",
    position: "relative",
    display: "inline-block",
    border: "1px solid yellow"

  },
  pg1: {
    boxShadow: "1px 1px 5px #000000",
    // position: "absolute",
    // top: "-351px",
    left: "0px"
  },
  pg2: {
    boxShadow: "1px 1px 5px #000000",
    position: "absolute",
    top: "1vw",
    left: "1vw"
    // left: "5px",
    // top: "20px"
  },
  gDrive: {
    position: "absolute",
    top: "8%",
    left: "0px",
    zIndex: "5"
  }

}

function Resume() {
  return (
    <div className="resume" style={styles.container}>
      <a href="https://docs.google.com/document/d/1_fizZKFhCxe0v8OxU9qo75DfHMkb5PK-I8IRsHQswJo/">
        <img style={styles.pg2} src={page2} alt="page two of resume" />
        <img style={styles.pg1} src={page1} alt="page one of resume" />  
        <img style={styles.gDrive} src={gDrive} alt="google drive" />
      </a>
    </div>
  )
}

export default Resume