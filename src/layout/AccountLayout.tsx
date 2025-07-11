import { NavLink, Outlet } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export default function AccountLayout() {
  return (
    <div>
      <nav>
        <NavLink to={ROUTES.ACCOUNT_SETTINGS}>Accoutn settings</NavLink>
        <NavLink to={ROUTES.ACCOUNT_INFO}>Personal information</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
