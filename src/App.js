import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <StyledContainer>
      <StyledTitleContainer>
        <h1>유용한 리액트 패턴들</h1>
      </StyledTitleContainer>
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.div`
  text-align: center;
  font-family: sans-serif;
`;

const StyledTitleContainer = styled.div`
  background-color: #1428a0;
  color: white;
  padding: 35px;

  h1 {
    margin: 0;
  }
`;

const StyledPatternContainer = styled.div`
  padding: 30px;
  border-bottom: 2px solid #d3d3d3;

  h2 {
    margin-top: 0;
  }

  &:last-child {
    border: none;
  }
`;
