import React from 'react'
import {
    Box,
    Text,
    VStack,
    Image,
    Button
} from '@chakra-ui/react';

import { ArrowForwardIcon } from "@chakra-ui/icons";

import SimpleSlider from "../slider";

const data = [
    {
        title: "Financial Services",
        desc: "Thanks to our expertise and track record in Finance, we are a cost-effective and trusted vendor of custom-built software for companies of different sizes and in different jurisdictions."
    },
    {
        title: "Healthcare",
        desc: "As a team of HealthTech experts, we ensure usability, compliance, data security, improved efficiency, interoperability, and the best value for money for healthcare providers and medical researchers."
    },
    {
        title: "Media & Entertainment",
        desc: "Strawberry Labs provides its customers from the Media & Entertainment sector with intuitive and convenient-to-use solutions, including VOD and OTT streaming tools, broadcasting services, etc."
    },
    {
        title: "Telecom",
        desc: "Strawberry Labs' dedicated Telecom software developers and other experts are ready to help you with such solutions as OSS/BSS, telecom-specific web and mobile apps, VoIP projects, etc."
    },
    {
        title: "Logistics Software",
        desc: "Strawberry Labs' custom software development expertise in Logistics, Supply Chain, Transportation, and Warehousing enables us to handle projects of a wide scope, giving you leverage to grow and succeed."
    },
    {
        title: "eCommerce Solutions",
        desc: "With our knowledge of the contemporary eCommerce landscape and hands-on skills tested on challenging products, we can deliver advanced solutions that drive revenue and increase sales."
    }
]

function IndustryCard({ text1, text2 }: { text1: string, text2: string }) {
    return (
        <Box px={4} my={1}>
            <VStack shadow={"base"} align={'start'} p={6} _hover={{ shadow: "2xl" }}>
                <Text fontSize={'2xl'}>{text1}</Text>
                <Text>{text2}</Text>
                <Button rightIcon={<ArrowForwardIcon />} variant={'Link'} _hover={{ textColor: "#ba0236" }}>See more</Button>
            </VStack>
        </Box>
    )
}

export default function Section8() {
    return (
        <Box id='Industries'>
            <Box>
                <Text fontSize={{ base: '3xl', lg: '5xl' }} mt={{ base: 8, lg: 16 }} mx={{ base: 10, lg: 20 }}>A software company with over 1,000 implemented initiatives</Text>
                <Text fontSize={{ base: 'md', lg: 'xl' }} mx={{ base: 10, lg: 20 }} mt={{ base: 4, lg: 8 }}>As a top-ranked and trusted software development company, we run a pool of proficient IT experts and use the best available tools and techniques to engineer advanced software for our customers.</Text>
            </Box>
            <Box display={{ base: 'none', lg: 'block' }} >
                <SimpleSlider slidesToShow={4} horizontalMargin={12} arrows={true}>
                    {data.map(item => (<IndustryCard text1={item.title} text2={item.desc} />))}
                </SimpleSlider>
            </Box>
            <Box display={{ base: 'block', lg: 'none' }} >
                <SimpleSlider slidesToShow={1} horizontalMargin={4} arrows={false}>
                    {data.map(item => (<IndustryCard text1={item.title} text2={item.desc} />))}
                </SimpleSlider>
            </Box>
        </Box>
    )
}