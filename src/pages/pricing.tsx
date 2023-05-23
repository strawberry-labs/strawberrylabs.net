import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  HStack,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  CheckboxGroup,
  Checkbox,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Divider,
} from "@chakra-ui/react";
import Layout from "../components/layout";
import FormCheckBoxGroup from "../components/formCheckBoxGroup";
import FormRadioGroup from "../components/formRadioGroup";

export default function Pricing() {
  return (
    <Layout>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <HStack
          w={"full"}
          justify={"start"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack
            maxW={"2xl"}
            align={"flex-start"}
            spacing={6}
            mt={"40"}
            ml={"14"}
          >
            <Text
              color={"white"}
              fontWeight={200}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "5xl", md: "6xl" })}
            >
              Pricing
            </Text>
            <Text
              color={"white"}
              fontWeight={400}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
            >
              Get an approximate cost of our services for your project
            </Text>
          </Stack>
        </HStack>
      </Flex>
      <VStack spacing={10} my={20}>
        <Text fontSize={"5xl"}>Request an IT project cost estimate</Text>
        <Tabs size={'lg'}>
          <TabList>
            <Tab>Custom Software Development</Tab>
            <Tab>Team Augmentation</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <VStack pt={6} pb={6}>
                <FormCheckBoxGroup
                  text={
                    "1. What type of software solution would you like to develop with Andersen?"
                  }
                  val1={"Desktop"}
                  val2={"mobile"}
                  val3={"web"}
                  val4={"Consultancy needed"}
                />

                <FormRadioGroup
                  text={
                    "2. What is the current stage of your software development process?"
                  }
                  val1={"Idea"}
                  val2={"Prototype/Specification"}
                  val3={"Designed solution"}
                  val4={"MVP"}
                />

                <FormCheckBoxGroup
                  text={
                    "3. Do you need a professional consultation from any of the specialists below?"
                  }
                  val1={"Project Manager"}
                  val2={"Business Analyst"}
                  val3={"UI/UX Designer"}
                  val4={"Architect"}
                />

                <FormRadioGroup
                  text={"4. Please specify your business industry:"}
                  val1={"Financial Services"}
                  val2={"eCommerce"}
                  val3={"Telecom"}
                  val4={"Enterprise"}
                />

                <Box py={6}>
                  <Text fontSize={{ base: '5xl', lg: '3xl' }}>5. What is the expected duration of your project?</Text>
                  <Slider defaultValue={1} min={0} max={24} step={1}>
                    <SliderTrack bg="yellow.100">
                      <Box position="relative" right={10} my={6} />
                      <SliderFilledTrack bg="yellow.400" />
                    </SliderTrack>
                    <SliderThumb boxSize={6} />
                  </Slider>
                </Box>

                <Button>Get Pricing</Button>
              </VStack>
            </TabPanel>
            <TabPanel>
              <Text>Team Augmentation</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Layout>
  );
}

// TODO: CHECK CHECKBOX HOOK IN CHAKRA
