import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  display: flex;
  gap: 5px;
  padding: 100px;
  height: 100%;
`;

export const ImageContainer = styled.div`
  flex: 0.4;
  margin: 25px;
`;

export const LoginDataContainer = styled.div`
  width: 100%;
  flex: 0.6;
`;

export const LoginData = styled.form`
  background: white;
  display: flex;
  width: 450px;
  margin: auto;
  flex-direction: column;
  gap: 12px;
  padding: 15px;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;
