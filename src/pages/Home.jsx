/* eslint-disable no-console */
import * as React from 'react';
import { Feed } from './Feed';
import { FeedContext } from '../Context/FeedContext';
import { LoginContext } from '../Context/LoginContext';
import { Button } from '../Components/Button';
import { CreatePostContainer, PostInput } from './Home.style';
import { getLoginToken } from '../LoginLocalStorage';

export function Home() {
  const { postsToShow, setPostsToShow } = React.useContext(FeedContext);
  const { currentUser, following } = React.useContext(LoginContext);
  const [postContent, setPostContent] = React.useState('');

  const createANewPost = async () => {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          postData: { content: postContent }
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
      }
    } catch (error) {
      console.error(error);
    }
  };

  const userRelatedPosts = postsToShow.filter(
    (data) =>
      data.username === currentUser.username ||
      following.find((node) => node.username === data.username)
  );

  return (
    <div style={{ height: '100%' }}>
      <CreatePostContainer>
        <PostInput>
          <textarea
            name="content"
            style={{ padding: '10px 10px' }}
            placeholder="Start posting the latest trend you have come across..."
            rows="6"
            cols="50"
            onInput={(event) => setPostContent(event.target.value)}
          />
        </PostInput>
        <div>
          <Button varient="outlined" onClick={() => createANewPost()}>
            Post
          </Button>
        </div>
      </CreatePostContainer>
      <Feed feedToShow={userRelatedPosts} title="Home" />
    </div>
  );
}
