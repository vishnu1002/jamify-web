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