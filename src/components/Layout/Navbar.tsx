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
          <Image alt="" src="/Svg/Ghostie.svg" width={125} height={25} />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end" className="gap-10">
        <NavbarItem>
          <ConnectKitButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
