import * as React from 'react';
import { toast } from 'react-toastify';
import { getLoginToken } from '../LoginLocalStorage';
import { FeedContext } from '../Context/FeedContext';
import { LoginContext } from '../Context/LoginContext';
import { uploadImage } from './uploadImageApi';

export const usePostApis = () => {
  const { setPostsToShow } = React.useContext(FeedContext);
  const { setUserBookmarks } = React.useContext(LoginContext);

  const likeAPost = async (idValue) => {
    try {
      const response = await fetch(`/api/posts/like/${idValue}`, {
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
      const response = await fetch(`/api/posts/dislike/${idValue}`, {
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
      const response = await fetch(`/api/users/bookmark/${idValue}/`, {
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
        toast.success('Post Bookmarked!!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeBookMarkedPost = async (idValue) => {
    try {
      const response = await fetch(`/api/users/remove-bookmark/${idValue}/`, {
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
        toast.success('Post removed from Bookmarks.');
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

      if (data.posts) {
        setPostsToShow(data.posts);
        toast.success('Comment added');
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
        toast.error('Post Deleted');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createANewPost = async ({ content, img }) => {
    try {
      let url;
      if (img) {
        const response = await uploadImage({ img });
        url = response.url;
      }
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          postData: { content, imgUrl: url }
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken()
        }
      });
      const data = await response.json();
      if (data.posts) {
        setPostsToShow(data.posts);
        toast.success('Post Created!!');
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
    createANewPost
  };
};
