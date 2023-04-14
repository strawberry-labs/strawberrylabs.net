import React from 'react'
import {
    Box,
    Text,
    Flex,
    Select,
    Input,
    Checkbox,
    Stack,
    HStack,
    Button,
    VStack,
    Image
} from '@chakra-ui/react';

import Samsung from '../../images/samsung-color.svg'

export default function Section9() {
    return (
        <>
            <Box mx={{ base: '10', lg: '20' }} my={{ base: '7', lg: '14' }}>
                <Text fontSize={{ base: '3xl', lg: '5xl' }} display={{ base: 'block', md: 'none' }}>Request a free IT consultation</Text>
                <Text fontSize={{ base: 'md', lg: 'xl' }} display={{ base: 'block', md: 'none' }}>Fill out the form below to receive a free consultation and find out how Andersen can help your business grow.</Text>
            </Box>
            <Flex mx={{ base: '10', lg: '20' }} my={{ base: '7', lg: '14' }}>
                <VStack width={'lg'} align={'start'} spacing={6} pr={20} display={{ base: 'none', lg: 'block' }}>
                    <Text fontSize={{ base: '3xl', lg: '5xl' }}>Request a free IT consultation</Text>
                    <Text fontSize={{ base: 'md', lg: 'xl' }}>Fill out the form below to receive a free consultation and find out how Andersen can help your business grow.</Text>
                    <VStack my={4} spacing={4} align={'start'}>
                        <Text>What happens next?</Text>
                        <HStack>
                            <Text rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4} mr={6}>1</Text>
                            <Text>An expert contacts you shortly after having analyzed your business requirements;</Text>
                        </HStack>
                        <HStack>
                            <Text rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4} mr={6}>2</Text>
                            <Text>2. If required, we sign an NDA to ensure the highest privacy level;</Text>
                        </HStack>
                        <HStack>
                            <Text rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4} mr={6}>3</Text>
                            <Text>3. A Pre-Sales Manager submits a comprehensive project proposal. It may include estimates, timelines, lists of CVs, etc., for a particular situation.</Text>
                        </HStack>
                    </VStack>
                    <Text>Customers who trust us</Text>
                    <HStack>
                        <Image src={Samsung} />
                        <Image src={Samsung} />
                        <Image src={Samsung} />
                    </HStack>
                </VStack>
                <VStack width={'2xl'} backgroundColor={"gray.100"} align={'start'} spacing={10} p={14}>
                    <Select variant='flushed' placeholder='Select your industry'>
                        <option value='Healthcare'>Healthcare</option>
                        <option value='Financial Services'>Financial Services</option>
                        <option value='Logistics & Supply chain'>Logistics & Supply chain</option>
                        <option value='Media & Telecom'>Media & Telecom</option>
                        <option value='Other'>Other</option>
                    </Select>
                    <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 10, lg: 0 }}>
                        <Input variant='flushed' placeholder='Name' />
                        <Input variant='flushed' placeholder='Corporate E-mail' />
                    </Stack>
                    <Input variant='flushed' placeholder='Phone' />
                    <Text>We will call you ASAP or you can schedule a call</Text>
                    <Input variant='flushed' placeholder='Describe your project' />
                    <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 10, lg: 0 }}>
                        <Button backgroundColor={'yellow.300'} >Send Request</Button>
                        <Checkbox>I want to protect my data by signing an NDA</Checkbox>
                    </Stack>
                </VStack>
            </Flex>
        </>
    )
}