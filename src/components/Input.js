import React, { useContext } from 'react';
import styled from 'styled-components';
import { TasksContext } from '../contexts/Tasks';

const StyledInput = styled.input`
  display: block;
  border: none;
  background: none;
  outline: none;
  height: 28px;
  width: 315px;
  font-size: 24px;
  line-height: 27.6px;
  color: #000000;
  font-weight: 700;

  ::placeholder {
    font-size: 24px;
    line-height: 27.6px;
    color: rgba(0, 0, 0, 0.25);
    padding-left: 2px;
  }

  :-ms-input-placeholder {
    font-size: 24px;
    line-height: 27.6px;
    color: rgba(0, 0, 0, 0.25);
  }

  ::-ms-input-placeholder {
    font-size: 24px;
    line-height: 27.6px;
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const Input = () => {
  const { handleChange, value } = useContext(TasksContext);
  return <StyledInput placeholder="Escribí un item" value={value} onChange={handleChange} />;
};
