import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import MusicPlayerCard from "./components/MusicPlayerCard";
import PlaylistHeader from "./components/PlaylistHeader";
import PlaylistTracks from "./components/PlaylistTracks";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <NavbarComponent />
      {/* Safe Area Container */}
      <div className="flex-1 px-0 sm:px-4 lg:px-10 overflow-hidden">
        {/* 2-Column Layout */}
        <div className="flex flex-1 h-full">
          {/* Left Column (50%) */}
          <div className="w-[50%] bg-background p-4 border-r border-divider overflow-y-auto">
            <MusicPlayerCard />
          </div>
          {/* Right Column (50%) */}
          <div className="w-[50%] bg-background p-4 overflow-y-auto">
            <div className="h-auto">
              <PlaylistHeader />
              <PlaylistTracks />
              <PlaylistTracks />
              <PlaylistTracks />
              <PlaylistTracks />
              <PlaylistTracks />
              <PlaylistTracks />
              <PlaylistTracks />
              <PlaylistTracks />
              <PlaylistTracks />
              <PlaylistTracks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
