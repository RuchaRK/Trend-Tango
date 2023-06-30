import * as React from 'react';
import { FeedContainer } from './Feed.style';

import { Posts } from './Posts/Posts';

export function Feed({ feedToShow }) {
  return (
    <FeedContainer>
      {feedToShow &&
        feedToShow.map((post) => {
          return <Posts post={post} />;
        })}
    </FeedContainer>
  );
}
