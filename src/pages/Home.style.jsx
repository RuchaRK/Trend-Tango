import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  padding: 36px 36px;
  height: calc(100vh -144px);
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 15px;
  height: 100%;
  align-items: flex-start;
  gap: 10px;
  justify-content: space-between;
  flex: 0.2;
  border: 1px solid blue;
  cursor: pointer;
`;

export const FeedContainer = styled.div`
  display: flex;
  flex: 0.6;
  border: 1px solid orange;
  padding: 15px 15px;
  justify-content: center;
  flex-direction: column;
`;

export const UserContainer = styled.div`
  display: flex;
  flex: 0.2;
  border: 1px solid indigo;
  padding: 15px 15px;
  flex-direction: column;
`;

export const SingleUserData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const LoggedUser = styled.div``;

export const CreatePostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostInput = styled.div`
  display: flex;
`;
