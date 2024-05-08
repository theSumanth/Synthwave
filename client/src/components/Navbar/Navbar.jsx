import { useContext } from "react";
import { CirclePlus, Flame, Home, Search } from "lucide-react";

import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";
import { PageContext } from "../../store/PageContextProvider";
import { checkIsAdmin } from "../../util/auth";

const Navbar = () => {
  const pageCtx = useContext(PageContext);

  const isAdmin = checkIsAdmin();

  const navbarElements = [
    { text: "Home", Icon: Home, path: "/home" },
    { text: "Search", Icon: Search, path: "/home/search" },
    { text: "Trending Music", Icon: Flame, path: "/home/trending-music" },
    {
      text: "Post a song",
      Icon: CirclePlus,
      path: "/home/post-song",
    },
  ];

  return (
    <Sidebar>
      {navbarElements.map((element) => {
        if (!isAdmin && element.path === "/home/post-song") return null;

        return (
          <SidebarItem
            key={element.text}
            Icon={element.Icon}
            label={element.text}
            path={element.path}
            onPathChange={pageCtx.changePageStatus}
            currentPath={pageCtx.pageStatus}
          />
        );
      })}
    </Sidebar>
  );
};

export default Navbar;
