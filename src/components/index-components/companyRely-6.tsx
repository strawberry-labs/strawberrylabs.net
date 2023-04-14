import React from 'react'
import {
    Text,
    Flex,
    Image,
    HStack,
    VStack,
    Button,
    Stack,
    Card,
    CardBody,
    Divider,
    Link
} from '@chakra-ui/react';

import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Section5() {
    return (
        <VStack backgroundColor='gray.800' align={'start'} p={{ base: 8, md: 20 }} spacing={8}>
            <Text textColor={"whiteAlpha.900"} fontSize={{ base: "3xl", md: "4xl" }} >Top Companies rely on Andersen</Text>
            <Text textColor={"whiteAlpha.900"}>Latest Projects</Text>
            <Card minW={'60'} maxW={{ lg: '6xl' }} maxH={'3xl'}>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    maxH={'xs'}
                    minW={{ base: '60', lg: '6xl' }}
                />
                <CardBody>
                    <Stack spacing={4} align="start" m="4">
                        <Text>
                            Tool for effective diagnoses of skin conditions and related diseases with a further treatment routine.
                        </Text>
                        <Button rightIcon={<ArrowForwardIcon />} variant={'Link'}>Read reference</Button>
                        <HStack>
                            <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>10 specialists</Text>
                            <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>24 months</Text>
                        </HStack>
                    </Stack>
                </CardBody>
                <Divider />
            </Card>
            <Stack direction={{ base: 'column', lg: 'row' }} spacing='8'>
                <Card maxW={{ lg: 'sm' }}>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <CardBody>
                        <Stack spacing={4} align="start" m="4">
                            <Text>
                                Tool for effective diagnoses of skin conditions and related diseases with a further treatment routine.
                            </Text>
                            <Button rightIcon={<ArrowForwardIcon />} variant={'Link'}>Read reference</Button>
                            <HStack>
                                <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>10 specialists</Text>
                                <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>24 months</Text>
                            </HStack>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
                <Card maxW={{ lg: 'sm' }}>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <CardBody>
                        <Stack spacing={4} align="start" m="4">
                            <Text>
                                Tool for effective diagnoses of skin conditions and related diseases with a further treatment routine.
                            </Text>
                            <Button rightIcon={<ArrowForwardIcon />} variant={'Link'}>Read reference</Button>
                            <HStack>
                                <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>10 specialists</Text>
                                <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>24 months</Text>
                            </HStack>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
                <Card maxW={{ lg: 'sm' }}>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <CardBody>
                        <Stack spacing={4} align="start" m="4">
                            <Text>
                                Tool for effective diagnoses of skin conditions and related diseases with a further treatment routine.
                            </Text>
                            <Button rightIcon={<ArrowForwardIcon />} variant={'Link'}>Read reference</Button>
                            <HStack>
                                <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>10 specialists</Text>
                                <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>24 months</Text>
                            </HStack>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
            </Stack>
            <HStack backgroundColor={'gray.700'} p={4} px={8} wrap={{ base: 'wrap' }}>
                <Text textColor={"whiteAlpha.900"} fontSize={{ base: 'md', lg: "xl" }} mb={{ base: 4 }}>With numerous IT projects delivered, our custom software development company provides a detailed estimate for your IT initiative.</Text>
                <Link
                    backgroundColor={'yellow.400'}
                    size={'sm'}
                    mr={{ lg: 4 }}
                    p={4}
                    href={'pricing'}
                    w={{ md: "xs" }}
                    textAlign={'center'}>
                    Calculate your project
                </Link>
            </HStack>
        </VStack>

    )
}