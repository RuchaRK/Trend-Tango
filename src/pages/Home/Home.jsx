/* eslint-disable no-console */
import * as React from 'react';
import { Feed } from '../../Components/Feed/Feed';
import { FeedContext } from '../../Context/FeedContext';
import { LoginContext } from '../../Context/LoginContext';
import { Button } from '../../Components/Button';
import { CreatePostContainer, PostInput, TextArea } from './Home.style';
import { getLoginToken } from '../../LoginLocalStorage';
import { PageWrapper } from '../../Components/PageWrapper/PageWrapper';

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
    <PageWrapper title="Home">
      <div style={{ height: '100%' }}>
        <CreatePostContainer>
          <PostInput>
            <TextArea
              name="content"
              placeholder="Start posting the latest trend you have come across..."
              value={postContent}
              onInput={(event) => setPostContent(event.target.value)}
            />
          </PostInput>

          <Button
            onClick={async () => {
              await createANewPost();
              setPostContent('');
            }}>
            Post
          </Button>
        </CreatePostContainer>
        <Feed feedToShow={userRelatedPosts} />
      </div>
    </PageWrapper>
  );
}
