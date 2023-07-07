/* eslint-disable no-console */
import * as React from 'react';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import { BiImageAdd } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdSort } from 'react-icons/md';
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
  CrossIconContainer,
  FilterContainer
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
  const [filterType, setFilterType] = React.useState('');

  const userRelatedPosts = postsToShow.filter(
    (data) =>
      data.username === currentUser.username ||
      following.find((node) => node.username === data.username)
  );

  userRelatedPosts.sort((a, b) => {
    if (filterType === 'likes') {
      return b.likes.likeCount - a.likes.likeCount;
    }
    if (filterType === 'date') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return 0;
  });

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
        <FilterContainer>
          <p>{filterType === 'date' ? 'Latest Posts' : 'Trending'}</p>
          <Menu
            menuButton={
              <MenuButton
                style={{
                  background: '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  border: 'none',
                  justifyContent: 'center'
                }}>
                <MdSort size={20} />
              </MenuButton>
            }>
            <MenuItem onClick={() => setFilterType('date')}>Latest</MenuItem>
            <MenuItem onClick={() => setFilterType('likes')}>Trending</MenuItem>
          </Menu>
        </FilterContainer>
        <Feed feedToShow={userRelatedPosts} />
      </div>
    </PageWrapper>
  );
}
