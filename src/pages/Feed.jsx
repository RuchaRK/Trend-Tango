import * as React from 'react';
import { MainContainer } from './Feed.style';

import { Posts } from './Posts/Posts';

export function Feed({ feedToShow, title }) {
  console.log(title);
  return (
    <MainContainer>
      <h2> {title}</h2>
      {feedToShow &&
        feedToShow.map((post) => {
          return <Posts post={post} />;
        })}
    </MainContainer>
  );
}
