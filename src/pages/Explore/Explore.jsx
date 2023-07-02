import * as React from 'react';
import { Feed } from '../../Components/Feed/Feed';
import { FeedContext } from '../../Context/FeedContext';
import { PageWrapper } from '../../Components/PageWrapper/PageWrapper';

export function Explore() {
  const { postsToShow } = React.useContext(FeedContext);

  return (
    <PageWrapper title="Explore">
      <div style={{ paddingTop: '24px' }}>
        <Feed feedToShow={postsToShow} />
      </div>
    </PageWrapper>
  );
}
