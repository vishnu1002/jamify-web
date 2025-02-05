const API_BASE_URL = 'http://localhost:5000/api';

export const fetchSpotifyData = async (spotifyUrl) => {
  try {
    const response = await fetch(`${API_BASE_URL}/fetch/${encodeURIComponent(spotifyUrl)}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    throw error;
  }
};

export const fetchStreamUrl = async (videoId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/stream?videoId=${videoId}`);
    if (!response.ok) throw new Error('Failed to fetch stream URL');
    
    const data = await response.json();
    return data.audioUrl;
  } catch (error) {
    console.error('Error fetching stream URL:', error);
    throw error;
  }
}; 