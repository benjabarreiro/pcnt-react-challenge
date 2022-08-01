import React, { useState } from 'react';
import { FlexWrapper } from './FlexWrapper';
import { Title } from './Title';
import { Text } from './Text';
import circlePlusFill from '../icons/circle-plus-fill.png';
import arrowsHead from '../icons/arrows-head.png';
import { useContext } from 'react';
import { TasksContext } from '../contexts/Tasks';

export const CardHeader = () => {
  const { deleteList } = useContext(TasksContext);
  return (
    <div style={{ position: 'relative' }}>
      <FlexWrapper direction="row" justify="space-between" align="center" mb={25}>
        <FlexWrapper direction="row" align="center">
          <Title fontSize={18} lineHeight={22.7} mr={10}>
            To do list
          </Title>
          <span onClick={deleteList}>
            <img src={circlePlusFill} alt="New list button" />
          </span>
        </FlexWrapper>
        <FlexWrapper direction="row" align="center" onClick={() => setDrop((prev) => !prev)}>
          <Text fontSize={14} lineHeight={16.1} mr={5} fontWeight={400}>
            Todos
          </Text>
          <img src={arrowsHead} alt="Filter list button" />
        </FlexWrapper>
      </FlexWrapper>
    </div>
  );
};
