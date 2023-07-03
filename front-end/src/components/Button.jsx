import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const SButton = styled.button`
  ${tw`
    justify-center
    flex
    ml-1
    font-bold
    text-white
  `}

  align-items: center;
`;

function Button({ name, ...props }) {
  const { type, onClick, datatestId, disabled, className, clickDouble } = props;
  return (
    <SButton
      className={ className }
      type={ type }
      onClick={ !clickDouble ? onClick : null }
      onDoubleClick={ clickDouble ? onClick : null }
      data-testid={ datatestId }
      disabled={ disabled }
    >
      {name}
    </SButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  datatestId: PropTypes.string,
  className: PropTypes.string,
  clickDouble: PropTypes.bool,
};

Button.defaultProps = {
  type: 'submit',
  onClick: () => {},
  disabled: false,
  datatestId: '',
  className: '',
  clickDouble: false,
};

export default Button;
