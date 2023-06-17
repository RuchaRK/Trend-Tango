import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ColorPalette } from '../Color';

const StyledButton = styled.button(({ color, backDropColor }) => ({
  display: 'inline-flex',
  curser: 'pointer',
  padding: '2px',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  background: 'none',
  color,
  '&:hover': {
    backgroundColor: backDropColor
  }
}));

export function IconButton({ children, color, backDropColor, ...props }) {
  return (
    <StyledButton color={color} backDropColor={backDropColor} {...props}>
      {children}
    </StyledButton>
  );
}

IconButton.propTypes = {
  color: PropTypes.string,
  backDropColor: PropTypes.string,
  children: PropTypes.element.isRequired
};

IconButton.defaultProps = {
  color: ColorPalette.primary.main,
  backDropColor: ColorPalette.primary.backdrop
};
