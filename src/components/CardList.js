import React, { useContext } from 'react';
import { TasksContext } from '../contexts/Tasks';
import { CardItem } from './CardItem';

export const CardList = () => {
  const { list } = useContext(TasksContext);

  return (
    <div>
      {list.map((x) => (
        <CardItem key={x.id} {...x} />
      ))}
    </div>
  );
};
