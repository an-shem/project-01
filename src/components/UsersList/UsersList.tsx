import { useEffect, useState } from 'react';
import type { User } from '../../types';
import { Link } from 'react-router-dom';

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    const res = await fetch('https://api.escuelajs.co/api/v1/users');
    const usersList = await res.json();
    setUsers(usersList);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

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
