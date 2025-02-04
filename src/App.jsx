import React, { useState, useEffect } from "react";
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

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Drawer state management
  const [size, setSize] = useState("full"); // Set drawer size to "full"
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000); // Track mobile mode

  // Function to handle song click
  const handleSongClick = () => {
    if (isMobile) {
      setSize("full"); // Ensure drawer takes full width
      onOpen(); // Open the drawer
    }
  };

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000); // Update isMobile state
    };

    window.addEventListener("resize", handleResize); // Add resize event listener
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <NavbarComponent />

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
            <MusicPlayerCard />
          </div>
          {/* Right Column (50%) - Full Width on Mobile */}
          <div
            className={`${
              isMobile ? "w-full" : "w-[50%]"
            } bg-backgroundDark p-4 flex flex-col h-full`}
          >
            <PlaylistHeader />

            {/* Scrollable PlaylistTracks */}
            <div className="overflow-y-auto flex-grow max-h-[calc(100vh-200px)]">
              {[...Array(10)].map((_, index) => (
                <div key={index} onClick={handleSongClick}>
                  <PlaylistTracks />
                </div>
              ))}
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
            <div className="flex justify-center py-4">
              <button onClick={onClose} className="bg-transparent">
                <img
                  src={CloseDrawerIcon}
                  alt="Close Drawer"
                  className="w-6 h-6"
                />
              </button>
            </div>
            {/* Drawer Body */}
            <DrawerBody className="text-foreground p-0">
              <MusicPlayerCard />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}
