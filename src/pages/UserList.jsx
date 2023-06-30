import * as React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SlUserFollow } from 'react-icons/sl';
import { UserContext } from '../Context/UserContext';
import { LoginContext } from '../Context/LoginContext';
import { usePostActions } from '../Hook/usePostActions';
import { UserData } from './Feed.style';
import {
  ImageContainer,
  ImageTextContainer,
  SingleUserData,
  UserListContainer
} from './Home.style';
import { IconButton } from '../Components/IconButton';

export function UserList() {
  const { users } = React.useContext(UserContext);
  const { currentUser, following } = useContext(LoginContext);
  const { followUser } = usePostActions();

  return (
    <>
      <h3>Suggestions</h3>
      <UserListContainer>
        {users.map((user) =>
          user._id !== currentUser._id && !following.find((node) => node._id === user._id) ? (
            <SingleUserData>
              <ImageTextContainer>
                <ImageContainer />
                <UserData>
                  <Link to={`/userProfile/${user._id}`}>
                    <p>
                      {user.firstName}
                      {user.lastName}
                    </p>
                  </Link>

                  <p>@{user.username}</p>
                </UserData>
              </ImageTextContainer>

              <IconButton onClick={() => followUser(user._id)}>
                <SlUserFollow size={20} />
              </IconButton>
            </SingleUserData>
          ) : null
        )}
      </UserListContainer>
    </>
  );
}
