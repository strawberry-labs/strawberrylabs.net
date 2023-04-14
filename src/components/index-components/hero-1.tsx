import React from 'react'
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue
} from '@chakra-ui/react';

export default function Hero({ onOpen }: { onOpen: any }) {
    return (
        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={
                'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '4xl', md: '6xl' })}>
                        Software Development Company
                    </Text>
                    <Text
                        color={'white'}
                        fontWeight={300}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: 'xl', md: '3xl' })}>
                        Take the software path to your digital future
                    </Text>
                    <Stack direction={'row'}>
                        <Button
                            bg={'blue.400'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'blue.500' }}
                            onClick={onOpen}>
                            Lets discuss your project
                        </Button>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
    )
}