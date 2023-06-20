import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero({ onOpen }: { onOpen: any }) {
  return (
    <Flex
      w={"full"}
      h={"65vh"}
      backgroundImage={"url(https://gcdnb.pbrd.co/images/Gc3DKPYNNH7K.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      pt={70}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.200, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={8}>
          <Text
            color={"black"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "4xl", md: "6xl" })}
          >
            Software Development Company
          </Text>
          <Text
            color={"black"}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "xl", md: "3xl" })}
          >
            Take the software path to your digital future
          </Text>
          <Stack direction={"row"}>
            <Button
              size={"lg"}
              bg={"#D91E53"}
              color={"white"}
              _hover={{ bg: "#E23770" }}
              onClick={onOpen}
            >
              Book Consultation
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
