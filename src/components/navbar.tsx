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
  keyframes,
  Text
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Navbar({ modalOpen }: { modalOpen: any }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const pulse = keyframes`
  0% {
    -moz-box-shadow: 0 0 0 0 #fca4bd;
    box-shadow: 0 0 0 0 #fca4bd;
  }
  70% {
      -moz-box-shadow: 0 0 0 10px #fca4bd;
      box-shadow: 0 0 0 7px #fca4bd;
  }
  100% {
      -moz-box-shadow: 0 0 0 0 #fca4bd;
      box-shadow: 0 0 0 0 #fca4bd;
  }
  `
  const pulseAnim = `${pulse} 1.5s infinite`

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
                <AnchorLink to="/#TechStack"><Text fontSize={"xl"} fontWeight={"semibold"}>Tech Stack</Text></AnchorLink>
                <AnchorLink to="/#Industries"><Text fontSize={"xl"} fontWeight={"semibold"}>Industries</Text></AnchorLink>
                <AnchorLink to="/#Company"><Text fontSize={"xl"} fontWeight={"semibold"}>Company</Text></AnchorLink>
                <AnchorLink to="/#Projects"><Text fontSize={"xl"} fontWeight={"semibold"}>Projects</Text></AnchorLink>
              </HStack>
            </Flex>
            <Box>
              <Button
                color={"white"}
                backgroundColor={"#D91E53"}
                _hover={{ background: "#ba0236" }}
                size={"lg"}
                fontSize={"lg"}
                fontWeight={"medium"}
                rounded={"md"}
                mr={4}
                py={3}
                px={5}
                onClick={modalOpen}
                animation={pulseAnim}
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
