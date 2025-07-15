import { ROUTES } from '../../constants/routes';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import { useCurrentUser } from '../../hooks/useCurrentUser';

export default function NavBar() {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? styles.navLinkActive : styles.navLink;
  };
  const { user } = useCurrentUser();
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
        <NavLink to="/products" className={classSelector} end>
          Products
        </NavLink>
        <NavLink to="/products/add" className={classSelector}>
          Add Product
        </NavLink>
        <NavLink to="/users" className={classSelector}>
          Users
        </NavLink>
        <NavLink to="/product/add" className={classSelector}>
          Creaete Product
        </NavLink>
        <NavLink to={ROUTES.REGISTRATION} className={classSelector}>
          Sign Up
        </NavLink>
        <NavLink to={ROUTES.LOGIN} className={classSelector}>
          Sign In
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
        {user?.email}
      </nav>
    </>
  );
}
