import React from "react";
import { Box, Stack, Heading, Container, Flex } from "@chakra-ui/react";

import HoverBox from "../hoverBox";
import SimpleSlider from "../slider";

export default function Section1() {
  return (
    <>
      <Box p={{ base: 2, md: 10 }}>
        <Stack spacing={2} as={Container} maxW={"6xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", md: "5xl" }} mt={10}>
            Fuel your project with an expert team of industry-focused engineers
          </Heading>
        </Stack>

        <Flex maxW={"6xl"} mt={{ base: "", md: "14" }} mx={'auto'} mb={10} display={{ base: "none", md: "flex" }} justify="space-around">
          <HoverBox
            text1="25+"
            text2="successful projects"
            text3="For over a decade, we have developed thousands of outstanding projects that have helped our customers accomplish their business goals"
          />

          <HoverBox
            text1="5"
            text2="years in business"
            text3="For years, we’ve been providing high-quality IT services for customers from the most dynamic sectors, focusing on the best practices and greatest results"
          />

          <HoverBox
            text1="10+"
            text2="qualified specialists"
            text3="Strawberry Labs employs thousands of IT experts in numerous technical and business industries to fulfill our customers' software initiatives"
          />
        </Flex>

        <Box display={{ base: "block", md: "none" }}>
          <SimpleSlider
            slidesToShow={1}
            arrows={false}
            variableWidth={true}
            horizontalMargin={2}
          >
            <HoverBox
              text1="25+"
              text2="successful projects"
              text3="We've delivered numerous successful projects that have achieved our customers' business objectives for more than a decade"
            />

            <HoverBox
              text1="5"
              text2="years in business"
              text3="For years, we’ve been providing high-quality IT services for customers from the most dynamic sectors, focusing on the best practices and greatest results"
            />

            <HoverBox
              text1="20+"
              text2="qualified specialists"
              text3="Strawberry Labs employs thousands of IT experts in numerous technical and business industries to fulfill our customers' software initiatives"
            />
          </SimpleSlider>
        </Box>
      </Box>
    </>
  );
}
