import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

export function BackButton(props: TouchableOpacityProps) {
  const { COLORS } = useTheme();

  return (
    <Container {...props}>
      <MaterialIcons name="chevron-left" size={18} color={COLORS.TITLE} />
    </Container>
  );
}
