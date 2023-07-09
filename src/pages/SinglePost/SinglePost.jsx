import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../../Components/Post/Post';
import { PageWrapper } from '../../Components/PageWrapper/PageWrapper';
import { FeedContext } from '../../Context/FeedContext';

export function SinglePost() {
  const { postId } = useParams();
  const { postsToShow } = React.useContext(FeedContext);
  const singlePost = postsToShow.find((post) => post._id === postId);

  return (
    <PageWrapper title="Post">
      <div style={{ paddingTop: '24px' }}>
        <Post post={singlePost} showComments />
      </div>
    </PageWrapper>
  );
}
