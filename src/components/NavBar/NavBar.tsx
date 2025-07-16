import { ROUTES } from '../../constants/routes';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useCounter } from '../../hooks/useCounter';

export default function NavBar() {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? styles.navLinkActive : styles.navLink;
  };
  const { user, setIsAuthorized, isAuthorized } = useCurrentUser();
  const { counter } = useCounter();

  function handleLogout() {
    setIsAuthorized(false);
  }

  return (
    <>
      <nav className="flex flex-wrap justify-center items-center gap-4 min-h-14 p-6  bg-pink-200 ">
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
          Creaete Product
        </NavLink>
        <NavLink to="/users" className={classSelector}>
          Users
        </NavLink>
        <NavLink to={ROUTES.REGISTRATION} className={classSelector}>
          Sign Up
        </NavLink>
        <NavLink to={ROUTES.LOGIN} className={classSelector}>
          Sign In
        </NavLink>
        <NavLink to={ROUTES.ACCOUNT} className={classSelector}>
          Account
        </NavLink>
        <NavLink to="/counter" className={classSelector}>
          Counter
        </NavLink>
        <NavLink to={ROUTES.GENDER_PREDICTOR} className={classSelector}>
          Gender Predictor
        </NavLink>
        <NavLink to="/age-predictor" className={classSelector}>
          Age Predictor
        </NavLink>
        <NavLink to="/pony" className={classSelector}>
          Pony
        </NavLink>
        <NavLink to={'/galery'} className={classSelector}>
          Galery
        </NavLink>
        {user ? <div>{user.email}</div> : null}
        <div>Counter: {counter}</div>

        {isAuthorized ? (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        ) : null}
      </nav>
    </>
  );
}
