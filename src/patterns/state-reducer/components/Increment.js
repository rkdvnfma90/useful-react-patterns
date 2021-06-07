import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledButton } from './styles.js';

const Increment = ({ icon, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      <FontAwesomeIcon icon={icon} color='#17a2b8' />
    </StyledButton>
  );
};

export { Increment };
