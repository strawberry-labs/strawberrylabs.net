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
import b2connect from '../../images/b2connect.png'
import ecoventure from '../../images/ecoventure.png'
import ecoventure2 from '../../images/ecoventure2.png'
import logoImb from '../../images/logo-imb.jpg'
import nationalwater from '../../images/nationalwater.jpg'
import ossian from '../../images/ossian.png'
import takaful from '../../images/Takaful-Emarat-logo.png'


export default function section2() {
    return (
        <>
            <Box backgroundColor='gray.200' display={{ base: 'none', 'md': 'block' }} align={'center'} py={10}>
                <Flex justify={'space-around'} maxW={'6xl'} >
                    <Image src={b2connect} boxSize={'24'} />
                    <Image src={takaful} boxSize={'24'} />
                    <Image src={ecoventure2} boxSize={'24'} />
                    <Image src={logoImb} boxSize={'24'} />
                    <Image src={nationalwater} boxSize={'24'} />
                    <Image src={ossian} boxSize={'24'} />
                </Flex>
            </Box>

            <Box backgroundColor='gray.200' display={{ base: 'block', 'md': 'none' }} align={'center'} mt={5} py={4}>
                <Text fontSize={'2xl'} mx={12}>Companies we've worked with</Text>
                <SimpleSlider slidesToShow={2} arrows={false}>
                    <Box><Image src={b2connect} boxSize={'20'} /></Box>
                    <Box><Image src={takaful} boxSize={'20'} /></Box>
                    <Box><Image src={ecoventure2} boxSize={'20'} /></Box>
                    <Box><Image src={logoImb} boxSize={'20'} /></Box>
                    <Box><Image src={nationalwater} boxSize={'20'} /></Box>
                    <Box><Image src={ossian} boxSize={'20'} /></Box>
                </SimpleSlider >
            </Box >
        </>
    )
}