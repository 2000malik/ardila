import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { ArrowDown } from "./icons";

export const NavLink = (props) => {
  const { children, ...rest } = props;
  return (
    <HStack>
      <Text
        fontSize="14px"
        fontWeight={500}
        fontFamily="Cabinet Grotesk"
        {...rest}
      >
        {children}
      </Text>
      <ArrowDown />
    </HStack>
  );
};
