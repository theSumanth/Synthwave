import { useContext } from "react";
import { DiamondPlus, Home, Search } from "lucide-react";

import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";
import { PageContext } from "../../store/PageContextProvider";

const Navbar = () => {
  const pageCtx = useContext(PageContext);

  const navbarElements = [
    { text: "Home", Icon: Home, path: "/home" },
    { text: "Search", Icon: Search, path: "/home/search" },
    {
      text: "Create a Podcast",
      Icon: DiamondPlus,
      path: "/home/create-podcast",
    },
  ];

  return (
    <Sidebar>
      {navbarElements.map((element) => (
        <SidebarItem
          key={element.text}
          Icon={element.Icon}
          label={element.text}
          path={element.path}
          onPathChange={pageCtx.changePageStatus}
          currentPath={pageCtx.pageStatus}
        />
      ))}
    </Sidebar>
  );
};

export default Navbar;
