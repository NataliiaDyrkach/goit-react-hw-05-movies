import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

function Header() {
  return (
    <div className={css.Container}>
      <ul className={css.List}>
        <li className={css.Item}>
          <NavLink className={css.NavLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.NavLink}  to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
