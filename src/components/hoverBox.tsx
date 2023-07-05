import { Box, Fade, Text, Flex, useDisclosure } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export default function HoverBox({
  text1,
  text2,
  text3,
}: {
  text1: string;
  text2: string;
  text3: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box display={{ base: "none", lg: "block" }} width={"xs"}>
        <Fade in={!isOpen} hidden={isOpen}>
          <Box
            textAlign={"center"}
            backgroundColor={"white.100"}
            py={10}
            hidden={isOpen}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            shadow={"lg"}
          >
            <Text fontSize={"5xl"}>{text1}</Text>
            <Text fontSize={"xl"}>{text2}</Text>
          </Box>
        </Fade>
        <Fade in={isOpen} hidden={!isOpen}>
          <Box
            shadow={"lg"}
            py={6}
            px={6}
            hidden={!isOpen}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
            <Text fontSize={"lg"}>{text3}</Text>
          </Box>
        </Fade>
      </Box>
      <Box
        shadow={"lg"}
        width={{ base: "48", md: "56" }}
        mx={2}
        py={4}
        px={4}
        display={{ base: "block", lg: "none" }}
      >
        <Flex>
          <Text fontSize={"3xl"}>{text1}</Text>
          <Text ml={3} mt={5}>
            {text2}
          </Text>
        </Flex>
        <Text fontSize={"sm"} mt={4}>
          {text3}
        </Text>
      </Box>
    </Box>
  );
}
