import React, { useState } from 'react'
import {
    Box,
    Text,
    HStack,
    Button,
    VStack,
    Link,
    Image
} from '@chakra-ui/react';

import SimpleSlider from "../slider";

import Android from '../../images/Android.svg'

const techData = [
    { name: "Android", image: "/Android.svg", type: ["popular", "mobile"] },
    { name: "Express", image: "/Android.svg", type: ["popular", "backend"] },
    { name: "React", image: "/Android.svg", type: ["frontend"] },
]

export default function Section7() {
    const [techFilter, setTechFilter] = useState("popular")

    return (
        <Box>
            <Text fontSize={{ base: '3xl', lg: '5xl' }} mt={{ base: 6, lg: 12 }} mx={{ base: 10, lg: 20 }}>Andersen's set of technologies for software development</Text>
            <Text fontSize={{ base: 'md', lg: 'xl' }} mx={{ base: 10, lg: 20 }} mt={{ base: 4, lg: 8 }}>Cooperate with competent and knowledgeable IT experts in desktop, web, and mobile software engineering. As a trusted tech and business partner, we apply the most advanced technologies, frameworks, and components to build software notable for both its solid and effective back-end with intuitive UI/UX.</Text>
            <HStack spacing={{ lg: 5 }} mx={{ base: 10, lg: 20 }} mt={{ base: 6, lg: 12 }} wrap={'wrap'}>
                <Button onClick={() => setTechFilter('popular')} isActive={techFilter === "popular" ? true : false}>Popular</Button>
                <Button onClick={() => setTechFilter('mobile')} isActive={techFilter === "mobile" ? true : false}>Android</Button>
                <Button onClick={() => setTechFilter('frontend')} isActive={techFilter === "frontend" ? true : false}>Frontend</Button>
            </HStack>
            <Box display={{ base: 'none', 'lg': 'block' }}>
                <SimpleSlider slidesToShow={4} variableWidth={true} arrows={true} horizontalMargin={14}>
                    {techData.filter((item) => item.type.includes(techFilter)).map((item) => (
                        <Box mx={5} my={1}>
                            <VStack shadow={'base'} p={14} w={52}>
                                <Image mb={6} src={Android} />
                                <Link>{item.name}</Link>
                            </VStack>
                        </Box>
                    ))}
                </SimpleSlider>
            </Box>
            <Box display={{ base: 'block', 'lg': 'none' }}>
                <SimpleSlider slidesToShow={2} variableWidth={true} arrows={false} horizontalMargin={0}>
                    {techData.filter((item) => item.type.includes(techFilter)).map((item) => (
                        <Box mx={2} my={1}>
                            <VStack shadow={'base'} p={{ base: 5, lg: 14 }} w={32}>
                                <Image mb={6} src={Android} />
                                <Link>{item.name}</Link>
                            </VStack>
                        </Box>
                    ))}
                </SimpleSlider>
            </Box>
        </Box>
    )
}