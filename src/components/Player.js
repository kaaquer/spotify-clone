import React, { useState } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Slider from '@mui/material/Slider';
import './Player.css';

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [progress, setProgress] = useState(0);

  return (
    <div className="player">
      <div className="player__left">
        <img 
          src="https://i.scdn.co/image/ab67616d00004851e8b066f70c206551210d902b" 
          alt="Track Cover" 
          className="player__albumCover"
        />
        <div className="player__songInfo">
          <h4>Song Name</h4>
          <p>Artist Name</p>
        </div>
      </div>

      <div className="player__center">
        <div className="player__controls">
          <SkipPreviousIcon className="player__icon" />
          {isPlaying ? (
            <PauseCircleIcon 
              className="player__icon player__playButton" 
              onClick={() => setIsPlaying(false)}
            />
          ) : (
            <PlayCircleIcon 
              className="player__icon player__playButton" 
              onClick={() => setIsPlaying(true)}
            />
          )}
          <SkipNextIcon className="player__icon" />
        </div>
        <div className="player__progress">
          <span>0:00</span>
          <Slider 
            value={progress}
            onChange={(_, value) => setProgress(value)}
            className="player__progressBar"
          />
          <span>3:45</span>
        </div>
      </div>

      <div className="player__right">
        <VolumeUpIcon className="player__icon" />
        <Slider 
          value={volume}
          onChange={(_, value) => setVolume(value)}
          className="player__volume"
        />
      </div>
    </div>
  );
}

export default Player; 