import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const SButton = styled.button`
  ${tw`
    justify-center
    flex
    m-1.5
    font-bold
    border
    rounded
    bg-gray-700
    text-white
    p-1
  `}

  align-items: center;
`;

function Button({ name, ...props }) {
  const { type, onClick, datatestId, disabled, className } = props;
  return (
    <SButton
      className={ className }
      type={ type }
      onClick={ onClick }
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
};

Button.defaultProps = {
  type: 'submit',
  onClick: () => {},
  disabled: false,
  datatestId: '',
  className: '',
};

export default Button;
