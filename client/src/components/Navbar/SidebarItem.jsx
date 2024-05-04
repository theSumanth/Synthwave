import { NavLink } from "react-router-dom";

const SidebarItem = ({ Icon, label, path }) => {
  return (
    <li>
      <NavLink to={path}>
        {({ isActive }) => {
          return (
            <div className="flex p-2 font-medium gap-3 mx-4 my-2 text-gray-400 hover:bg-neutral-800 hover:text-white rounded-md">
              <Icon />
              <span>{label}</span>
            </div>
          );
        }}
      </NavLink>
    </li>
  );
};

export default SidebarItem;
