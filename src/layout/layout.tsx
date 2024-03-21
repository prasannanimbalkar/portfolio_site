import React, { ReactNode } from "react";
import NavBar from "../components/NavBar";

interface LayoutProps {
  children: ReactNode;
  projectPage?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, projectPage }) => {
  return (
    <div className="z-10">
      <NavBar projectPage={projectPage}/>
      {children}
    </div>
  );
};

export default Layout;
