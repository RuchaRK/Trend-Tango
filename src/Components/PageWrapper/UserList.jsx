import * as React from 'react';
import { useContext } from 'react';
import { SlUserFollow } from 'react-icons/sl';
import { LoginContext } from '../../Context/LoginContext';
import { UserContext } from '../../Context/UserContext';
import { useUserApis } from '../../Hook/useUserApis';
import { IconButton } from '../IconButton';
import { UserCard } from '../UserCard/UserCard';
import { SingleUserData, UserListContainer } from './PageWrappers.style';

export function UserList() {
  const { users } = React.useContext(UserContext);
  const { currentUser, following } = useContext(LoginContext);
  const { followUser } = useUserApis();

  return (
    <>
      <h3>Suggestions</h3>
      <UserListContainer>
        {users.map((user) =>
          user._id !== currentUser._id && !following.find((node) => node._id === user._id) ? (
            <SingleUserData key={user._id}>
              <UserCard
                firstName={user.firstName}
                lastName={user.lastName}
                userName={user.username}
                imgUrl={user.imgUrl}
                id={user._id}
                action={
                  <IconButton onClick={() => followUser(user._id)}>
                    <SlUserFollow size={20} />
                  </IconButton>
                }
              />
            </SingleUserData>
          ) : null
        )}
      </UserListContainer>
    </>
  );
}
