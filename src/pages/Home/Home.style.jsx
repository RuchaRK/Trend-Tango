import styled from '@emotion/styled';

export const CreatePostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  background: #f1f1f1;
  margin: 24px 16px;
  padding: 16px;
  border-radius: 4px;
`;

export const PostInput = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 10px 10px;
  height: 120px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  outline: 1px solid #e4e4e4;
`;
