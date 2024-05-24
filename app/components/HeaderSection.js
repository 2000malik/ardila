import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { NavLink } from "./NavLink";
import Link from "next/link";

export function AdrilaButton(props) {
  const { children, ...rest } = props;
  return (
    <Button
      bg="#F4F2E8"
      fontSize="15px"
      fontWeight={500}
      cursor="pointer"
      fontFamily="Cabinet Grotesk"
      {...rest}
    >
      {children}
    </Button>
  );
}

const HeaderSection = () => {
  return (
    <Box
      as="section"
      maxH="936px"
      bg="primary"
      color="white"
      px={{ base:"20px",lg:"90px" }}
      pt="34px"
      overflow="hidden"
      fontFamily="Cabinet Grotesk"
    >
      <Flex as="nav" w="1264px" margin="auto">
        <Box
          // w={"80%"}
          bg="lightPrimary"
          border="1px"
          borderColor="#ffffff38"
          borderRadius="1000px"
          px="30px"
          py="8px"
          height="80px"
          mr={5}
        >
          <HStack spacing="100px">
            <Box mr="45px">
              <Link href="/">
                <Image
                  src="/assets/images/LOGO.svg"
                  alt="ardila-logo"
                  width={100}
                  height={100}
                />
              </Link>
            </Box>
            <HStack spacing="40px">
              <Link href="#">
                <NavLink>Product</NavLink>
              </Link>
              <Link href="#">
                <NavLink>Business Beta</NavLink>
              </Link>
              <Link href="#">
                <NavLink>Company</NavLink>
              </Link>
              <Link href="#">
                <NavLink>Learn</NavLink>
              </Link>
            </HStack>
            <HStack>
              <Image
                src="/assets/images/MAP.svg"
                alt="location"
                width={60}
                height={100}
              />
              <AdrilaButton
                maxW="199px"
                borderRadius="1000px"
                bg="buttonPrimary"
                border="1px"
                borderColor="buttonPrimary"
                fontSize="14px"
                fontWeight={700}
              >
                Create Account
              </AdrilaButton>
            </HStack>
          </HStack>
        </Box>

        <AdrilaButton
          border="1px"
          borderRadius="1000px"
          borderColor="#ffffff38"
          bg="lightPrimary"
          w="10%"
          height="80px"
        >
          <NavLink>Personal</NavLink>
        </AdrilaButton>
      </Flex>
      <Box as="section" margin="auto" maxW="1199px" mt="100px">
        <Center>
          <Heading
            fontFamily="Cabinet Grotesk"
            fontWeight={800}
            as="h2"
            fontSize={{ base:"2.2rem", lg: "95px" }}
            bgGradient="linear(to-l, #19FD82, #FFEB35)"
            bgClip="text"
          >
            Your Access To More
          </Heading>
        </Center>
        <Center>
          <Box w="770px">
            <Text
              fontSize="15px"
              fontWeight={500}
              fontFamily="Cabinet Grotesk"
              color="white"
              mt={3}
            >
              Ardilla helps you save and invest in achieving your financial
              goals, we have the most flexible and seamless way
            </Text>
            <Text
              textAlign="center"
              fontSize="15px"
              fontWeight={500}
              color="white"
              mt={3}
            >
              to grow your funds.
            </Text>
          </Box>
        </Center>
        <Center mt={5}>
          <AdrilaButton
            borderRadius="1000px"
            bg="white"
            color="#3D0072"
            border="1px"
            fontSize="14px"
            fontWeight={500}
            alignSelf="center"
            p={5}
          >
            Create Account
          </AdrilaButton>
        </Center>
        <Center>
          <Image
            src="/assets/images/phone.svg"
            alt="phone"
            width={1000}
            height={80}
          />
        </Center>
      </Box>
    </Box>
  );
};

export default HeaderSection;
