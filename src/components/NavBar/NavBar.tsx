import { ROUTES } from '../../constants/routes';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar() {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? styles.navLinkActive : styles.navLink;
  };
  return (
    <>
      <nav className={styles.navBar}>
        <NavLink to="/" className={classSelector}>
          Home
        </NavLink>
        <NavLink to={ROUTES.ABOUT} className={classSelector}>
          About
        </NavLink>
        <NavLink to={ROUTES.CONTACT} className={classSelector}>
          Contact
        </NavLink>
        <NavLink to="/products" className={classSelector}>
          Products
        </NavLink>
        <NavLink to={ROUTES.REGISTRATION} className={classSelector}>
          Register
        </NavLink>
        <NavLink to={ROUTES.GENDER_PREDICTOR} className={classSelector}>
          Gender Predictor
        </NavLink>
        <NavLink to="/age-predictor" className={classSelector}>
          Age Predictor
        </NavLink>
        <NavLink to="/counter" className={classSelector}>
          Counter
        </NavLink>
        <NavLink to="/pony" className={classSelector}>
          Pony
        </NavLink>
        <NavLink to={ROUTES.ACCOUNT} className={classSelector}>
          Account
        </NavLink>
      </nav>
    </>
  );
}
