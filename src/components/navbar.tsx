import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Navbar({ modalOpen }: { modalOpen: any }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        as="header"
        position={"fixed"}
        width="100%"
        zIndex={500}
        backgroundColor="white"
      >
        <Box bg="white" px={8} py={3} shadow={"md"} position={"static"}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              <Image
                height={12}
                objectFit="cover"
                src={"/static/website-logo.png"}
                alt="Dan Abramov"
              />
            </Box>

            <Flex alignItems={"center"} display={{ base: "none", md: "block" }}>
              <HStack spacing={8} alignItems={"center"}>
                <AnchorLink to="/#TechStack">Tech Stack</AnchorLink>
                <AnchorLink to="/#Industries">Industries</AnchorLink>
                <AnchorLink to="/#Services">Services</AnchorLink>
                <AnchorLink to="/#Company">Company</AnchorLink>
                <AnchorLink to="/#Projects">Projects</AnchorLink>
              </HStack>
            </Flex>
            <Box>
              <Button
                color={"white"}
                backgroundColor={"#D91E53"}
                size={"lg"}
                fontSize={"lg"}
                fontWeight={"medium"}
                rounded={"md"}
                mr={4}
                py={3}
                px={5}
                onClick={modalOpen}
              >
                Contact Us
              </Button>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
              <Modal
                onClose={onClose}
                size={"full"}
                isOpen={isOpen}
                motionPreset="none"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton size={"lg"} />
                  <ModalBody>
                    <AnchorLink to="/#TechStack">Tech Stack</AnchorLink>
                    <AnchorLink to="/#Industries">Industries</AnchorLink>
                    <AnchorLink to="/#Services">Services</AnchorLink>
                    <AnchorLink to="/#Company">Company</AnchorLink>
                    <AnchorLink to="/#Projects">Projects</AnchorLink>
                  </ModalBody>
                  <ModalFooter></ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Flex>
        </Box >
      </Box >
    </>
  );
}
