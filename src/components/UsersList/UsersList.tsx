import { Link } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';

export default function UsersList() {
  //custom hook
  const { users, loading, error } = useUsers();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>UsersList</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <img
              src={u.avatar}
              alt="avatar"
              width={'200px'}
              onError={(e) =>
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                (e.target.src = '/user-default-avatar.jpg')
              }
            />
            <Link to={`/users/${u.id}`}>{u.name}</Link>
            <p>{u.email}</p>
            <p>{u.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
