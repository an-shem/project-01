import { useState, useEffect } from 'react';
import type { User } from '../types';

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errMessage, seetErrMessage] = useState('');

  async function fetchUsers() {
    setLoading(true);
    try {
      const res = await fetch('https://api.escuelajs.co/api/v1/users');
      if (!res.ok) {
        throw new Error('Failed to fetch users. Status: ' + res.status);
      }
      const usersList = await res.json();
      setUsers(usersList);
    } catch (err) {
      if (err instanceof Error) {
        seetErrMessage(err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, error: errMessage };
}
