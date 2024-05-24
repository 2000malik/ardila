import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Facebook, Instagram, LinkedIn, Twitter } from "./icons";

function FooterTitle(props) {
  const { children, ...rest } = props;
  return (
    <Text fontSize="16px" fontWeight={600} {...rest}>
      {children}
    </Text>
  );
}
function FooterComingSoon(props) {
  const { children, ...rest } = props;
  return (
    <Text
      fontSize="10px"
      fontWeight={500}
      border="1px"
      borderRadius="99px"
      padding={2}
      display="flex"
      alignItems="center"
      h="25px"
      w="fit-content"
      {...rest}
    >
      {children}
    </Text>
  );
}
function FooterNavLink(props) {
  const { path, isComing = false, children, ...rest } = props;
  return (
    <Link href={path}>
      <Box display="inline-flex" gap={3}>
        <Text fontSize="14px" fontWeight={400} {...rest}>
          {children}
        </Text>
        {isComing && <FooterComingSoon>Coming soon</FooterComingSoon>}
      </Box>
    </Link>
  );
}
export const Footer = () => {
  return (
    <Box
      as="footer"
      bg="buttonPrimary"
      h="725px"
      mt="-150px"
      pt="200px"
      px="90px"
      color="white"
      overflow="hidden"
    >
      <VStack align="stretch" spacing={1}>
        <HStack spacing="150px">
          {/* w={{ base: "full", md: "unset" }} */}
          {/* direction={{ base: "column" }} */}

          <VStack align="flex-start" h="400px" spacing={5}>
            <FooterTitle>Products</FooterTitle>
            <FooterNavLink path="#">Savings</FooterNavLink>
            <FooterNavLink path="#">Dilla</FooterNavLink>
            <FooterNavLink path="#">Financial Coach</FooterNavLink>
            <FooterNavLink path="#">Halal</FooterNavLink>
            <FooterNavLink path="#" isComing={true}>
              Budgeting
            </FooterNavLink>
            <FooterNavLink path="#" isComing={true}>
              Investment
            </FooterNavLink>
            <FooterNavLink path="#" isComing={true}>
              Insurance
            </FooterNavLink>
          </VStack>

          <VStack align="flex-start" h="400px" spacing={5}>
            <FooterTitle>Company</FooterTitle>
            <FooterNavLink path="#">About us</FooterNavLink>
            <FooterNavLink path="#">Careers</FooterNavLink>
            <FooterNavLink path="#">FAQS</FooterNavLink>
            <FooterNavLink path="#">Press</FooterNavLink>
          </VStack>

          <VStack align="flex-start" h="400px" spacing={5}>
            <FooterTitle>Transparency</FooterTitle>
            <FooterNavLink path="#">Terms & conditions</FooterNavLink>
            <FooterNavLink path="#">Information security policy</FooterNavLink>
            <FooterNavLink path="#">Privacy policy</FooterNavLink>
            <FooterNavLink path="#">Interest Tool</FooterNavLink>
          </VStack>

          <VStack align="flex-start" h="400px" spacing={5}>
            <FooterTitle>Developer</FooterTitle>
            <FooterNavLink path="#" isComing={true}>
              Connect Api
            </FooterNavLink>
          </VStack>

          <VStack
            align="flex-start"
            fontSize="14px"
            fontWeight={400}
            h="400px"
            spacing={5}
          >
            <FooterTitle>Address</FooterTitle>
            <Text>33B, Ogundana street, Allen, Ikeja.</Text>
            <FooterTitle>Contact</FooterTitle>
            <Link href="mailto:kojomalik2000@gmail.com">
              support@ardilla.africa
            </Link>
            <Link href="tel:08010001234">(234)801 000 1234</Link>
          </VStack>
        </HStack>
        <Divider />
        <Box fontWeight={500} fontSize="14px">
          <Text>© {new Date().getFullYear()}. All right reserved</Text>
        </Box>
        <HStack justifyContent="flex-end">
          <Twitter />
          <Instagram />
          <LinkedIn />
          <Facebook />
        </HStack>
        <Box fontSize="14px" fontWeight={400}>
          <Text>
            Ardilla operates under the cooperative license of Ardilla
            Multipurpose Cooperative Society, LSC 18245, We provide Savings and
            Fixed deposit services to our users
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};
