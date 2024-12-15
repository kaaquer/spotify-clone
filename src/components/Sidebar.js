import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';
import CreatePlaylistModal from './CreatePlaylistModal';
import './Sidebar.css';

function Sidebar() {
  const { user, logout } = useAuth();
  const [showCreatePlaylist, setShowCreatePlaylist] = useState(false);

  const handlePlaylistCreated = (playlist) => {
    // You might want to update the global state or trigger a refetch
    console.log('Playlist created:', playlist);
  };

  return (
    <>
      <div className="sidebar">
        <Logo />
        
        <div className="sidebar__nav">
          <Link to="/" className="sidebar__item">
            <HomeIcon />
            <span>Home</span>
          </Link>
          <Link to="/search" className="sidebar__item">
            <SearchIcon />
            <span>Search</span>
          </Link>
          <Link to="/library" className="sidebar__item">
            <LibraryMusicIcon />
            <span>Your Library</span>
          </Link>
          <div className="sidebar__divider"></div>
          <button 
            className="sidebar__createPlaylist"
            onClick={() => setShowCreatePlaylist(true)}
          >
            <AddBoxIcon />
            <span>Create Playlist</span>
          </button>
        </div>

        <div className="sidebar__user">
          <span className="sidebar__username">{user?.username}</span>
          <button onClick={logout} className="sidebar__logout">
            Log Out
          </button>
        </div>
      </div>

      {showCreatePlaylist && (
        <CreatePlaylistModal
          onClose={() => setShowCreatePlaylist(false)}
          onPlaylistCreated={handlePlaylistCreated}
        />
      )}
    </>
  );
}

export default Sidebar; 