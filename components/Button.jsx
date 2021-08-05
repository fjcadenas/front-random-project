import styled from 'styled-components';
import PropTypes from 'prop-types';

const BUTTON_TEMPLATES = ['primary', 'secondary', 'danger'];
const BUTTON_SIZES = ['small', 'medium', 'large'];

const Container = styled.button`
  outline: none;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.6em;
  font-size: 1em;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors[props.template]};
`;

export const Button = ({
  template = 'primary',
  size = 'medium',
  label = null,
}) => {
  return (
    <Container template={template} size={size}>
      {label}
    </Container>
  );
};

Button.propTypes = {
  template: PropTypes.oneOf(BUTTON_TEMPLATES),
  size: PropTypes.oneOf(BUTTON_SIZES),
  label: PropTypes.string.isRequired,
};
