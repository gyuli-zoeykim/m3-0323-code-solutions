/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function User({ userId, onCancel }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => {
      if(!res.ok) {
        throw new Error(`status code ${res.status}`);
      } return res.json();
    })
    .then(res => {
      setIsLoading(false);
      setUser(res);
    })
    .catch(err => {
      setIsLoading(false);
      setError(err);
    })
  }, [userId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
