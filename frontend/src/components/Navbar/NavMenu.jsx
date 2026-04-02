import { NavLink } from "react-router-dom";

const NavMenu = () => {
  const linkClass =
    "text-sm text-gray-300 hover:text-white pb-1";

  const activeClass =
    "border-b-2 border-indigo-400 text-white";

  return (
    <div className="flex gap-6">
      <NavLink to="/play" className={({ isActive }) =>
        `${linkClass} ${isActive ? activeClass : ""}`
      }>
        Play
      </NavLink>

      <NavLink to="/puzzles" className={({ isActive }) =>
        `${linkClass} ${isActive ? activeClass : ""}`
      }>
        Puzzles
      </NavLink>

      <NavLink to="/learn" className={({ isActive }) =>
        `${linkClass} ${isActive ? activeClass : ""}`
      }>
        Learn
      </NavLink>

      <NavLink to="/watch" className={({ isActive }) =>
        `${linkClass} ${isActive ? activeClass : ""}`
      }>
        Watch
      </NavLink>

      <NavLink to="/community" className={({ isActive }) =>
        `${linkClass} ${isActive ? activeClass : ""}`
      }>
        Community
      </NavLink>
    </div>
  );
};

export default NavMenu;