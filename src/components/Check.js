import React from 'react';
import { useContext } from 'react';
import { TasksContext } from '../contexts/Tasks';
import CheckIcon from '../icons/check-icon.png';
import styled from 'styled-components';

const Circle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  ${(props) => `
		background-color: ${props.completed ? '#FF560B' : '#ffffff'};
		border: ${props.completed ? '1px solid #FF560B' : '1px solid #BCBCBC'};	
	`}
`;
const StyledImg = styled.img`
  position: relative;
  top: 2.5px;
  left: 2.5px;
`;

export const Check = ({ id, completed }) => {
  const { completeTask } = useContext(TasksContext);
  return (
    <Circle role="span" onClick={() => completeTask(completed, id)} completed={completed}>
      {completed && <StyledImg role="img" src={CheckIcon} alt="checked" />}
    </Circle>
  );
};
