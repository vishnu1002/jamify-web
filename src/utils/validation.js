export const isValidSpotifyUrl = (url) => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname === 'open.spotify.com';
  } catch {
    return false;
  }
}; 