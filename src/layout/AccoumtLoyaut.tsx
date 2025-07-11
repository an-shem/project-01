import { Link } from 'react-router-dom';

export default function AccoumtLoyaut() {
  return (
    <div>
      <nav>
        <Link to="account/settings"></Link>
        <Link to="account/information"></Link>
      </nav>
    </div>
  );
}
