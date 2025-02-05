// NavbarComponent.js
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";

import LogoIcon from "../assets/icons/LogoIcon.svg";
import ProfileIcon from "../assets/icons/ProfileIcon.svg";
import PartyIcon from "../assets/icons/PartyIcon.svg";
import SearchIcon from "../assets/icons/SearchIcon.svg";
import { fetchSpotifyData } from "../utils/api";

const NavbarComponent = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUrlSubmit = async (e) => {
    e.preventDefault();
    
    if (!inputUrl.trim()) return;

    try {
      setIsLoading(true);
      const data = await fetchSpotifyData(inputUrl);
      console.log('Received data:', data); // Handle the response data as needed
      
      // Clear input after successful submission
      setInputUrl("");
    } catch (error) {
      // Handle error (you might want to show an error message to the user)
      console.error('Failed to fetch data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Navbar isBordered maxWidth="full">
      {/* Brand Logo and Party Name */}
      <NavbarContent justify="normal">
        <NavbarBrand>
          <img src={LogoIcon} alt="Search" className="w-5 h-5" />
          <p className="ml-3 hidden sm:block font-bold text-textMain">Jamify</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Search Bar and Profile Dropdown */}
      <NavbarContent justify="center" className="flex-grow">
        <NavbarItem className="w-full max-w-2xl">
          <form onSubmit={handleUrlSubmit} className="w-full">
            <Input
              classNames={{
                base: "h-12 w-full",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 dark:bg-default-100/30 border-1 border-gray-800 rounded-2xl w-full",
              }}
              placeholder="Spotify track or playlist url"
              size="sm"
              startContent={
                <img src={SearchIcon} alt="Search" className="mr-3 w-5 h-5" />
              }
              type="url"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              disabled={isLoading}
              endContent={
                isLoading && (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary border-t-transparent" />
                )
              }
            />
          </form>
        </NavbarItem>
      </NavbarContent>

      {/* Profile Icons */}
      <NavbarContent justify="normal">
        <NavbarItem className="flex items-center space-x-4">
          {/* Party Icons */}
          <Dropdown placement="bottom-end" className="bg-neutral-900">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform bg-background"
                color="default"
                size="md"
                icon={
                  <img src={PartyIcon} alt="Party Icon" className="w-6 h-6" />
                }
              ></Avatar>
            </DropdownTrigger>
            <DropdownMenu aria-label="Party Members" variant="flat">
              <DropdownItem key="logout" color="danger" className="text-danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          {/* Profile Icons */}
          <Dropdown placement="bottom-end" className="bg-neutral-900">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform bg-background"
                color="default"
                size="md"
                icon={
                  <img src={ProfileIcon} alt="Party Icon" className="w-6 h-6" />
                }
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile=name" className="text-textSub">
                punisher
              </DropdownItem>
              <DropdownItem
                key="end-party"
                color="danger"
                className="text-danger"
              >
                End Party
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
