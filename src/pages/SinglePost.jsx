import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Posts } from './Posts/Posts';

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
    <div>
      <h1>on Single post page</h1>
      <Posts post={singlePost} showComments />
    </div>
  );
}
