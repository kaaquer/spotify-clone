import React, { useState } from 'react';
import { usePlaylists } from '../context/PlaylistContext';
import SongCard from '../components/SongCard';
import SongUploadForm from '../components/SongUploadForm';
import AddIcon from '@mui/icons-material/Add';
import './Library.css';

function Library() {
  const { playlists, refreshPlaylists } = usePlaylists();
  const [showUploadForm, setShowUploadForm] = useState(false);

  const handleSongUploaded = async () => {
    // Refresh the songs list after upload
    await refreshPlaylists();
  };

  return (
    <div className="library">
      <div className="library__header">
        <h1>Your Library</h1>
        <button 
          className="library__uploadButton"
          onClick={() => setShowUploadForm(true)}
        >
          <AddIcon /> Upload Song
        </button>
      </div>

      <div className="library__content">
        <div className="library__playlists">
          <h2>Your Playlists</h2>
          <div className="library__grid">
            {playlists.map(playlist => (
              <SongCard
                key={playlist.id}
                title={playlist.name}
                subtitle={playlist.description}
                imageUrl={playlist.image_url}
                type="playlist"
                id={playlist.id}
              />
            ))}
          </div>
        </div>
      </div>

      {showUploadForm && (
        <SongUploadForm
          onClose={() => setShowUploadForm(false)}
          onSongUploaded={handleSongUploaded}
        />
      )}
    </div>
  );
}

export default Library; 