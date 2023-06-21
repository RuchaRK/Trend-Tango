import * as React from 'react';
import { Feed } from './Feed';
import { FeedContext } from '../Context/FeedContext';

export function Explore() {
  const { postsToShow } = React.useContext(FeedContext);

  return <Feed feedToShow={postsToShow} />;
}
