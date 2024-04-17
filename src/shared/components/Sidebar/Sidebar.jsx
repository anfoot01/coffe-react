import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/" className={({ isActive }) => isActive ? "sidebar-link is-active" : "sidebar-link"}>
        <span className="material-symbols-outlined sidebar-link__icon icon-home icon">home</span>
      </NavLink>
      <NavLink to="/cart" className={({ isActive }) => isActive ? "sidebar-link is-active" : "sidebar-link"}>
        <span className="material-symbols-outlined sidebar-link__icon icon-cart icon">person</span>
      </NavLink>
      <NavLink to="/favorites" className={({ isActive }) => isActive ? "sidebar-link is-active" : "sidebar-link"}>
        <span className="material-symbols-outlined sidebar-link__icon icon-heart icon">favorite</span>
      </NavLink>
      <NavLink to="/notification" className={({ isActive }) => isActive ? "sidebar-link is-active" : "sidebar-link"}>
        <span className="material-symbols-outlined sidebar-link__icon icon-bell icon">notifications</span>
      </NavLink>
    </div>
  )
}

