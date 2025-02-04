// NavbarComponent.js
import React from "react";
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

const NavbarComponent = () => {
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
        {/* Search Bar */}
        <NavbarItem className="w-full max-w-2xl">
          <Input
            classNames={{
              base: "h-12 w-full", // Ensure full width within the container
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 dark:bg-default-100/30 border-1 border-gray-800 rounded-2xl w-full", // Ensure full width
            }}
            placeholder="Spotify track or playlist url"
            size="sm"
            startContent={
              <img src={SearchIcon} alt="Search" className="mr-3 w-5 h-5" />
            }
            type="search"
          />
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
