import React, { createContext, useContext, useState, useCallback } from 'react';
import { getPlaylists as fetchPlaylists } from '../services/api';

const PlaylistContext = createContext(null);

export const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);

  const refreshPlaylists = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchPlaylists();
      setPlaylists(response.data);
    } catch (error) {
      console.error('Error fetching playlists:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const addPlaylist = useCallback((playlist) => {
    setPlaylists(prev => [playlist, ...prev]);
  }, []);

  return (
    <PlaylistContext.Provider value={{ 
      playlists, 
      loading, 
      refreshPlaylists, 
      addPlaylist 
    }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylists = () => useContext(PlaylistContext); 