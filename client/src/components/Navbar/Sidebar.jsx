import { Form } from "react-router-dom";

import logo from "/images/logo.png";
import { LogOut } from "lucide-react";
import { getUserDetails } from "../../util/auth";
import FavPodcasts from "../FavPodcasts";
import NavbarHelper from "../../UI/NavbarHelper";

const Sidebar = ({ children }) => {
  const user = getUserDetails();

  return (
    <aside className="h-screen top-0 sticky w-1/4 bg-black flex flex-col justify-between max-md:w-1/6 min-w-20">
      <NavbarHelper>
        <div className="flex items-center justify-start p-2 mx-4 max-md:mx-0 max-md:justify-center">
          <img
            src={logo}
            alt="Music waves in a shape of a moon"
            className="aspect-square h-8 w-8 max-md:h-6 max-md:w-6"
          />
          <h1 className="font-bold text-base max-md:hidden">Synthwave</h1>
        </div>
        <ul>{children}</ul>
      </NavbarHelper>

      <FavPodcasts />

      <NavbarHelper>
        <Form
          action="/logout"
          method="post"
          className={
            "flex text-red-500 mx-4 my-2 p-2 rounded max-md:mx-0 max-md:justify-center"
          }
        >
          <button type="submit" className="flex gap-2 hover:scale-105">
            <LogOut />
            <span className="max-md:hidden">Logout</span>
          </button>
        </Form>
        <section className="mx-4 p-2 flex flex-col rounded max-md:hidden">
          <h1 className="font-bold text-base line-clamp-1">
            {user.name} @{user.username}
          </h1>
          <span className="text-xs overflow-hidden">{user.email}</span>
        </section>
      </NavbarHelper>
    </aside>
  );
};

export default Sidebar;
