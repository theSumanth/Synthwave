import { NavLink } from "react-router-dom";

import { LogOut } from "lucide-react";
import logo from "/images/logo.png";
import { getUserDetails } from "../../util/auth";

const Sidebar = ({ children }) => {
  const user = getUserDetails();

  return (
    <aside className="h-screen top-0 sticky w-1/4 bg-black flex flex-col justify-between max-md:w-1/6">
      <main className="bg-[#151515] m-2 py-4 px-2 rounded-md">
        <div className="flex items-center justify-start p-2 mx-4 max-md:mx-0 max-md:justify-center">
          <img
            src={logo}
            alt="Music waves in a shape of a moon"
            className="aspect-square h-8 w-8 max-md:h-6 max-md:w-6"
          />
          <h1 className="font-bold text-base max-md:hidden">Synthwave</h1>
        </div>
        <ul>{children}</ul>
      </main>
      <div className="flex flex-col bg-[#151515] m-2 py-4 px-2 rounded-md">
        <NavLink
          to={"/logout"}
          className={
            "flex gap-2 text-red-500 mx-4 my-2 p-2 hover:bg-neutral-800 rounded max-md:mx-0 max-md:justify-center"
          }
        >
          <LogOut />
          <span className="max-md:hidden">Logout</span>
        </NavLink>
        <section className="mx-4 p-2 flex flex-col rounded max-md:hidden">
          <h1 className="font-bold text-base">{user.username}</h1>
          <span className="text-xs overflow-hidden">{user.email}</span>
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
