import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { AdrilaButton } from "./HeaderSection";
import Image from "next/image";

export const AppDownload = () => {
  return (
    <Box as="section" pb="150px">
      <Box
        h="300px"
        w="1200px"
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
          px="82px"
          pt="35px"
        >
          <HStack spacing="200px">
            <Box>
              <Text fontSize="36px" fontWeight={600} mb={5}>
                Download for free
                <br />
                Start saving Today
              </Text>
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
