'use client'

import React from "react";
import {
  Navbar,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import { ArrowDownTrayIcon, BarsArrowDownIcon, BarsArrowUpIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import NavLogo from "../navigation/nav-logo";
type HeaderProps = {
  onMinimizeButtonClick: any,
  isNavMinimized: boolean,
  onNavButtonClick: any,
  isNavHidden: boolean
}

function NavIcon({ isNavHidden }: { isNavHidden: boolean }) {
  if (isNavHidden) {
    return <BarsArrowDownIcon className={clsx(
      "w-7"
    )} />
  }

  return <BarsArrowUpIcon className={clsx(
    "w-7"
  )} />
}

export default function Header(
  { onMinimizeButtonClick,
    isNavMinimized,
    onNavButtonClick,
    isNavHidden
  }: HeaderProps) {
  return (
    <Navbar as="div" maxWidth="full" classNames={{ wrapper: "p-3 md:pt-2 md:pb-2 md:pr-6 md:pl-6" }} className="drop-shadow-md shadow-slate-800 bg-slate-800 md:bg-transparent backdrop-filter-none justify-end row-start-1 md:row-start-1 md:col-start-2 max-w-none">
      <NavbarContent as="div">
        <Button onClick={onMinimizeButtonClick} isIconOnly className="bg-slate-800 hover:bg-slate-700 rounded-lg hidden md:flex">
          <ArrowDownTrayIcon className={clsx(
            "w-7 transition-transform rotate-90",
            {
              "rotate-[270deg]": isNavMinimized
            }
          )} />
        </Button>
        <Button onClick={onNavButtonClick} isIconOnly className={clsx(
          "bg-slate-800 hover:bg-slate-700 rounded-lg md:hidden flex",
          {
            "bg-slate-700": !isNavHidden
          }
        )}
        >
          <NavIcon isNavHidden={isNavHidden}></NavIcon>
        </Button>
      </NavbarContent>
      <NavbarContent as="div" className="md:hidden max-w-[64px]">
        <NavLogo />
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
