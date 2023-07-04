import styled from '@emotion/styled';

export const PostContainer = styled.div`
  padding: 24px 16px;

  border-top: 1px solid #e4e4e4;
  text-align: left;
  &:last-child {
    border-bottom: 1px solid #e4e4e4;
  }
`;

export const PostCommentsContainer = styled.div`
  display: flex;
  border-top: 1px solid #e4e4e4;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
`;

export const CommentsHeader = styled.div``;

export const Comment = styled.div`
  padding: 4px 36px;
`;

export const PostDateContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const DateContainer = styled.div`
  font-size: 12px;
  color: grey;
`;
