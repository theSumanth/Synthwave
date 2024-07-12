import { useContext, useEffect } from "react";
import { CirclePlus, Flame, Home, Search } from "lucide-react";

import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";
import { PageContext } from "../../store/PageContextProvider";
import { checkIsAdmin } from "../../util/auth";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const pageCtx = useContext(PageContext);

  const isAdmin = checkIsAdmin();

  const navbarElements = [
    { text: "Home", Icon: Home, path: "/home" },
    { text: "Search", Icon: Search, path: "/home/search" },
    { text: "Trending Podcasts", Icon: Flame, path: "/home/trending-podcasts" },
    {
      text: "Create a Podcast",
      Icon: CirclePlus,
      path: "/home/create-podcast",
    },
  ];

  const { pathname } = useLocation();

  useEffect(() => {
    pageCtx.changePageStatus(pathname);
  }, [pathname, pageCtx]);

  return (
    <Sidebar>
      {navbarElements.map((element) => {
        if (!isAdmin && element.path === "/home/create-podcast") return null;

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
