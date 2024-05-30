import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Testimonies = () => {
  return (
    <Box
      bg="gray"
      px={{ base: "20px", lg: "90px" }}
      pt="60px"
      as="section"
      h={{ base: "fit-content", lg: "852px" }}
      color="purple"
    >
      <VStack align="stretch" spacing="30px">
        <Heading
          fontSize={{ base: "2.2rem", lg: "80px" }}
          fontFamily="Cabinet Grotesk"
          textAlign={{ base: "center", md: "left" }}
          fontWeight={800}
        >
          Don’t Take Our{" "}
          <Text as="span" color="primaryRed">
            Word
          </Text>{" "}
          For It
        </Heading>
        <Text fontSize="16px" fontWeight={500}>
          Listen to testimonials from Ardilla users building wealth
        </Text>
        <HStack
          spacing="30px"
          flexDirection={{ base: "column", md: "initial" }}
          mb={{ base: 5, lg: "unset" }}
        >
          <Box transition="transform .5s" _hover={{ transform: "scale(1.1)" }}>
            <Image
              src={`/assets/images/test-2.svg`}
              alt="testimony-image"
              width={500}
              height={200}
            />
          </Box>
          <Box transition="transform .5s" _hover={{ transform: "scale(1.1)" }}>
            <Image
              src={`/assets/images/test-3.svg`}
              alt="testimony-image"
              width={450}
              height={200}
            />
          </Box>
          <Box transition="transform .5s" _hover={{ transform: "scale(1.1)" }}>
            <Image
              src={`/assets/images/test-1.svg`}
              alt="testimony-image"
              width={450}
              height={200}
            />
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Testimonies;
