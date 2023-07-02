import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../../Components/Post/Post';
import { PageWrapper } from '../../Components/PageWrapper/PageWrapper';

export function SinglePost() {
  const { postId } = useParams();
  const [singlePost, setSinglePost] = React.useState();

  const fetchUserRelatedPosts = async () => {
    try {
      const response = await fetch(`/api/posts/${postId}`);
      const data = await response.json();

      if (data.post) {
        setSinglePost(data.post);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchUserRelatedPosts();
  }, [postId]);

  if (!singlePost) {
    return null;
  }

  return (
    <PageWrapper title="Post">
      <div style={{ paddingTop: '24px' }}>
        <Post post={singlePost} showComments />
      </div>
    </PageWrapper>
  );
}
