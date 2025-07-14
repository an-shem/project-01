import { useEffect, useState } from 'react';
import type { User } from '../../types';
import { unstable_batchedUpdates } from 'react-dom';
import { Link } from 'react-router-dom';

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const res = await fetch('https://api.escuelajs.co/api/v1/users');
    const usersRes = await res.json();
    setUsers(usersRes);
  }

  return (
    <div>
      <h2>UsersList</h2>
      <ul>
        {users.map((u) => (
          <li key={'user ' + u.id}>
            <h3>{u.name}</h3>
            <img src={u.avatar} alt="user" />
            <p>{u.email}</p>
            <p>{u.role}</p>
            <Link to={`/users/${u.id}`}>To user</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
