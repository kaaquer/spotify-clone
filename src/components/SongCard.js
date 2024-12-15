import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './SongCard.css';

function SongCard({ title, subtitle, imageUrl, type, id }) {
  const handleClick = () => {
    // TODO: Implement play functionality or navigation
    console.log(`Playing ${type} with id: ${id}`);
  };

  return (
    <div className="songCard" onClick={handleClick}>
      <div className="songCard__image">
        <img src={imageUrl} alt={title} />
        <div className="songCard__play">
          <PlayCircleIcon />
        </div>
      </div>
      <div className="songCard__info">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default SongCard; 