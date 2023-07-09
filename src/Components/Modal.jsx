import * as React from 'react';
import * as ReactModal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import styled from '@emotion/styled';
import { IconButton } from './IconButton';

export const CloseIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding: 16px 4px 4px 16px;
`;

export function Modal({
  children,
  closeModal,
  title = '',
  height = '500px',
  width = '600px',
  ...props
}) {
  return (
    <ReactModal
      {...props}
      style={{
        overlay: {
          position: 'fixed',
          zIndex: 1020,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(255, 255, 255, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        content: {
          background: 'white',
          width,
          height,
          overflowY: 'auto',
          position: 'relative',
          border: '1px solid #e4e4e4',
          borderRadius: '4px',
          padding: 0
        }
      }}
    >
      <div>
        <CloseIconContainer>
          <h3>{title}</h3>
          <IconButton onClick={() => closeModal()}>
            <AiOutlineClose size={20} />
          </IconButton>
        </CloseIconContainer>
        <div style={{ position: 'relative', padding: '0 16px' }}>{children}</div>
      </div>
    </ReactModal>
  );
}
