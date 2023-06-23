import * as React from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import { Button } from '../Components/Button';
import { UserMainContainer, UserData } from './UserProfile.style';
import { usePostActions } from '../Hook/usePostActions';
import { LoginContext } from '../Context/LoginContext';
import { Feed } from './Feed';

export function UserProfile() {
  const { id } = useParams();
  const [singleUserData, setSingleUserData] = React.useState();
  const { followUser, unFollowAUser } = usePostActions();
  const { currentUser, following, followers } = React.useContext(LoginContext);
  const [selectedUserPosts, setSelecteduserPosts] = React.useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const fetchSingleUser = async () => {
    try {
      const response = await fetch(`/api/users/${id}`);
      const data = await response.json();

      if (data.user) {
        setSingleUserData(data.user);
        const postResponse = await fetch(`/api/posts/user/${data.user.username}`);
        const postData = await postResponse.json();
        setSelecteduserPosts(postData.posts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchSingleUser();
  }, [id]);

  if (!singleUserData) {
    return null;
  }

  const isUserAlreadyFollowed = following.find((node) => node._id === singleUserData._id);

  // console.log('IsuserAlready Followed:', isUserAlreadyFollowed);

  const followingUsers =
    singleUserData._id === currentUser._id ? following : singleUserData.following;

  return (
    <UserMainContainer>
      <UserData>
        <h2>
          {singleUserData.lastName}
          {singleUserData.firstName}
        </h2>
        <p>@{singleUserData.username}</p>
        <button onClick={openModal}>Following:{followingUsers.length}</button>
        <p>
          {singleUserData._id === currentUser._id
            ? `Followers:${followers.length}`
            : `Followers:${singleUserData.followers}`}
        </p>

        <Modal isOpen={modalIsOpen}>
          <div>
            {followingUsers.map((info) => (
              <ul>
                <li>
                  {info.firstName} {info.lastName}
                </li>
                <li>@{info.username}</li>
                <li>
                  <Button varient="outlined" onClick={() => unFollowAUser(info._id)}>
                    UnFollow
                  </Button>
                </li>
              </ul>
            ))}
            <button onClick={closeModal}>close</button>
          </div>
        </Modal>
      </UserData>

      {singleUserData._id === currentUser._id ? (
        <Button varient="outlined" onClick={() => followUser(singleUserData._id)}>
          Edit
        </Button>
      ) : (
        <Button
          varient="outlined"
          onClick={() =>
            isUserAlreadyFollowed
              ? unFollowAUser(singleUserData._id)
              : followUser(singleUserData._id)
          }>
          {isUserAlreadyFollowed ? `UnFollow` : `Follow`}
        </Button>
      )}
      <Feed feedToShow={selectedUserPosts} />
    </UserMainContainer>
  );
}
