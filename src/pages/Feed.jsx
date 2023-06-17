import * as React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { BsBookmark } from 'react-icons/bs';
import { FiShare2 } from 'react-icons/fi';
import {
  MainContainer,
  PostMessageContainer,
  UserInfoContainer,
  IconContainer,
  UserData
} from './Feed.style';
import { IconButton } from '../Components/IconButton';
import { UserContext } from '../Context/UserContext';

export function Feed() {
  const [postsToShow, setPostsToShow] = React.useState([]);
  const userLookUp = React.useContext(UserContext);
  console.log(userLookUp);

  const fetchData = async () => {
    try {
      const response = await fetch('api/posts');
      const data = await response.json();

      if (data.posts) {
        setPostsToShow(data.posts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainContainer>
      {postsToShow.map((post) => (
        <>
          <UserInfoContainer>
            <UserData>
              <div>
                <p>
                  {userLookUp[post.username] && userLookUp[post.username].firstName}
                  {userLookUp[post.username] && userLookUp[post.username].lastName}
                </p>
              </div>
              <p>{post.username}</p>
            </UserData>

            <p> {post.createdAt}</p>
          </UserInfoContainer>
          <PostMessageContainer>
            <h2>posts to show</h2>
            <p>{post.content}</p>
          </PostMessageContainer>
          <IconContainer>
            <IconButton>
              <AiOutlineHeart size={25} />
              {post.likes.likeCount}
            </IconButton>
            <IconButton>
              <FaRegCommentAlt size={20} />
            </IconButton>
            <IconButton>
              <BsBookmark size={20} />
            </IconButton>
            <IconButton>
              <FiShare2 size={20} />
            </IconButton>
          </IconContainer>
        </>
      ))}
    </MainContainer>
  );
}
