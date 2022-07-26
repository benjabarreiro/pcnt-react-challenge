import React, { useContext } from 'react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { CardHeader } from '../components/CardHeader';
import { CardList } from '../components/CardList';
import { UserContext } from '../contexts/User';
import { TasksContext } from '../contexts/Tasks';

export const List = () => {
  const { error } = useContext(UserContext);
  const { value, addTask } = useContext(TasksContext);
  return (
    <form onSubmit={addTask}>
      <Input />
      <Card>
        <CardHeader />
        <CardList />
      </Card>
      <Button
        isInForm={true}
        disabledStyle={error || !value.length}
        disabled={!value.length ? true : false}>
        Agregar
      </Button>
    </form>
  );
};
