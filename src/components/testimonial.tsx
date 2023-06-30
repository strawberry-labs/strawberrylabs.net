import { Box, Divider, Flex, Grid, HStack, Text, VStack, Stack } from "@chakra-ui/react";
import React from "react";

export default function Testimonial({ text1, text2, person, country, summary, industry, teamSize, duration, budget, technologies }: { text1: string, text2: string, person: string, country: string, summary: string, industry: string, teamSize: string, duration: string, budget: string, technologies: string[] }) {
    return (
        <HStack wrap='wrap' textColor='gray.600' p={{ lg: 10 }} justify={'center'}>
            <VStack minW={'60'} maxW={'xl'} p={{ base: 4, lg: 10 }} spacing={{ base: 4, lg: 8 }} backgroundColor={'gray.100'}>
                <Text textColor={'black'} fontSize={{ base: 'xl', lg: '2xl' }}>"{text1}"</Text>
                <Divider colorScheme={'red'} />
                <Text fontSize={{ base: 'xs', lg: 'md' }}>{text2}</Text>
                <Text> - {person} </Text>
            </VStack>
            <VStack p={{ base: 4, lg: 10 }} align={'end'} spacing={12}>
                <Box textAlign={'end'}>
                    <Text textColor={'black'} fontWeight={'semibold'}>COUNTRY</Text>
                    <Text>{country}</Text>
                </Box>

                <Box textAlign={'end'}>
                    <Text textColor={'black'} fontWeight={'semibold'}>PROJECT SUMMARY</Text>
                    <Text>{summary}</Text>
                </Box>

                <Stack direction={{ base: 'column', lg: 'row' }} wrap='wrap' align={'end'}>
                    <VStack align='end'>
                        <Text textColor={'black'} fontWeight={'semibold'}>INDUSTRY</Text>
                        <Text>{industry}</Text>
                    </VStack>
                    <VStack align='end'>
                        <Text textColor={'black'} fontWeight={'semibold'}>TEAM SIZE</Text>
                        <Text>{teamSize}</Text>
                    </VStack>
                    <VStack align='end'>
                        <Text textColor={'black'} fontWeight={'semibold'}>DURATION</Text>
                        <Text>{duration}</Text>
                    </VStack>
                    <VStack align='end'>
                        <Text textColor={'black'} fontWeight={'semibold'}>BUDGET</Text>
                        <Text>{budget}</Text>
                    </VStack>
                </Stack>
                <Box textAlign={'end'}>
                    <Text textColor={'black'} fontWeight={'semibold'}>TECHNOLOGIES</Text>
                    <Text>{technologies.join(' / ')}</Text>
                </Box>

            </VStack>
        </HStack>
    )
}