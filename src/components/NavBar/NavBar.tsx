import { Link } from 'react-router-dom';
import { ROUTES } from '../../consttants/routes';

export default function NavBar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to={ROUTES.REGISTRATION}>Register</Link>
        <Link to={ROUTES.GENDER_PREDICTOR}>Gender Predictor</Link>
        <Link to="/age-predictor">Age Predictor</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/pony">Pony</Link>
      </nav>
    </>
  );
}
