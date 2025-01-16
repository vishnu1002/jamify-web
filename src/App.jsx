import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { SearchIcon } from "./components/SearchIcon";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen dark bg-background text-foreground">
      {/* Safe Area Wrapper */}
      <div className="mx-auto w-full max-w-screen-2xl px-20 flex flex-col flex-1">
        {/* Navbar */}
        <Navbar isBordered className="bg-background/50 backdrop-blur-md">
          <NavbarBrand>
            <p className="font-bold text-inherit">jamify</p>
          </NavbarBrand>
          <NavbarContent className="items-center" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Punisher's Jam
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent as="div" className="items-center" justify="end">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  radius="lg"
                  as="button"
                  className="transition-transform"
                  color="default"
                  size="md"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-10 gap-2">
                  <p className="font-semibold">punisher</p>
                </DropdownItem>
                <DropdownItem key="delete-room" color="danger">
                  Delete Room
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        </Navbar>

        {/* 2-Column Layout */}
        <div className="flex flex-1">
          {/* Left Column (50%) */}
          <div className="w-[50%] bg-background p-4 border-r border-divider overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">Left Column</h2>

          </div>

          {/* Right Column (50%) */}
          <div className="w-[50%] bg-background p-4 overflow-y-auto">
            <div>
              <Input
                classNames={{
                  base: "max-w-full sm:max-w-auto h-10",
                  mainWrapper: "h-full",
                  input: "text-small",
                  inputWrapper:
                    "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Spotify track or playlist url"
                size="sm"
                startContent={<SearchIcon size={18} />}
                type="search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}