import React from 'react';
import { StyledButton } from './styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Decrement = ({ icon, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <FontAwesomeIcon icon={icon} color='#17a2b8' />
    </StyledButton>
  );
};

export { Decrement };
