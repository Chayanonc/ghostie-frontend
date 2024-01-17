import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
} from "@nextui-org/react";
import React from "react";

const NavBar = () => {
  return (
    <Navbar maxWidth="full" className="bg-white border-b pl-10 pr-16">
      <NavbarBrand>
        <Link href="/">
          <Image alt="" src="/Images/Ghostie.svg" width={125} height={25} />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/" className="font-light text-gray-800 hover:cursor-pointer">
            My Ticket
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/" className="font-light text-gray-800 hover:cursor-pointer">
            Jackpot
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
