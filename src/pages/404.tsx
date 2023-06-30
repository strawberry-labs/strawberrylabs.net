import React from "react";
import { Box, VStack, Heading, Container, Flex } from "@chakra-ui/react";
import Lottie from 'react-lottie';
import Animation404 from '../lotties/404error'

import Layout from "../components/layout";

function NotFoundPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation404,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Layout modalOpen={false}>
      <VStack minH={'xl'} p={10} textAlign={"center"}>
        <Box mt={28} alignItems={'center'}>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
          />
        </Box>
      </VStack>
    </Layout >
  )
}

export default NotFoundPage

