import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../../Components/Post/Post';
import { PageWrapper } from '../../Components/PageWrapper/PageWrapper';
import { FeedContext } from '../../Context/FeedContext';

export function SinglePost() {
  const { postId } = useParams();
  const { postsToShow } = React.useContext(FeedContext);
  const singlePost = postsToShow.find((post) => post._id === postId);

  console.log(singlePost);

  // async function fetchUserRelatedPosts() {
  //   try {
  //     const response = await fetch(`/api/posts/${postId}`);
  //     const data = await response.json();

  //     if (data.post) {
  //       setSinglePost(data.post);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // React.useEffect(() => {
  //   fetchUserRelatedPosts();
  // }, [postId]);

  // if (!singlePost) {
  //   return null;
  // }

  return (
    <PageWrapper title="Post">
      <div style={{ paddingTop: '24px' }}>
        <Post post={singlePost} showComments />
      </div>
    </PageWrapper>
  );
}
