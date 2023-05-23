import React from "react";
import {
  Text,
  Flex,
  Image,
  HStack,
  VStack,
  Button,
  Stack,
  Card,
  CardBody,
  Divider,
  Link,
  Box,
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";

import Company1 from "../../images/company1.webp"
import Company2 from "../../images/company2.webp"
import Company3 from "../../images/company3.webp"
import Company4 from "../../images/company4.webp"

export default function Section5() {
  return (
    <Box id="Projects" backgroundColor="gray.800" p={{ base: 8, md: 20 }}>
      <Text textColor={"whiteAlpha.900"} fontSize={{ base: "3xl", md: "4xl" }}>
        Top Companies rely on Andersen
      </Text>
      <Text textColor={"whiteAlpha.900"}>Latest Projects</Text>
      <VStack
        align={"center"}
        spacing={8}
        mt={8}
      >
        <Card minW={"60"} maxW={{ lg: "6xl" }} maxH={"3xl"}>
          <Image
            src={Company1}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            maxH={"xs"}
            minW={{ base: "60", lg: "6xl" }}
          />
          <CardBody>
            <Stack spacing={4} align="start" m="4">
              <Text>
                A British-German travel company that is headquartered in Germany. The company is one of the largest in the world.
              </Text>
              <Button rightIcon={<ArrowForwardIcon />} variant={"Link"}>
                Read reference
              </Button>
              <HStack>
                <Text
                  fontSize={"sm"}
                  rounded={"3xl"}
                  backgroundColor={"gray.200"}
                  p={2}
                  px={4}
                >
                  7 specialists
                </Text>
                <Text
                  fontSize={"sm"}
                  rounded={"3xl"}
                  backgroundColor={"gray.200"}
                  p={2}
                  px={4}
                >
                  22 months
                </Text>
              </HStack>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
        <Stack direction={{ base: "column", lg: "row" }} spacing="8">
          <Card maxW={{ lg: "sm" }}>
            <Image
              src={Company2}
              borderRadius="lg"
            />
            <CardBody>
              <Stack spacing={4} align="start" m="4">
                <Text>
                  Tool for effective diagnoses of skin conditions and related diseases with a further treatment routine.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} variant={"Link"}>
                  Read reference
                </Button>
                <HStack>
                  <Text
                    fontSize={"sm"}
                    rounded={"3xl"}
                    backgroundColor={"gray.200"}
                    p={2}
                    px={4}
                  >
                    10 specialists
                  </Text>
                  <Text
                    fontSize={"sm"}
                    rounded={"3xl"}
                    backgroundColor={"gray.200"}
                    p={2}
                    px={4}
                  >
                    24 months
                  </Text>
                </HStack>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW={{ lg: "sm" }}>
            <Image
              src={Company3}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <CardBody>
              <Stack spacing={4} align="start" m="4">
                <Text>
                  A functional system for managing events, which is aimed at automating business processes.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} variant={"Link"}>
                  Read reference
                </Button>
                <HStack>
                  <Text
                    fontSize={"sm"}
                    rounded={"3xl"}
                    backgroundColor={"gray.200"}
                    p={2}
                    px={4}
                  >
                    3 specialists
                  </Text>
                  <Text
                    fontSize={"sm"}
                    rounded={"3xl"}
                    backgroundColor={"gray.200"}
                    p={2}
                    px={4}
                  >
                    48 months
                  </Text>
                </HStack>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW={{ lg: "sm" }}>
            <Image
              src={Company4}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <CardBody>
              <Stack spacing={4} align="start" m="4">
                <Text>
                  A platform for monitoring existing offers at the request of a client, which allows users to choose the best deal.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} variant={"Link"}>
                  Read reference
                </Button>
                <HStack>
                  <Text
                    fontSize={"sm"}
                    rounded={"3xl"}
                    backgroundColor={"gray.200"}
                    p={2}
                    px={4}
                  >
                    5 specialists
                  </Text>
                  <Text
                    fontSize={"sm"}
                    rounded={"3xl"}
                    backgroundColor={"gray.200"}
                    p={2}
                    px={4}
                  >
                    36+ months
                  </Text>
                </HStack>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Stack>
        <HStack backgroundColor={"gray.700"} p={4} px={8} wrap={{ base: "wrap" }}>
          <Text
            textColor={"whiteAlpha.900"}
            fontSize={{ base: "md", lg: "xl" }}
            mb={{ base: 4 }}
          >
            With numerous IT projects delivered, our custom software development
            company provides a detailed estimate for your IT initiative.
          </Text>
          <Link
            backgroundColor={"yellow.400"}
            size={"sm"}
            mr={{ lg: 4 }}
            p={4}
            href={"pricing"}
            w={{ md: "xs" }}
            textAlign={"center"}
          >
            Calculate your project
          </Link>
        </HStack>
      </VStack>
    </Box>

  );
}
