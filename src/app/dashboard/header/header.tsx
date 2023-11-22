'use client'

import React from "react";
import {
  Navbar,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar, Button
} from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar as="div" maxWidth="full" classNames={{wrapper: "p-3 md:p-6"}} className="drop-shadow-md shadow-slate-800 bg-transparent backdrop-filter-none justify-end row-start-1 md:row-start-1 md:col-start-2 max-w-none">
      <NavbarContent as="div">
        <Button isIconOnly className="rounded-lg bg-slate-800 hover:bg-slate-700">
          {`<-`}
        </Button>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              name="A"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="solid">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
