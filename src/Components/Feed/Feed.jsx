import * as React from 'react';
import { FeedContainer } from './Feed.style';

import { Post } from '../Post/Post';

export function Feed({ feedToShow }) {
  return (
    <FeedContainer>
      {feedToShow &&
        feedToShow.map((post) => {
          return <Post post={post} key={post._id}/>;
        })}
    </FeedContainer>
  );
}
