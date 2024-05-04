import { NavLink } from "react-router-dom";

const SidebarItem = ({ Icon, label, path }) => {
  let cssClass =
    "flex p-2 font-medium gap-3 mx-4 my-2 text-gray-400 hover:bg-neutral-800 hover:text-white rounded-md";

  return (
    <li>
      <NavLink to={path} end={label === "Home"}>
        {({ isActive }) => {
          // if (isActive) {
          //   cssClass += " bg-neutral-800";
          // }

          return (
            <div className={cssClass}>
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
