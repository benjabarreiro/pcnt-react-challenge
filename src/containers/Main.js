import React from 'react';
import { useContext } from 'react';
import { TasksContext } from '../contexts/Tasks';
import { Wrapper } from '../components/Wrapper';
import { EmptyList } from './EmptyList';
import { List } from './List';

export const Main = () => {
  const { list } = useContext(TasksContext);

  return <Wrapper>{list.length ? <List /> : <EmptyList />}</Wrapper>;
};
