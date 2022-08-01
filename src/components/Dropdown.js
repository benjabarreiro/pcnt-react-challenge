import React, { useContext } from 'react';
import styled from 'styled-components';
import { DropdownContext } from '../contexts/Dropdown';

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 39px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.15);
  padding: 13px 0 14px;
`;

const StyledUl = styled.ul`
  list-style: none;
`;

const StyledLi = styled.li`
  padding: 0 16px 0 56px;
  line-height: 32px;
  text-align: right;
  cursor: pointer;
  ${(props) => `color: ${props.selected ? '#FF560B' : '#000000'};`}
  &:hover {
    background-color: #e7e7e7;
  }
`;

export const Dropdown = () => {
  const { dropdownList, selectedHandler } = useContext(DropdownContext);

  return (
    <Container>
      <StyledUl>
        {dropdownList.map((x) => (
          <StyledLi key={x.id} selected={x.selected} onClick={() => selectedHandler(x.id)}>
            {x.text}
          </StyledLi>
        ))}
      </StyledUl>
    </Container>
  );
};
