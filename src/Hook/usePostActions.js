import * as React from 'react';
import { getLoginToken } from '../LoginLocalStorage';
import { FeedContext } from '../Context/FeedContext';
import { LoginContext } from '../Context/LoginContext';

export const usePostActions = () => {
  const { setPostsToShow } = React.useContext(FeedContext);
  const { setUserBookmarks, setFollowing } = React.useContext(LoginContext);

  const likeAPost = async (idValue) => {
    try {
      const response = await fetch(`api/posts/like/${idValue}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken()
        }
      });
      const data = await response.json();
      if (data.posts) {
        setPostsToShow(data.posts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const dislikeAPost = async (idValue) => {
    try {
      const response = await fetch(`api/posts/dislike/${idValue}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken()
        }
      });
      const data = await response.json();

      if (data.posts) {
        setPostsToShow(data.posts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const bookMarkAPost = async (idValue) => {
    try {
      const response = await fetch(`api/users/bookmark/${idValue}/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken()
        }
      });
      const data = await response.json();
      if (data.bookmarks) {
        setUserBookmarks(data.bookmarks);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeBookMarkedPost = async (idValue) => {
    try {
      const response = await fetch(`api/users/remove-bookmark/${idValue}/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken()
        }
      });
      const data = await response.json();
      if (data.bookmarks) {
        setUserBookmarks(data.bookmarks);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editPost = async (idValue, postData) => {
    try {
      const response = await fetch(`/api/posts/edit/${idValue}`, {
        method: 'POST',
        body: JSON.stringify({
          postData: { ...postData }
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken()
        }
      });

      const data = await response.json();
      console.log(data.posts);
      if (data.posts) {
        setPostsToShow(data.posts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async (idValue) => {
    try {
      const response = await fetch(`/api/posts/${idValue}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken()
        }
      });
      const data = await response.json();
      if (data.posts) {
        setPostsToShow(data.posts);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
  return {
    likeAPost,
    dislikeAPost,
    deletePost,
    editPost,
    bookMarkAPost,
    removeBookMarkedPost,
    followUser,
    unFollowAUser
  };
};
