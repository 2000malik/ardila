import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  VStack,
} from "@chakra-ui/react";
import { AdrilaButton } from "./HeaderSection";
import Link from "next/link";
import { NavLink } from "./NavLink";
import Image from "next/image";

const NavBarDrawer = (props) => {
  const { isOpen, onClose, ...rest } = props;
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
        {...rest}
        display={{ base: "unset", lg: "none" }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody bg="ardilaCream">
            <VStack
              spacing="40px"
              mt={5}
              display={{ base: "flex", lg: "none" }}
            >
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
            </VStack>
            <VStack display={{ base: "flex", lg: "none" }}>
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBarDrawer;
