import React from 'react'
import {
    Text,
    Flex,
    Image,
    HStack,
    VStack,
    Button,
    Stack,
    useBreakpointValue,
} from '@chakra-ui/react';

import { ArrowForwardIcon } from "@chakra-ui/icons";

import Gatsby from '../../images/icon.png'


export default function Section4() {
    return (
        <VStack p={{ base: 8, md: 24 }} backgroundColor='gray.100' spacing={8} align={'center'}>
            <Text fontSize={'4xl'} mb="10" display={{ base: 'none', md: 'block' }}>Collaboration models with our custom software development company</Text>
            <Text fontSize={'3xl'} mb="10" display={{ base: 'block', md: 'none' }}>Collaboration models</Text>
            <HStack spacing={{ base: 0, lg: 28 }} wrap={'wrap'}>
                <HStack background={'white'} shadow="lg" p={8} mb={6}>
                    <VStack align={'start'} minW={{ base: '60' }} maxW={{ lg: '60' }} spacing={5}>
                        <Text fontSize={{ base: 'xs', md: 'sm' }} rounded={'3xl'} backgroundColor={"gray.200"} p={{ base: 1, md: 2 }} px={4}>Staff augmentation</Text>
                        <Text fontSize={'2xl'}>Hire top notch experts</Text>
                        <Text> - Specialists with tailored-fit skills who meet all your needs;</Text>
                        <Text> - An extensive talent pool of IT specialists at your disposal in no time.</Text>
                        <Button rightIcon={<ArrowForwardIcon />} variant={'Link'}>Learn more</Button>
                        <Image src={Gatsby} boxSize={'36'} display={{ base: 'block', md: 'none' }} />
                    </VStack>
                    <Image src={Gatsby} boxSize={'36'} display={{ base: 'none', md: 'block' }} />
                </HStack>
                <HStack background={'white'} shadow="lg" p={8} >
                    <VStack align={'start'} minW={{ base: '60' }} maxW={{ lg: '60' }} spacing={5}>
                        <Text fontSize={{ base: 'xs', md: 'sm' }} rounded={'3xl'} backgroundColor={"gray.200"} p={{ base: 1, md: 2 }} px={4}>Dedicated Team</Text>
                        <Text fontSize={'2xl'}>Get a dedicated Agile team</Text>
                        <Text> - A fully-staffed IT team assembled for your unique needs;</Text>
                        <Text> - You retain strategic control over the development process.</Text>
                        <Button rightIcon={<ArrowForwardIcon />} variant={'Link'}>Learn more</Button>
                        <Image src={Gatsby} boxSize={'36'} display={{ base: 'block', md: 'none' }} />
                    </VStack>
                    <Image src={Gatsby} boxSize={'36'} display={{ base: 'none', md: 'block' }} />
                </HStack>
            </HStack>
            <HStack background={'white'} shadow="lg" p={8} w={{ lg: '5xl' }}>
                <VStack align={'start'} spacing={5} minW={{ base: '60' }}>
                    <Text fontSize={{ base: 'xs', md: 'sm' }} rounded={'3xl'} backgroundColor={"gray.200"} p={{ base: 1, md: 2 }} px={4}>Managed Delivery</Text>
                    <Text fontSize={'2xl'}>Develop a robust software solution</Text>
                    <Text> - Your IT project delegated to a trusted vendor;</Text>
                    <Text> - Andersen shares responsibility for turning your vision into reality.</Text>
                    <Button rightIcon={<ArrowForwardIcon />} variant={'Link'}>Learn more</Button>
                    <Image src={Gatsby} boxSize={'36'} display={{ base: 'block', md: 'none' }} />
                </VStack>
                <Image src={Gatsby} boxSize={'36'} display={{ base: 'none', md: 'block' }} />
            </HStack>
        </VStack>
    )
}