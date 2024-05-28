/* eslint-disable react/no-unknown-property */
import { NavLink } from "react-router-dom";

const SidebarItem = ({
  Icon,
  label,
  path,
  onPathChange,
  currentPath,
  source,
}) => {
  return (
    <li>
      <NavLink
        to={path}
        onClick={() => (source ? null : onPathChange(path))}
        className={`relative group flex items-center max-md:justify-center max-md:mx-0 mx-4 my-2 p-2 gap-3 font-medium rounded-md cursor-pointer transition-colors 
        ${
          currentPath === path
            ? "bg-gradient-to-tr from-purple-200 to-purple-100 text-neutral-900"
            : "hover:bg-purple-600"
        }
        `}
      >
        {source && <Icon source={source} />}
        {!source && <Icon />}
        <span className="max-md:hidden line-clamp-1 overflow-hidden">
          {label}
        </span>

        {!source && (
          <div className="absolute invisible left-full rounded-md px-2 py-2 text-sm text-purple-200 whitespace-nowrap bg-neutral-700 group-hover:visible opacity-15 -translate-x-3 group-hover:opacity-100 group-hover:-translate-x-0 transition-all ml-6">
            {label}
          </div>
        )}
      </NavLink>
    </li>
  );
};

export default SidebarItem;
