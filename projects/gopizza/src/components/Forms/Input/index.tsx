import React from "react";
import { TextInputProps } from "react-native";

import { Container, TypeProps } from "./styles";

interface InputProps extends TextInputProps {
  type: TypeProps;
}

export function Input({ type, ...rest }: InputProps) {
  return <Container type={type} {...rest} />;
}
