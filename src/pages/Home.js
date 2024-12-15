import React, { useEffect, useState } from 'react';
import { getAllSongs } from '../services/api';
import { usePlaylists } from '../context/PlaylistContext';
import SongCard from '../components/SongCard';
import './pages.css';

function Home() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { playlists, refreshPlaylists } = usePlaylists();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [songsResponse] = await Promise.all([
          getAllSongs(),
          refreshPlaylists()
        ]);
        setSongs(songsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refreshPlaylists]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="home">
      <div className="home__section">
        <h2>Your Playlists</h2>
        <div className="home__grid">
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

      <div className="home__section">
        <h2>Popular Songs</h2>
        <div className="home__grid">
          {songs.map(song => (
            <SongCard
              key={song.id}
              title={song.title}
              subtitle={song.artist}
              imageUrl={song.image_url}
              type="song"
              id={song.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home; 