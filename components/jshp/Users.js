import { useState } from 'react';
import OneUser from './OneUser';
import FetchUser from './FetchUser';

export default function Users({ propsUsers }) {
  const
    [stateUsers, setStateUsers] = useState([]);

  return <>
    <button onClick={() => setStateUsers(stateUsers.concat(1 + propsUsers.length + stateUsers.length))}>addUser</button>
    {propsUsers.map(user => <OneUser key={user.id} user={user} />)}
    {stateUsers.map(id => <FetchUser key={id} id={id} />)}
  </>;
}