import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import { TasksContext } from '../contexts/Tasks';

const StyledButton = styled.button`
  font-size: 16px;
  line-height: 18.4px;
  font-weight: 400;
  border-radius: 50px;
  padding: 15px 21px;
  ${(props) => `
  ${props.disabled && props.isInForm && 'pointer-events: none'};
    background-color: ${props.disabled ? '#ffffff' : '#000000'};
    color: ${props.disabled ? 'rgba(0, 0, 0, 0.5)' : '#ffffff'};
    width: ${props.isInForm ? '315px' : '129px'};
    border: ${!props.isInForm && props.disabled ? '1px solid #585858' : 'none'};
  `}
`;

const Wrapper = styled.div`
  display: inline;
  ${(props) => `
  ${
    props.isInForm &&
    `@media (max-width: 425px) {
    position: absolute;
    bottom: 20px;
  }`
  }
  ${props.disabled && props.isInForm ? 'cursor: not-allowed' : 'cursor: pointer'}
  `}
`;

export const Button = ({ children, disabled, isInForm }) => {
  return (
    <Wrapper disabled={disabled} isInForm={isInForm}>
      <StyledButton disabled={disabled} isInForm={isInForm} type="submit">
        {children}
      </StyledButton>
    </Wrapper>
  );
};
