import React from "react";
import NavBar from "./Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="bg-background min-h-screen px-16">{children}</div>
    </>
  );
};

export default MainLayout;
