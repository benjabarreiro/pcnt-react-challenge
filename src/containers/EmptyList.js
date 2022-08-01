import React, { useContext } from 'react';
import { Title } from '../components/Title';
import { Text } from '../components/Text';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { UserContext } from '../contexts/User';
import { TasksContext } from '../contexts/Tasks';

export const EmptyList = () => {
  const { error } = useContext(UserContext);
  const { value, addTask } = useContext(TasksContext);
  return (
    <>
      <Title fontSize={30} lineHeight={34.5} mb={16}>
        To do list
      </Title>
      <Text fontSize={16} lineHeight={22} mb={36} fontWeight={400}>
        ¿Qué cosas tenés que terminar hoy?
      </Text>
      <form onSubmit={addTask}>
        <Input />
        <Button isInForm={true} disabled={error || !value.length}>
          Agregar
        </Button>
      </form>
    </>
  );
};
