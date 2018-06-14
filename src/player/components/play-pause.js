import React from 'react';
import {Play, Pause} from '../../icons/components/figure';
// import Play from '../../icons/components/icon';
import './play-pause.css';

function PlayPause(props) {
  return(
    <div className="PlayPause">
      {
        props.pause ?
        <button
          onClick = {props.handleClick}
        >
          <Play size={25}  color= {"white"} />
        </button>
        :
        <button
          onClick = {props.handleClick}
        >

          <Pause size={25}  color={"white"} />
        </button>
      }
    </div>

  )
}

export default PlayPause;
