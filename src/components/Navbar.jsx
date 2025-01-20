import React from "react";
import {Input, Dropdown, DropdownMenu, DropdownItem, DropdownTrigger, Avatar} from "@heroui/react";
import ProfileIcon from "../assets/icons/ProfileIcon.svg";
import PartyIcon from "../assets/icons/PartyIcon.svg";
import SearchIcon from "../assets/icons/SearchIcon.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-5 py-1 bg-red-500 text-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <p className="font-bold text-md">jamify</p>
        <span className="text-lg font-semibold">Punisher's Jam</span>
      </div>

      {/* Right Side Content */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        {/* <input
          type="text"
          placeholder="Spotify Playlist URL"
          className="w-full sm:w-2/3 md:w-1/2 lg:w-[300px] px-4 py-3 text-sm bg-gray-800 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
        /> */}

        <Input
          classNames={{
            base: "max-w-full sm:max-w-[400px] h-12",
            input: "text-small",
            inputWrapper:
              " h-full font-normal text-default-500 dark:bg-default-100/30 border-1 border-gray-800 rounded-2xl",
          }}
          placeholder="Spotify track or playlist url"
          size="sm"
          startContent={
            <img src={SearchIcon} alt="Search" className="mr-3 w-5 h-5" />
          }
          type="search"
        />

<Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* Group Icon */}
        <button
          type="button"
          className="w-14 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
          aria-label="Group Icon"
        >
          <img src={PartyIcon} alt="Group" className="w-5 h-5" />
        </button>

        {/* Profile Icon */}
        <button
          type="button"
          className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
          aria-label="User Icon"
        >
          <img src={ProfileIcon} alt="Profile" className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
