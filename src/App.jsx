import React, { useState, useEffect, useRef } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@heroui/react"; // Import Drawer components
import NavbarComponent from "./components/NavbarComponent";
import MusicPlayerCard from "./components/MusicPlayerCard";
import PlaylistHeader from "./components/PlaylistHeader";
import PlaylistTracks from "./components/PlaylistTracks";
import CloseDrawerIcon from "./assets/icons/CloseDrawerIcon.svg"; // Import close icon

const defaultTrack = {
  title: "Die With A Smile",
  artist: "Lady Gaga, Bruno Mars",
  duration: "4:32",
  image: "./src/assets/album-cover.jpg"
};

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Drawer state management
  const [size, setSize] = useState("full"); // Set drawer size to "full"
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000); // Track mobile mode
  const [songMetadata, setSongMetadata] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(defaultTrack); // Initialize with default track
  
  // Add audio state at App level
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [isLooping, setIsLooping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Function to handle song click
  const handleSongClick = () => {
    if (isMobile) {
      setSize("full");
      onOpen();
    }
  };

  // Function to handle metadata update from NavbarComponent
  const handleMetadataUpdate = (data) => {
    setSongMetadata(data);
    // Don't update currentTrack here anymore
  };

  // Handle track play from playlist
  const handleTrackPlay = async (track) => {
    if (isLoading) return;
    
    setIsLoading(true);
    setCurrentTrack(track);
    setIsPlaying(true);
    setCurrentTime(0); // Reset time when starting new track

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.load();
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error('Error playing track:', error);
        setIsPlaying(false);
      }
    }

    if (isMobile && !isOpen) {
      handleSongClick();
    }
    
    setIsLoading(false);
  };

  // Handle play/pause
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle loop toggle
  const handleLoopToggle = () => {
    setIsLooping(!isLooping);
  };

  // Function to handle album image click to open drawer
  const handleImageClick = (track) => {
    setCurrentTrack(track); // Set the current track to the one clicked
    onOpen(); // Open the drawer
  };

  // Handle time update for progress slider
  const handleTimeUpdate = (newTime) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Add handlers for slider drag
  const handleSliderDragStart = () => {
    setIsDragging(true);
  };

  const handleSliderDragEnd = () => {
    setIsDragging(false);
  };

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000); // Update isMobile state
    };

    window.addEventListener("resize", handleResize); // Add resize event listener
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  // Add this useEffect to debug streamUrl
  useEffect(() => {
    if (currentTrack?.streamUrl) {
      console.log('Current track stream URL:', currentTrack.streamUrl);
    }
  }, [currentTrack]);

  // Add error handling for audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onerror = (e) => {
        console.error('Audio error:', e);
        console.log('Current src:', audioRef.current.src);
      };
    }
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Audio Element with loop property */}
      <audio
        ref={audioRef}
        src={currentTrack?.streamUrl}
        onTimeUpdate={() => {
          if (!isDragging && audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onLoadedMetadata={() => {
          setDuration(audioRef.current.duration);
          setCurrentTime(0);
          setIsLoading(false);
        }}
        onEnded={() => {
          if (!isLooping) {
            setIsPlaying(false);
            setCurrentTime(0); // Reset time when track ends
          }
        }}
        onError={(e) => {
          console.error('Audio error:', e);
          setIsLoading(false);
          setIsPlaying(false);
          setCurrentTime(0); // Reset time on error
        }}
        loop={isLooping}
      />

      {/* Navbar */}
      <NavbarComponent onMetadataUpdate={handleMetadataUpdate} />

      {/* Safe Area Container */}
      <div className="flex-1 px-0 sm:px-4 lg:px-10 overflow-hidden">
        {/* 2-Column Layout (Desktop) */}
        <div className="flex flex-1 h-full">
          {/* Left Column (50%) - Hidden on Mobile */}
          <div
            className={`${
              isMobile ? "hidden" : "block"
            } w-[50%] bg-backgroundDark p-4 border-r border-divider overflow-y-auto`}
          >
            <MusicPlayerCard 
              currentTrack={currentTrack}
              isPlaying={isPlaying}
              currentTime={currentTime}
              duration={duration}
              isLooping={isLooping}
              onPlayPause={handlePlayPause}
              onTimeUpdate={handleTimeUpdate}
              onLoopToggle={handleLoopToggle}
              onDragStart={handleSliderDragStart}
              onDragEnd={handleSliderDragEnd}
            />
          </div>
          {/* Right Column (50%) - Full Width on Mobile */}
          <div
            className={`${
              isMobile ? "w-full" : "w-[50%]"
            } bg-backgroundDark p-4 flex flex-col h-full`}
          >
            {/* <PlaylistHeader /> */}

            {/* Scrollable PlaylistTracks */}
            <div className="overflow-y-auto flex-grow max-h-[calc(100vh-200px)]">
              {/* Show tracks based on metadata type */}
              {!songMetadata ? (
                // Show default track if no metadata
                <PlaylistTracks 
                  track={defaultTrack}
                  isActive={currentTrack.title === defaultTrack.title}
                  isLoading={isLoading}
                  onPlay={handleTrackPlay}
                  onImageClick={handleImageClick}
                />
              ) : songMetadata.type === 'playlist' ? (
                // Show playlist tracks
                songMetadata.data.tracks.map((track, index) => (
                  <PlaylistTracks 
                    key={index}
                    track={track}
                    isActive={currentTrack?.title === track.title}
                    isLoading={isLoading}
                    onPlay={handleTrackPlay}
                    onImageClick={handleImageClick}
                  />
                ))
              ) : songMetadata.type === 'track' ? (
                // Show single track
                <PlaylistTracks 
                  track={songMetadata.data}
                  isActive={currentTrack?.title === songMetadata.data.title}
                  isLoading={isLoading}
                  onPlay={handleTrackPlay}
                  onImageClick={handleImageClick}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Drawer for MusicPlayerCard (Mobile Only) */}
      {isMobile && (
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          size={size}
          placement="bottom" // Slide up from the bottom
          hideCloseButton // Remove the default close icon
        >
          <DrawerContent className="dark text-foreground bg-background">
            {/* Close Icon at the Top (Centered) */}
            {/* Drawer Body */}
            <DrawerBody className="text-foreground p-0">
            <div className="flex justify-center py-4 bg-transparent">
              <button onClick={onClose} className="bg-transparent">
                <img
                  src={CloseDrawerIcon}
                  alt="Close Drawer"
                  className="w-6 h-6"
                />
              </button>
            </div>
              <MusicPlayerCard 
                currentTrack={currentTrack}
                isPlaying={isPlaying}
                currentTime={currentTime}
                duration={duration}
                isLooping={isLooping}
                onPlayPause={handlePlayPause}
                onTimeUpdate={handleTimeUpdate}
                onLoopToggle={handleLoopToggle}
                onDragStart={handleSliderDragStart}
                onDragEnd={handleSliderDragEnd}
              />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}
