import React from "react";
import { Box, Divider, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { AboutCarousel } from "./AboutCarousel";

export const About = () => {
  const IMAGE_PATH = [
    "1.svg",
    "3.svg",
    "4.svg",
    "5.svg",
    "6.svg",
    "7.svg",
    "2.svg",
    "8.svg",
  ];
  return (
    <Box
      as="section"
      h="400px"
      px={{ base: "20px", lg: "90px" }}
      my={{ base: "20px", lg: "50px" }}
    >
      <Image
        src="/assets/images/what.svg"
        alt="phone"
        width={250}
        height={100}
      />

      {/* <Box
                bgImage={`url(/assets/images/${i})`}
                bgRepeat="no-repeat"
                bgSize="cover"
                // bgPosition="center"
                // position="relative"
                h="150px"
                w="full"
              ></Box> */}
      <Box h="200px" mt="70px" mb={3}>
        <HStack>
          {React.Children.toArray(
            IMAGE_PATH.map((i) => (
              <Image
                src={`/assets/images/${i}`}
                alt="phone"
                width={250}
                height={200}
              />
            ))
          )}
        </HStack>
      </Box>
      <Divider color="buttonPrimary" w="15%" border="1px" />
      {/* <AboutCarousel/> */}
    </Box>
  );
};
