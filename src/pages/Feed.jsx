import * as React from 'react';
import { MainContainer, PostMessageContainer } from './Feed.style';
import { PostsFooter } from './Posts/PostsFooter';
import { PostsHeader } from './Posts/PostsHeader';

export function Feed({ feedToShow }) {
  return (
    <MainContainer>
      {feedToShow &&
        feedToShow.map((post) => {
          return (
            <>
              <PostsHeader post={post} />
              <PostMessageContainer>
                <h2>posts to show</h2>
                <p>{post.content}</p>
              </PostMessageContainer>
              <PostsFooter post={post} />
            </>
          );
        })}
    </MainContainer>
  );
}
