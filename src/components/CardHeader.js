import React, { useState } from 'react';
import { FlexWrapper } from './FlexWrapper';
import { Title } from './Title';
import { Text } from './Text';
import circlePlusFill from '../icons/circle-plus-fill.png';
import arrowsHead from '../icons/arrows-head.png';
import { Modal } from './Modal';
import { Dropdown } from './Dropdown';
import { useContext } from 'react';
import { DropdownContext } from '../contexts/Dropdown';
import styled from 'styled-components';

const CardHeaderWrapper = styled.div`
  position: relative;
`;

const ActionsWrapper = styled.span`
  cursor: pointer;
`;

export const CardHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const { selectedItem, open, dropdownHandler } = useContext(DropdownContext);

  const closeModal = () => setShowModal(false);

  return (
    <CardHeaderWrapper>
      <FlexWrapper direction="row" justify="space-between" align="center" mb={25}>
        <FlexWrapper direction="row" align="center">
          <Title fontSize={18} lineHeight={22.7} mr={10}>
            To do list
          </Title>
          <ActionsWrapper onClick={() => setShowModal(true)}>
            <img src={circlePlusFill} alt="New list button" />
          </ActionsWrapper>
        </FlexWrapper>
        <ActionsWrapper>
          <FlexWrapper role="span" direction="row" align="center" onClick={dropdownHandler}>
            <Text fontSize={14} lineHeight={16.1} mr={5} fontWeight={400}>
              {selectedItem}
            </Text>
            <img src={arrowsHead} alt="Filter list button" />
          </FlexWrapper>
        </ActionsWrapper>
      </FlexWrapper>
      {open && <Dropdown />}
      {showModal && <Modal closeModal={closeModal} />}
    </CardHeaderWrapper>
  );
};
