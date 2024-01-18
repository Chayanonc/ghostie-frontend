import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
} from "@nextui-org/react";
import { ConnectKitButton } from "connectkit";
import React from "react";

const NavBar = () => {
  return (
    <Navbar maxWidth="full" className="bg-white border-b pl-10 pr-16">
      <NavbarBrand>
        <Link href="/">
          <Image alt="" src="/Images/Ghostie.svg" width={125} height={25} />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end" className="gap-10">
        <NavbarItem>
          <Link
            href="/"
            className="font-light text-gray-800 hover:cursor-pointer"
          >
            My Ticket
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/"
            className="font-light text-gray-800 hover:cursor-pointer"
          >
            Jackpot
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ConnectKitButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
