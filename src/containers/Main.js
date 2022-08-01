import React from 'react';
import { useContext } from 'react';
import { TasksContext } from '../contexts/Tasks';
import { Wrapper } from '../components/Wrapper';
import { EmptyList } from './EmptyList';
import { List } from './List';

export const Main = () => {
  const { list, filteredId } = useContext(TasksContext);

  return (
    <Wrapper>{filteredId !== 'ALL' ? <List /> : list.length ? <List /> : <EmptyList />}</Wrapper>
  );
};
