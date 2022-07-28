import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";

const StyledHeader = styled.header`
  padding: 28px 38px 35px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};
