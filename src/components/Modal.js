import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { Title } from './Title';
import { Text } from './Text';
import { Button } from './Button';
import { FlexWrapper } from './FlexWrapper';
import { TasksContext } from '../contexts/Tasks';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.61);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const Card = styled.div`
  background-color: #ffffff;
  width: 315px;
  padding: 31px 23px 25px;
  z-index: 2000;
  border-radius: 20px;
`;

export const Modal = ({ closeModal }) => {
  const { deleteList } = useContext(TasksContext);
  const modalRef = useRef();

  const deleteHandler = () => {
    deleteList();
    closeModal();
  };

  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (modalRef.current === e.target) {
        closeModal();
      }
    };
    window.addEventListener('click', clickOutsideHandler);
    return () => window.removeEventListener('click', clickOutsideHandler);
  });

  return (
    <Overlay ref={modalRef}>
      <Card>
        <Title fontSize={22} lineHeight={25.3} mb={17}>
          Empezar nueva lista
        </Title>
        <Text fontSize={16} lineHeight={22} fontWeight={400}>
          Cuando comenzás una nueva lista, tu lista existente se elimina.
        </Text>
        <Text mb={16} fontSize={16} lineHeight={22} fontWeight={400}>
          ¿Estás seguro que querés empezar una nueva lista?
        </Text>
        <FlexWrapper justify="space-between">
          <span onClick={closeModal}>
            <Button disabledStyle={true}>
              Cancelar
            </Button>
          </span>
          <span onClick={deleteHandler}>
            <Button disabledStyle={false}>Nueva lista</Button>
          </span>
        </FlexWrapper>
      </Card>
    </Overlay>
  );
};
