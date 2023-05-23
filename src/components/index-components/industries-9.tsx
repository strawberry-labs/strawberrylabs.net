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
        desc: "Andersen will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more."
    },
    {
        title: "Financial Serv 2",
        desc: "Andersen will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more."
    },
    {
        title: "Financial Serv 3",
        desc: "Andersen will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more."
    },
    {
        title: "Financial Serv 4",
        desc: "Andersen will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more."
    },
    {
        title: "Financial Serv 5",
        desc: "Andersen will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more."
    },
    {
        title: "Financial Serv 6",
        desc: "Andersen will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more."
    }
]

function IndustryCard({ text1, text2 }: { text1: string, text2: string }) {
    return (
        <Box px={4} my={1}>
            <VStack shadow={"base"} align={'start'} p={6} _hover={{ shadow: "2xl" }}>
                <Image src="/tinyLogo.svg" />
                <Text fontSize={'2xl'}>{text1}</Text>
                <Text>{text2}</Text>
                <Button rightIcon={<ArrowForwardIcon />} variant={'Link'} _hover={{ textColor: "yellow.300" }}>See more</Button>
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
            <Box display={{ base: 'none', lg: 'block' }}>
                <SimpleSlider slidesToShow={4} horizontalMargin={12} arrows={true}>
                    {data.map(item => (<IndustryCard text1={item.title} text2={item.desc} />))}
                </SimpleSlider>
            </Box>
            <Box display={{ base: 'block', lg: 'none' }}>
                <SimpleSlider slidesToShow={1} horizontalMargin={4} arrows={false}>
                    {data.map(item => (<IndustryCard text1={item.title} text2={item.desc} />))}
                </SimpleSlider>
            </Box>
        </Box>
    )
}