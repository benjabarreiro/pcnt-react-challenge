import React from "react";
import { Title } from "../components/Title";
import { Text } from "../components/Text";
import { Wrapper } from "../components/Wrapper";
import { Form } from "../components/Form";

export const EmptyList = () => {
  return (
    <Wrapper>
      <Title fontSize={30} lineHeight={34.5}>
        To do list
      </Title>
      <Text>¿Qué cosas tenés que terminar hoy?</Text>
      <Form />
    </Wrapper>
  );
};
