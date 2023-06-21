import * as React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { FiShare2 } from 'react-icons/fi';
import {
  MainContainer,
  PostMessageContainer,
  UserInfoContainer,
  IconContainer,
  UserData
} from './Feed.style';
import { IconButton } from '../Components/IconButton';
import { UserContext } from '../Context/UserContext';
import { getLoginToken } from '../LoginLocalStorage';
import { LoginContext } from '../Context/LoginContext';
import { FeedContext } from '../Context/FeedContext';

export function Feed({ feedToShow }) {
  const { postsToShow, setPostsToShow } = React.useContext(FeedContext);
  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const userLookUp = React.useContext(UserContext);
  const { currentUser, userBookmarks, setUserBookmarks } = React.useContext(LoginContext);

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
      if (data.error || data.errors) {
        setIsError(true);
        setErrorMessage(data.errors);
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

  console.log('UsersBookmark', userBookmarks);

  return (
    <MainContainer>
      {feedToShow &&
        feedToShow.map((post) => {
          const isPostLikedByUser = post.likes.likedBy.find((item) => item._id === currentUser._id);
          const isPostBookmarked = userBookmarks.find((item) => item._id === post._id);

          return (
            <>
              <UserInfoContainer>
                <UserData>
                  <div>
                    <p>
                      {userLookUp[post.username] && userLookUp[post.username].firstName}
                      {userLookUp[post.username] && userLookUp[post.username].lastName}
                    </p>
                  </div>
                  <p>@{post.username}</p>
                </UserData>

                <p> {post.createdAt}</p>
              </UserInfoContainer>
              <PostMessageContainer>
                <h2>posts to show</h2>
                <p>{post.content}</p>
              </PostMessageContainer>
              <IconContainer>
                <IconButton
                  onClick={() =>
                    isPostLikedByUser ? dislikeAPost(post._id) : likeAPost(post._id)
                  }>
                  {isPostLikedByUser ? (
                    <>
                      <AiFillHeart size={25} />
                      {post.likes.likeCount > 0 && post.likes.likeCount}
                    </>
                  ) : (
                    <AiOutlineHeart size={25} />
                  )}
                </IconButton>
                <IconButton>
                  <FaRegCommentAlt size={20} />
                </IconButton>
                <IconButton
                  onClick={() =>
                    isPostBookmarked ? removeBookMarkedPost(post._id) : bookMarkAPost(post._id)
                  }>
                  {isPostBookmarked ? <BsFillBookmarkFill size={20} /> : <BsBookmark size={20} />}
                </IconButton>
                <IconButton>
                  <FiShare2 size={20} />
                </IconButton>
              </IconContainer>
            </>
          );
        })}
    </MainContainer>
  );
}
