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
    Card,
    CardBody,
    Divider
} from '@chakra-ui/react';

import { ArrowForwardIcon } from "@chakra-ui/icons";

import Gatsby from '../../images/icon.png'
import ManagedDelivery from '../../images/ManagedDelivery.jpg'
import DedicatedTeam from '../../images/DedicatedTeam.jpg'
import DedicatedTeam2 from '../../images/DedicatedTeam2.jpg'
import StaffAugmentation from '../../images/StaffAugmentation.jpg'


export default function Section4() {
    return (
        <VStack p={{ base: 8, md: 16 }} backgroundColor='gray.100' spacing={8} align={'center'}>
            <Text fontSize={'4xl'} mb="10" display={{ base: 'none', md: 'block' }}>Collaboration models with our custom software development company</Text>
            <Text fontSize={'3xl'} mb="10" display={{ base: 'block', md: 'none' }}>Collaboration models</Text>
            <Stack direction={{ base: "column", lg: "row" }} maxW={'6xl'} spacing={2}>
                <Card >
                    <CardBody>
                        <Stack spacing={4} align="start" m="4">
                            <HStack>

                                <Text
                                    fontSize={"sm"}
                                    rounded={"3xl"}
                                    backgroundColor={"gray.200"}
                                    p={2}
                                    px={4}
                                >
                                    Managed Delivery
                                </Text>
                            </HStack>
                            <Text fontSize={'2xl'}>Develop a robust software solution</Text>
                            <Text> - Your IT project delegated to a trusted vendor;</Text>
                            <Text> - Strawberry labs shares responsibility for turning your vision into reality.</Text>
                            <Button rightIcon={<ArrowForwardIcon />} variant={"Link"}>
                                Learn more
                            </Button>
                        </Stack>
                    </CardBody>
                    <Image
                        src={ManagedDelivery}

                    />
                </Card>
                <Card >
                    <CardBody>
                        <Stack spacing={4} align="start" m="4">
                            <HStack>

                                <Text
                                    fontSize={"sm"}
                                    rounded={"3xl"}
                                    backgroundColor={"gray.200"}
                                    p={2}
                                    px={4}
                                >
                                    Staff augmentation
                                </Text>
                            </HStack>
                            <Text fontSize={'2xl'}>Hire top notch experts</Text>
                            <Text> - Specialists with tailored-fit skills who meet all your needs;</Text>
                            <Text> - An extensive talent pool of IT specialists at your disposal in no time.</Text>
                            <Button rightIcon={<ArrowForwardIcon />} variant={"Link"}>
                                Learn more
                            </Button>
                        </Stack>
                    </CardBody>
                    <Image
                        src={StaffAugmentation}

                    />
                </Card>
                <Card >
                    <CardBody>
                        <Stack spacing={4} align="start" m="4">
                            <HStack>

                                <Text
                                    fontSize={"sm"}
                                    rounded={"3xl"}
                                    backgroundColor={"gray.200"}
                                    p={2}
                                    px={4}
                                >
                                    Dedicated Team
                                </Text>
                            </HStack>
                            <Text fontSize={'2xl'}>Get a dedicated Agile team</Text>
                            <Text> - A fully-staffed IT team assembled for your unique needs;</Text>
                            <Text> - You retain strategic control over the development process.</Text>
                            <Button rightIcon={<ArrowForwardIcon />} variant={"Link"}>
                                Learn more
                            </Button>
                        </Stack>
                    </CardBody>
                    <Image
                        src={DedicatedTeam2}

                    />
                </Card>

            </Stack>

        </VStack>
    )
}