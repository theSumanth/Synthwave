import { NavLink } from "react-router-dom";

const SidebarItem = ({
  Icon,
  label,
  path,
  onPathChange,
  currentPath,
  source,
}) => {
  let cssClass =
    "flex p-2 items-center font-medium gap-3 mx-4 my-2 text-gray-400 hover:bg-neutral-800 hover:text-white rounded-md max-md:mx-0 max-md:justify-center";

  if (currentPath === path) {
    cssClass += " bg-neutral-800";
  }

  return (
    <li>
      <NavLink to={path} onClick={() => onPathChange(path)}>
        <div className={cssClass}>
          {source && <Icon source={source} />}
          {!source && <Icon />}
          <span className="max-md:hidden overflow-hidden">{label}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
