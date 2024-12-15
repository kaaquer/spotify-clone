import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = (email, password) => 
  api.post('/users/login', { email, password });

export const register = (username, email, password) => 
  api.post('/users/register', { username, email, password });

export const getAllSongs = () => 
  api.get('/songs');

export const createPlaylist = (name, description) => 
  api.post('/playlists', { name, description });

export const getPlaylists = () => 
  api.get('/playlists');

export const getPlaylistById = (id) => 
  api.get(`/playlists/${id}`);

export const addSongToPlaylist = (playlistId, songId) => 
  api.post('/playlists/add-song', { playlistId, songId });

export const removeSongFromPlaylist = (playlistId, songId) => 
  api.delete(`/playlists/${playlistId}/songs/${songId}`);

export default api; 