import * as React from 'react';
import { getLoginToken } from '../LoginLocalStorage';
import { LoginContext } from '../Context/LoginContext';

export const useUserApis = () => {
  const { setFollowing } = React.useContext(LoginContext);

  const followUser = async (idValue) => {
    try {
      const response = await fetch(`/api/users/follow/${idValue}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken()
        }
      });
      const data = await response.json();

      if (data.user) {
        setFollowing(data.user.following);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const unFollowAUser = async (idValue) => {
    try {
      const response = await fetch(`/api/users/unfollow/${idValue}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken()
        }
      });
      const data = await response.json();

      if (data) {
        setFollowing(data.user.following);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editUserDetails = async ({ singleUserData, setSingleUserData }) => {
    try {
      const editResponse = await fetch('/api/users/edit', {
        method: 'POST',
        body: JSON.stringify({
          userData: { ...singleUserData }
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken()
        }
      });

      const editedData = await editResponse.json();
      console.log(editedData);

      if (editedData.user) {
        setSingleUserData({ ...editedData.user });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    followUser,
    unFollowAUser,
    editUserDetails
  };
};
