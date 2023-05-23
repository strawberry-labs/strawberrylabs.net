import React from 'react'
import {
    Link,
    Box,
    Text,
    Flex,
    Image,
    Center
} from '@chakra-ui/react';

import SimpleSlider from '../slider';

import Samsung from '../../images/samsung-color.svg'

export default function section2() {
    return (
        <>
            <Box backgroundColor='gray.200' align={'center'}>
                <Flex justify={'space-around'} maxW={'6xl'} display={{ base: 'none', 'md': 'flex' }}>
                    <Link href="https://google.com"><Image src={Samsung} boxSize={'36'} /></Link>
                    <Link href="https://google.com"><Image src={Samsung} boxSize={'36'} /></Link>
                    <Link href="https://google.com"><Image src={Samsung} boxSize={'36'} /></Link>
                    <Link href="https://google.com"><Image src={Samsung} boxSize={'36'} /></Link>
                    <Link href="https://google.com"><Image src={Samsung} boxSize={'36'} /></Link>
                </Flex >
            </Box>

            <Box display={{ base: 'block', 'md': 'none' }} mt={5}>
                <Text fontSize={'2xl'} mx={12}>Companies we've worked with</Text>
                <SimpleSlider slidesToShow={3} arrows={false}>
                    <Link href="https://google.com"><Image src={Samsung} boxSize={'28'} /></Link>
                    <Link href="https://google.com"><Image src={Samsung} boxSize={'28'} /></Link>
                    <Link href="https://google.com"><Image src={Samsung} boxSize={'28'} /></Link>
                    <Link href="https://google.com"><Image src={Samsung} boxSize={'28'} /></Link>
                    <Link href="https://google.com"><Image src={Samsung} boxSize={'28'} /></Link>
                </SimpleSlider>
            </Box>
        </>
    )
}