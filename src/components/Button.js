import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 16px;
  line-height: 18.4px;
  font-weight: 400;
  border-radius: 50px;
  padding: 15px 21px;
  cursor: pointer;
  ${(props) => `
  ${props.disabledStyle && props.isInForm && 'pointer-events: none'};
    background-color: ${props.disabledStyle ? '#ffffff' : '#000000'};
    color: ${props.disabledStyle ? 'rgba(0, 0, 0, 0.5)' : '#ffffff'};
    width: ${props.isInForm ? '315px' : '129px'};
    border: ${!props.isInForm && props.disabledStyle ? '1px solid #585858' : 'none'};
  `}
`;

const Wrapper = styled.div`
  display: inline;
  ${(props) => `
  ${
    props.isInForm &&
    `
    position: absolute;
    bottom: 20px;
  `
  }
  ${props.disabledStyle && props.isInForm && 'cursor: not-allowed;'}
  `}
`;

export const Button = ({ children, disabledStyle, isInForm, disabled = false }) => {
  return (
    <Wrapper disabledStyle={disabledStyle} isInForm={isInForm}>
      <StyledButton
        disabledStyle={disabledStyle}
        isInForm={isInForm}
        disabled={disabled && isInForm}
        type="submit">
        {children}
      </StyledButton>
    </Wrapper>
  );
};
