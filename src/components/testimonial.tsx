import { Box, Divider, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Testimonial({ text1, text2, person, country, summary, industry, teamSize, duration, budget, technologies }: { text1: string, text2: string, person: string, country: string, summary: string, industry: string, teamSize: string, duration: string, budget: string, technologies: string[] }) {
    return (
        <Grid templateColumns={'repeat(2, 1fr)'} textColor='gray.600' p={10}>
            <VStack flexBasis={''} p={10} spacing={8} backgroundColor={'gray.100'}>
                <Text textColor={'black'} fontSize={'2xl'}>"{text1}"</Text>
                <Divider colorScheme={'red'} />
                <Text>{text2}</Text>
                <Text> - {person} </Text>
            </VStack>
            <VStack p={10} align={'start'} spacing={12}>
                <Box>
                    <Text textColor={'black'} fontWeight={'semibold'}>COUNTRY</Text>
                    <Text>{country}</Text>
                </Box>

                <Box>
                    <Text textColor={'black'} fontWeight={'semibold'}>PROJECT SUMMARY</Text>
                    <Text>{summary}</Text>
                </Box>

                <HStack spacing={6}>
                    <VStack align='start'>
                        <Text textColor={'black'} fontWeight={'semibold'}>INDUSTRY</Text>
                        <Text>{industry}</Text>
                    </VStack>
                    <VStack align='start'>
                        <Text textColor={'black'} fontWeight={'semibold'}>TEAM SIZE</Text>
                        <Text>{teamSize}</Text>
                    </VStack>
                    <VStack align='start'>
                        <Text textColor={'black'} fontWeight={'semibold'}>DURATION</Text>
                        <Text>{duration}</Text>
                    </VStack>
                    <VStack align='start'>
                        <Text textColor={'black'} fontWeight={'semibold'}>BUDGET</Text>
                        <Text>{budget}</Text>
                    </VStack>
                </HStack>
                <Box>
                    <Text textColor={'black'} fontWeight={'semibold'}>TECHNOLOGIES</Text>
                    <Text>{technologies.join(' / ')}</Text>
                </Box>

            </VStack>
        </Grid>
    )
}