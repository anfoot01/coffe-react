import { Link } from 'react-router-dom';
import './HeaderMenu.scss';

export const HeaderMenu = ({navIsActive, navClose}) => {
  return (
    <div className={`header-menu ${navIsActive ? 'is-active' : ''}`}>
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/">About</Link>
        <Link className='nav-link' to="/">Contact</Link>
        <span className="material-symbols-outlined icon-times header-menu-close icon" onClick={navClose}>close</span>
    </div>
  );
};

