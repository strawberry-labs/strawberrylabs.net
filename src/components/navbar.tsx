import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
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
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import WebsiteLogo from "../images/website-logo.png";
import { Link } from "gatsby";

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
  `;
  const pulseAnim = `${pulse} 1.5s infinite`;

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
              <Link to="/">
                <Image
                  height={12}
                  objectFit="cover"
                  src={WebsiteLogo}
                  alt="Company Logo"
                />
              </Link>
            </Box>

            <Flex alignItems={"center"} display={{ base: "none", md: "block" }}>
              <HStack spacing={8} alignItems={"center"}>
                <AnchorLink to="/#TechStack">
                  <Text fontSize={"xl"} fontWeight={"semibold"}>
                    Tech Stack
                  </Text>
                </AnchorLink>
                <AnchorLink to="/#Industries">
                  <Text fontSize={"xl"} fontWeight={"semibold"}>
                    Industries
                  </Text>
                </AnchorLink>
                <AnchorLink to="/#Company">
                  <Text fontSize={"xl"} fontWeight={"semibold"}>
                    Company
                  </Text>
                </AnchorLink>
                <AnchorLink to="/#Projects">
                  <Text fontSize={"xl"} fontWeight={"semibold"}>
                    Projects
                  </Text>
                </AnchorLink>
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
                display={{ base: "none", md: "block" }}
              >
                Contact Us
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
