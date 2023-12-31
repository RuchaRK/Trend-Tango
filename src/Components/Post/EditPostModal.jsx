import * as React from 'react';
import { toast } from 'react-toastify';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { usePostApis } from '../../Hook/usePostApis';
import { CreatePostContainer, PostInput, TextArea } from '../../pages/Home/Home.style';

export function EditPostModal({ isOpen, closeModal, post }) {
  const { editPost } = usePostApis();
  const [updatePostContent, setUpdatePostContent] = React.useState(post.content);

  const updatePost = async (postIdValue, postData) => {
    await editPost(postIdValue, postData);
    toast.success('Post edited successfully');
    closeModal(postIdValue);
  };

  return (
    <Modal
      isOpen={isOpen}
      height="auto"
      width="800px"
      title="Edit Your Post"
      closeModal={() => closeModal()}
    >
      <CreatePostContainer style={{margin: "16px 0px", padding: 0, background: "#fff"}}>
        <PostInput>
          <TextArea
            name="content"
            placeholder="Start posting the latest trend you have come across..."
            value={updatePostContent}
            onInput={(event) => setUpdatePostContent(event.target.value)}
          />
        </PostInput>

        <Button onClick={() => updatePost(post._id, { content: updatePostContent })}>Update</Button>
      </CreatePostContainer>
    </Modal>
  );
}
