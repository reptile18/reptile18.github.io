import React from 'react';
import Fade from '@material-ui/core/Fade';

const Fader = (props, ref) => {
  return (
    <Fade {...props}>
      {props.children}
    </Fade>
  )
}

export default Fader
