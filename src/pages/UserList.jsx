import * as React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { SingleUserData } from './Home.style';
import { LoginContext } from '../Context/LoginContext';
import { Button } from '../Components/Button';

export function UserList() {
  const { users } = React.useContext(UserContext);
  const { currentUser } = useContext(LoginContext);
  return (
    <>
      <h2>Suggested Users</h2>
      {users.map((user) =>
        user._id !== currentUser._id ? (
          <SingleUserData>
            <div>
              <Link to={`/userProfile/${user._id}`}>
                <p>
                  {user.firstName}
                  {user.lastName}
                </p>
              </Link>

              <p>@{user.username}</p>
            </div>
            <Button varient="outlined">Follow</Button>
          </SingleUserData>
        ) : null
      )}
    </>
  );
}
