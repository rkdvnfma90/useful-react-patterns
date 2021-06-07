import React from 'react';
import styled from 'styled-components';
import { Usage as CompoundComponent } from './patterns/compound-components/Usage';
import { Usage as ControlProps } from './patterns/control-props/Usage';
import { Usage as CustomHook } from './patterns/custom-hook/Usage';
import { Usage as PropsGetters } from './patterns/props-getters/Usage';

function App() {
  return (
    <StyledContainer>
      <StyledTitleContainer>
        <h1>유용한 리액트 패턴들</h1>
      </StyledTitleContainer>

      <StyledPatternContainer>
        <h2>Compound components 패턴</h2>
        <CompoundComponent />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>Control props 패턴</h2>
        <ControlProps />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>Custom Hook 패턴</h2>
        <CustomHook />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>Props Getters 패턴</h2>
        <PropsGetters />
      </StyledPatternContainer>
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
