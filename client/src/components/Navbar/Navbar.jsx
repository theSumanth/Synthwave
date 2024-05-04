import { DiamondPlus, Home, Search } from "lucide-react";

import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";

const Navbar = () => {
  const navbarElements = [
    { text: "Home", Icon: Home, path: "/home" },
    { text: "Search", Icon: Search, path: "/home/search" },
    { text: "Create a Podcast", Icon: DiamondPlus, path: "/create-podcast" },
  ];

  return (
    <Sidebar>
      {navbarElements.map((element) => (
        <SidebarItem
          key={element.text}
          Icon={element.Icon}
          label={element.text}
          path={element.path}
        />
      ))}
    </Sidebar>
  );
};

export default Navbar;
