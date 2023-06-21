/* eslint-disable no-console */
import * as React from 'react';
import { Feed } from './Feed';
import { FeedContext } from '../Context/FeedContext';
import { LoginContext } from '../Context/LoginContext';
import { Button } from '../Components/Button';
import { CreatePostContainer, PostInput } from './Home.style';

export function Home() {
  const { postsToShow } = React.useContext(FeedContext);
  const { currentUser, following } = React.useContext(LoginContext);

  const createANewPost = async () => {
    try {
      const response = fetch('/api/user/posts/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken()
        }
      });
    } catch (error) {}
  };

  const userRelatedPosts = postsToShow.filter(
    (data) => data.username === (currentUser.username || following.username)
  );

  return (
    <div style={{ height: '100%' }}>
      <CreatePostContainer>
        <PostInput>
          <textarea
            style={{ padding: '10px 10px' }}
            placeholder="Start posting the latest trend you have come across..."
            rows="6"
            cols="50"
          />
        </PostInput>
        <div>
          <Button varient="outlined" onClick={() => createANewPost}>
            {' '}
            Post{' '}
          </Button>
        </div>
      </CreatePostContainer>
      <Feed feedToShow={userRelatedPosts} />
    </div>
  );
}
