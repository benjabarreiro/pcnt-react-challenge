import React from 'react';
import { Text } from './Text';
import { FlexWrapper } from './FlexWrapper';
import { Check } from './Check';
import { useContext } from 'react';
import { TasksContext } from '../contexts/Tasks';

export const CardItem = ({ title, completed, id }) => {
  const { deleteTask } = useContext(TasksContext);
  return (
    <FlexWrapper direction="row" justify="space-between" align="center" mb={16} px={2}>
      <FlexWrapper direction="row" align="center">
        <Check completed={completed} id={id} />
        <Text
          fontSize={16}
          lineHeight={18.4}
          ml={12}
          fontWeight={400}
          color={completed ? 'rgba(0, 0, 0, 0.5)' : '#000000'}>
          {title}
        </Text>
      </FlexWrapper>
      <Text
        onClick={() => deleteTask(id)}
        fontSize={12}
        lineHeight={30}
        fontWeight={700}
        color="#ffffff"
        colorHover="#5E5E5E"
        underlined={true}>
        Delete
      </Text>
    </FlexWrapper>
  );
};
