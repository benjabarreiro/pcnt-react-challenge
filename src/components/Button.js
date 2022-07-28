import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

const StyledButton = styled.button`
  font-size: 16px;
  line-height: 18.4px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
  border: none;
  border-radius: 50px;
  padding: 15px 21px;
  width: 315px;
  ${(props) => props.disabled && "pointer-events: none"};
`;

const Wrapper = styled.div`
  display: inline;
  ${(props) => (props.disabled ? "cursor: not-allowed" : "cursor: pointer")};

  @media (max-width: 425px) {
    position: absolute;
    bottom: 20px;
  }
`;

export const Button = ({ children, disabled }) => {
  const {error} = useContext(UserContext);
  return (
    <Wrapper disabled={disabled || error}>
      <StyledButton disabled={disabled || error}>{children}</StyledButton>
    </Wrapper>
  );
};
