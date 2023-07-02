import * as React from 'react';
import { getLoginToken } from '../LoginLocalStorage';
import { LoginContext } from '../Context/LoginContext';
import { uploadImage } from './uploadImageApi';

export const useUserApis = () => {
  const { setFollowing, setCurrentUser } = React.useContext(LoginContext);

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

  const editUserDetails = async ({ singleUserData, setSingleUserData, img }) => {
    try {
      let url;
      if (img) {
        const response = await uploadImage({ img });
        url = response.url;
      }

      const editResponse = await fetch('/api/users/edit', {
        method: 'POST',
        body: JSON.stringify({
          userData: { ...singleUserData, imgUrl: url }
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken()
        }
      });

      const editedData = await editResponse.json();

      if (editedData.user) {
        setSingleUserData({ ...editedData.user });
        setCurrentUser(editedData.user);
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
