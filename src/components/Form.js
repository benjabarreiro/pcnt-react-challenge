import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import styled from "styled-components";

const StyledForm = styled.form``;

export const Form = () => {
  return (
    <StyledForm>
      <Input />
      <Button disabled={true}>Agregar</Button>
    </StyledForm>
  );
};
