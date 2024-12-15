import React, { useState } from 'react';
import { createPlaylist } from '../services/api';
import './CreatePlaylistModal.css';

function CreatePlaylistModal({ onClose, onPlaylistCreated }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createPlaylist(name, description);
      onPlaylistCreated(response.data);
      onClose();
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to create playlist');
    }
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <h2>Create Playlist</h2>
        {error && <div className="modal__error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Playlist name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="modal__buttons">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePlaylistModal; 