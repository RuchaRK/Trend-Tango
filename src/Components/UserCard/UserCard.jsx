import { useNavigate } from 'react-router-dom';
import {
  NameContainer,
  UserCardContainer,
  UserDetailsContainer,
  UserIconAndDetails,
  UserNameContainer
} from './UserCard.styles';
import { ImagePlaceholder } from '../PageWrapper/PageWrappers.style';

export function UserCard({ firstName, lastName, userName, id, action, imgUrl }) {
  const navigate = useNavigate();
  return (
    <UserCardContainer>
      <UserIconAndDetails onClick={() => navigate(`/userProfile/${id}`)}>
        {imgUrl ? (
          <img alt="img" src={imgUrl} height="32px" width="32px" style={{ borderRadius: '50%' }} />
        ) : (
          <ImagePlaceholder />
        )}

        <UserDetailsContainer>
          <NameContainer>{`${firstName} ${lastName}`}</NameContainer>
          <UserNameContainer>@{userName}</UserNameContainer>
        </UserDetailsContainer>
      </UserIconAndDetails>
      {action}
    </UserCardContainer>
  );
}
