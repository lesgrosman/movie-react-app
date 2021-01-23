import React from 'react'
import ShakaPlayer from 'shaka-player-react'
import classes from './PlayerPage.module.css'
import 'shaka-player/dist/controls.css';

// Using Shaka Player for playback after clicking Play Movie
const PlayerPage = (props) => {
  
  const mp4 = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

  return (
    <>
      <div className={classes.Header}>
        <span>{props.location.title}</span>
          <i onClick={() => props.history.goBack()}className="fas fa-times fa-3x"></i>
      </div>
        <ShakaPlayer autoPlay src={mp4}/>
    </>
  )
}   

export default PlayerPage