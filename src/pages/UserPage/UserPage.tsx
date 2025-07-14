import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { User } from '../../types';

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | undefined>(undefined);

  async function fetchUser(id: string | undefined) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    const obj = await res.json();
    setUser(obj);
  }

  useEffect(() => {
    fetchUser(id);
  }, [id]);

  return (
    <div>
      <h1>UserPage</h1>
      <br />
      <li>
        <h3>{user?.name}</h3>
        <img
          src={user?.avatar}
          alt="avatar"
          width={'200px'}
          onError={(e) =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (e.target.src = '/user-default-avatar.jpg')
          }
        />
        <p>{user?.email}</p>
        <p>{user?.role}</p>
      </li>
    </div>
  );
}
