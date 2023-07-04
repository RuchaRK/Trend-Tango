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
  flex-direction: column;
  gap: 12px;
`;

export const TextArea = styled.textarea`
  padding: 10px 10px;
  height: 120px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  outline: 1px solid #e4e4e4;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: fit-content;
`;

export const CrossIconContainer = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;
  border-top: 1px solid #e4e4e;
`;
