import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { FeatureButton } from "./Features";
import { ArrowOpportunity, ArrowOutWithPurpleBg } from "./icons";

export const Opportunities = () => {
  return (
    <Box
      as="section"
      h="602px"
      bg="ardilaCream"
      px={{ base: "20px", lg: "90px" }}
      pt="60px"
      overflow="hidden"
    >
      <VStack align="stretch" spacing="50px">
        <Heading
          fontSize={{ base: "2.2rem", lg: "80px" }}
          fontFamily="Cabinet Grotesk"
          textAlign={{ base: "center", md: "left" }}
          fontWeight={800}
          color="darkPurple"
        >
          Unlimited{" "}
          <Text as="span" color="ardilaTeal">
            Investment
          </Text>{" "}
          <br />
          <Text as="span" color="ardilaTeal">
            Opportunities
          </Text>
        </Heading>
        <Text
          display={{ base: "none" }}
          fontSize="24px"
          fontWeight={500}
          color="darkPurple"
        >
          Plan towards your future by investing with ardilla, Grow your money{" "}
          <br /> confidently and securely with the available investment
          opportunities
        </Text>
        <Text
          display={{ lg: "none" }}
          fontSize="24px"
          fontWeight={500}
          color="darkPurple"
        >
          Plan towards your future by investing with ardilla, Grow your money{" "}
          confidently and securely with the available investment opportunities
        </Text>
        <Box>
          <FeatureButton
            bg="ardilaCream"
            border="1px"
            borderColor="buttonPrimary"
          >
            <Text as="span" mr={4} color="buttonPrimary">
              Invest with ardilla (Coming Soon)
            </Text>
            <ArrowOutWithPurpleBg />
          </FeatureButton>
        </Box>
      </VStack>
      <Box position="relative" right={0} left={600} bottom={350}>
        <ArrowOpportunity />
      </Box>
    </Box>
  );
};
