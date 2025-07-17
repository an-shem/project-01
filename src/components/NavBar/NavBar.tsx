import { ROUTES } from '../../constants/routes';
import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useCounter } from '../../hooks/useCounter';
import { cn } from 'clsx-for-tailwind';

export default function NavBar() {
  const classSelector = ({ isActive }: { isActive: boolean }) =>
    cn('hover:text-gray-400', { 'text-amber-500 underline': isActive });

  const { user, setIsAuthorized, isAuthorized } = useCurrentUser();
  const { counter } = useCounter();

  function handleLogout() {
    setIsAuthorized(false);
  }

  return (
    <>
      <nav className="flex flex-wrap justify-center items-center gap-5 min-h-20 py-5 px-10 bg-cyan-800 text-cyan-50 font-[Bebas_Neue] font-normal text-2xl">
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
        <NavLink to={ROUTES.TOGGLE_CARD} className={classSelector}>
          Toggle Card
        </NavLink>
        {user ? <div className="text-xl text-blue-400">{user.email}</div> : null}
        <div className="min-w-24 text-xl text-blue-400">Counter: {counter}</div>

        {isAuthorized ? (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        ) : null}
      </nav>
    </>
  );
}
