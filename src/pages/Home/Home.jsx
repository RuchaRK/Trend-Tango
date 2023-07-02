/* eslint-disable no-console */
import * as React from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Feed } from '../../Components/Feed/Feed';
import { FeedContext } from '../../Context/FeedContext';
import { LoginContext } from '../../Context/LoginContext';
import { Button } from '../../Components/Button';
import {
  CreatePostContainer,
  PostInput,
  TextArea,
  ButtonContainer,
  ImageContainer,
  CrossIconContainer
} from './Home.style';
import { PageWrapper } from '../../Components/PageWrapper/PageWrapper';
import { usePostApis } from '../../Hook/usePostApis';
import { ColorPalette } from '../../Color';

export function Home() {
  const { postsToShow } = React.useContext(FeedContext);
  const { currentUser, following } = React.useContext(LoginContext);
  const [postContent, setPostContent] = React.useState('');
  const { createANewPost } = usePostApis();
  const [uploadedImage, setUploadedImage] = React.useState(null);

  const userRelatedPosts = postsToShow.filter(
    (data) =>
      data.username === currentUser.username ||
      following.find((node) => node.username === data.username)
  );

  return (
    <PageWrapper title="Home">
      <div style={{ height: '100%' }}>
        <CreatePostContainer>
          <PostInput>
            <TextArea
              name="content"
              placeholder="Start posting the latest trend you have come across..."
              value={postContent}
              onInput={(event) => setPostContent(event.target.value)}
            />
            {uploadedImage && (
              <ImageContainer>
                <CrossIconContainer>
                  <AiFillCloseCircle
                    onClick={() => setUploadedImage(null)}
                    style={{ cursor: 'pointer' }}
                  />
                </CrossIconContainer>
                <img
                  alt="img"
                  src={URL.createObjectURL(uploadedImage)}
                  height={250}
                  width={250}
                  style={{ borderRadius: '4px' }}
                />
              </ImageContainer>
            )}
          </PostInput>

          <ButtonContainer>
            <label htmlFor="file">
              <input
                id="file"
                type="file"
                onChange={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setUploadedImage(e.target.files[0]);
                }}
                style={{
                  display: 'none'
                }}
              />
              <BiImageAdd
                size={24}
                style={{
                  color: ColorPalette.primary.main,
                  cursor: 'pointer'
                }}
              />
            </label>
            <Button
              onClick={async () => {
                await createANewPost({ content: postContent, img: uploadedImage });
                setPostContent('');
                setUploadedImage(null);
              }}>
              Post
            </Button>
          </ButtonContainer>
        </CreatePostContainer>
        <Feed feedToShow={userRelatedPosts} />
      </div>
    </PageWrapper>
  );
}
