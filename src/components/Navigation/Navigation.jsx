import s from "../Navigation/Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const linkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <header className={s.head}>
      <nav className={s.nav}>
        <NavLink className={linkClass} to="/">
          Home
        </NavLink>
        <NavLink className={linkClass} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
