import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { AdrilaButton } from "./HeaderSection";
import Image from "next/image";

export const AppDownload = () => {
  return (
    <Box as="section">
      <Box
        h="300px"
        w={{ base: "fit-content", lg: "1200px" }}
        margin="auto"
        borderRadius="25px"
        p="0"
        overflow="hidden"
      >
        <Box
          color="white"
          bgImage={`url(/assets/images/BACKGROUND.svg)`}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
          position="relative"
          h="full"
          w="full"
          px={{ base: "25px", lg: "82px" }}
          pt="35px"
        >
          <HStack
            spacing={{ base: 1, lg: "200px" }}
            flexDirection={{ base: "column", lg: "initial" }}
          >
            <Box>
              <Text
                fontSize="36px"
                fontWeight={600}
                mb={5}
                display={{ base: "none", lg: "flex" }}
              >
                Download for free
                <br />
                Start saving Today
              </Text>
              <Text
                fontSize="20px"
                fontWeight={600}
                mb={5}
                display={{ lg: "none" }}
              >
                Download for free Start saving Today
              </Text>
              <Box
                alignSelf={{ base: "center", md: "unset" }}
                display="flex"
                justifyContent={{ base: "center", lg: "initial" }}
              >
                <AdrilaButton
                  size="md"
                  bg="white"
                  color="lightPurple"
                  fontSize="14px"
                  fontWeight={500}
                  px="16px"
                  py="20px"
                >
                  Download for free
                </AdrilaButton>
              </Box>
            </Box>
            <Box mt="10px">
              <Image
                alt="mobile-app-image"
                src="/assets/images/app.svg"
                height={100}
                width={460}
              />
            </Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};
