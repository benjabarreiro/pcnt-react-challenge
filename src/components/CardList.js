import React, { useContext } from 'react';
import { TasksContext } from '../contexts/Tasks';
import { CardItem } from './CardItem';

export const CardList = () => {
  const { list, filterTasks, id } = useContext(TasksContext);
  return <div>{list.length && filterTasks(id).map((x) => <CardItem key={x.id} {...x} />)}</div>;
};
