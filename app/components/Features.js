import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AdrilaButton } from "./HeaderSection";
import { ArrowOut, Dib, Dreams, Grit, Vault } from "./icons";
import Link from "next/link";

function FeatureCard(props) {
  const { title, icon, children, ...rest } = props;
  return (
    <Box
      w="40%"
      minH="300px"
      maxH="400px"
      pt="32px"
      pr="50px"
      pb="32px"
      pl="24px"
      transition="transform .5s"
      _hover={{
        bg: "purple",
        cursor: "pointer",
        borderRadius: "24px",
        transform: "scale(1.1)",
      }}
      {...rest}
    >
      <VStack align="start" spacing="20px">
        {icon}
        <Text color="lightWhite" fontSize="26px" fontWeight={700}>
          {title}
        </Text>
        {children}
        <Link href="#">
          <Text as="span" color="white" fontSize="16px" fontWeight={700}>
            Learn More
          </Text>
        </Link>
      </VStack>
    </Box>
  );
}
export function FeatureButton(props) {
  const { children, ...rest } = props;
  return (
    <AdrilaButton
      borderRadius="100px"
      bg="transparent"
      border="1px"
      borderColor="white"
      py="14px"
      px="20px"
      fontSize="16px"
      fontWeight={500}
      //  #17012A .
      {...rest}
    >
      {children}
    </AdrilaButton>
  );
}
export const Features = () => {
  return (
    <Box
      as="section"
      color="white"
      bgImage={`url(/assets/images/BACK-1.svg)`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      position="relative"
      h="1207px"
      maxH="1407px"
      w="full"
      px={{ base: "20px", lg: "90px" }}
      pt="122px"
      overflow="hidden"
    >
      <VStack align="stretch" spacing="30px">
        <Heading
          fontWeight={800}
          fontSize={{ base: "2.2rem", lg: "80px" }}
          fontFamily="Cabinet Grotesk"
          textAlign={{ base: "center", md: "left" }}
        >
          Access More With Your Money
        </Heading>
        <Text
          display={{ base: "none" }}
          fontWeight={500}
          fontSize="16px"
          fontFamily="Cabinet Grotesk"
        >
          Earn, learn, parlay, and grow financially. With Ardilla, you have more
          opportunities than ever at your finger tips. Why not <br /> take
          advantage today?
        </Text>
        <Text
          display={{ lg: "none" }}
          fontWeight={500}
          fontSize="16px"
          fontFamily="Cabinet Grotesk"
        >
          Earn, learn, parlay, and grow financially. With Ardilla, you have more
          opportunities than ever at your finger tips. Why not take advantage
          today?
        </Text>
        <Box>
          <FeatureButton _hover={{ bg: "#3d0270" }}>
            <Text as="span" mr={4}>
              Learn more about savings
            </Text>
            <ArrowOut />
          </FeatureButton>
        </Box>
      </VStack>
      <Box
        h="1001px"
        bg="#29014B"
        boxShadow="0 30px 90px 0 rgba(136, 7, 247, 0.5), 0 15px 70px 0 rgba(251, 64, 64, 0.25)"
        borderRadius="md"
        fontSize="xl"
        fontWeight="bold"
        mt="50px"
        px="170px"
        pt="50px"
      >
        <HStack spacing="200px">
          <FeatureCard title="DIB" icon={<Dib />}>
            <Text color="white" fontSize="16px" fontWeight={400}>
              Nothing beats an emergency quite like an emergency fund. With
              Ardilla you can get started building that emergency fund.
            </Text>
          </FeatureCard>
          <FeatureCard title="Dreams" icon={<Dreams />}>
            <Text color="white" fontSize="16px" fontWeight={400}>
              Helping you make your dreams a reality is important to us. We have
              helped so many others. We can help you as well.
            </Text>
          </FeatureCard>
        </HStack>
        <HStack spacing="200px">
          <FeatureCard title="Vault" icon={<Vault />}>
            <Text color="white" fontSize="16px" fontWeight={400}>
              Lock away excess funds you don't know what to do with. We can help
              you safeguard it till you are ready. It definitely beats spending
              it and wondering where all that money went to.
            </Text>
          </FeatureCard>
          <FeatureCard title="Grit" icon={<Grit />}>
            <Text color="white" fontSize="16px" fontWeight={400}>
              Become a VIP when you save more money with us. Enjoy better
              benefits.
            </Text>
          </FeatureCard>
        </HStack>
      </Box>
    </Box>
  );
};
