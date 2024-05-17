import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const About = () => {
  const IMAGE_PATH = ["1.svg", "2.svg", "3.svg", "4.svg", "5.svg", "6.svg"];
  return (
    <Box as="section" bg="white" maxH="300px" px="90px">
      <Image
        src="/assets/images/what.svg"
        alt="phone"
        width={100}
        height={80}
      />
      <Box h="200px">
        <HStack>
          {React.Children.toArray(
            IMAGE_PATH.map((i) => (
              <Image
                src={`/assets/images/${i}`}
                alt="phone"
                width={150}
                height={200}
              />
            ))
          )}
        </HStack>
      </Box>
    </Box>
  );
};
