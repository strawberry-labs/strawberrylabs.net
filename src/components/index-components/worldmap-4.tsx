import React from 'react'
import {
    Text,
    Flex,
    Image,
    HStack,
    Stack,
    useBreakpointValue,
} from '@chakra-ui/react';

import WorldMap from '../../images/World_map_with_points.svg'

export default function Section3() {
    return (
        <Flex
            h={{ base: 'lg', md: 'xl', lg: '100vh' }}
            backgroundImage={WorldMap}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
            backgroundColor="gray.900">
            <HStack
                justify={'start'}
                px={useBreakpointValue({ base: 0, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={10} ml={{ base: '8', md: '14' }}>
                    <Text
                        color={'white'}
                        fontWeight={200}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}>
                        Strawberry Labs in UAE
                    </Text>
                    <Text
                        color={'white'}
                        fontWeight={400}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: 'md', md: '2xl' })}>
                        As a well-established company in UAE, Strawberry Labs has won the trust of multiple customers working all over the EU with our high-caliber tech support services. We can thoroughly analyze and fully understand your needs to start delivering the best possible outcomes. Our history, customer referrals, and experienced employees are our guarantee of success!
                    </Text>
                    <HStack wrap={'wrap'}>
                        <HStack>
                            <Text
                                color={'white'}
                                fontWeight={200}
                                lineHeight={1.2}
                                fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}>100%</Text>
                            <Text
                                color={'white'}
                                fontWeight={200}
                                lineHeight={1.2}
                                fontSize={useBreakpointValue({ base: '1xl', md: '1xl' })}
                                width="20">GDPR compliant</Text>
                        </HStack>
                        <HStack>
                            <Text
                                color={'white'}
                                fontWeight={200}
                                lineHeight={1.2}
                                fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}>4.9</Text>
                            <Text
                                color={'white'}
                                fontWeight={200}
                                lineHeight={1.2}
                                fontSize={useBreakpointValue({ base: '1xl', md: '1xl' })}
                                width="40">Clutch-rated software company</Text>
                        </HStack>
                        <HStack>
                            <Text
                                color={'white'}
                                fontWeight={200}
                                lineHeight={1.2}
                                fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}>80%</Text>
                            <Text
                                color={'white'}
                                fontWeight={200}
                                lineHeight={1.2}
                                fontSize={useBreakpointValue({ base: '1xl', md: '1xl' })}
                                width="40">of clients return for their next projects</Text>
                        </HStack>
                    </HStack>
                </Stack>
            </HStack>
        </Flex >
    )
}