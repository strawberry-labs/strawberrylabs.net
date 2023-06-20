import React, { useState } from 'react'
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
    Image,
    FormControl,
    FormErrorMessage,
    FormLabel
} from '@chakra-ui/react';

import { Script } from 'gatsby';

import { DatePicker } from "chakra-ui-date-input";

import Samsung from '../../images/samsung-color.svg'

export default function Section9() {

    const [industry, setIndustry] = useState('Healthcare')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dateTime, setDateTime] = useState('')
    const [description, setDescription] = useState('')
    const [nda, setNda] = useState(false)

    const isNameError = name != '' && !/^([a-zA-Z]+(\.|\s)*)$/.test(name);
    const isEmailError = email != '' && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPhoneError = phone != '' && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/.test(phone);

    const formSubmit = () => {
        grecaptcha.ready(function () {
            grecaptcha.execute('6Lfoie0lAAAAALq3cYlnw0covuSn-R572z4h03GX', { action: 'submit' }).then(function (token) {
                fetch(`/api/saveData`, {
                    method: 'POST',
                    mode: "cors",
                    body: JSON.stringify({ industry, name, email, phone, dateTime, description, nda, token })
                })
            });
        });
    }

    return (
        <>
            <Script src="https://www.google.com/recaptcha/api.js?render=6Lfoie0lAAAAALq3cYlnw0covuSn-R572z4h03GX" />
            <Box mx={{ base: '10', lg: '20' }} my={{ base: '7', lg: '14' }}>
                <Text fontSize={{ base: '3xl', lg: '5xl' }} display={{ base: 'block', md: 'none' }}>Request a free IT consultation</Text>
                <Text fontSize={{ base: 'md', lg: 'xl' }} display={{ base: 'block', md: 'none' }}>Fill out the form below to receive a free consultation and find out how Strawberry Labs can help your business grow.</Text>
            </Box>
            <Flex mx={{ base: '10', lg: '20' }} my={{ base: '7', lg: '14' }}>
                <VStack width={'lg'} align={'start'} spacing={6} pr={20} display={{ base: 'none', lg: 'block' }}>
                    <Text fontSize={{ base: '3xl', lg: '5xl' }}>Request a free IT consultation</Text>
                    <Text fontSize={{ base: 'md', lg: 'xl' }}>Fill out the form below to receive a free consultation and find out how Strawberry Labs can help your business grow.</Text>
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
                    <FormControl isRequired>
                        <FormLabel>Industry</FormLabel>
                        <Select variant='flushed' value={industry} onChange={(e) => setIndustry(e.target.value)} borderColor={'blackAlpha.400'}>
                            <option value='Healthcare'>Healthcare</option>
                            <option value='Financial Services'>Financial Services</option>
                            <option value='Logistics and Supply chain'>Logistics & Supply chain</option>
                            <option value='Media and Telecom'>Media & Telecom</option>
                            <option value='Other'>Other</option>
                        </Select>
                    </FormControl>
                    <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 10 }}>
                        <FormControl isInvalid={isNameError} isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input variant='flushed' value={name} onChange={(e) => setName(e.target.value)} borderColor={'blackAlpha.400'} />
                            <FormErrorMessage>Name can only contain letters followed by a space or a period</FormErrorMessage>
                        </FormControl>
                        <FormControl isRequired isInvalid={isEmailError}>
                            <FormLabel>Email</FormLabel>
                            <Input variant='flushed' value={email} onChange={(e) => setEmail(e.target.value)} borderColor={'blackAlpha.400'} />
                            <FormErrorMessage>Enter email in the correct format: xyz@abc.com</FormErrorMessage>
                        </FormControl>
                    </Stack>
                    <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 5 }}>
                        <FormControl isInvalid={isPhoneError} isRequired>
                            <FormLabel>Phone</FormLabel>
                            <Input variant='flushed' value={phone} onChange={(e) => setPhone(e.target.value)} borderColor={'blackAlpha.400'} />
                            <FormErrorMessage>Enter a valid phone number</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Date</FormLabel>
                            <DatePicker value={dateTime} onChange={(e) => setDateTime(e)} borderColor={'blackAlpha.400'} />
                        </FormControl>
                    </Stack>
                    <FormControl>
                        <FormLabel>Describe your Project</FormLabel>
                        <Input variant='flushed' value={description} onChange={(e) => setDescription(e.target.value)} borderColor={'blackAlpha.400'} />
                    </FormControl>
                    <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 10 }}>
                        <Button backgroundColor={'yellow.300'} onClick={(formSubmit)} >Send Request</Button>
                        <Checkbox onChange={() => setNda(!nda)} checked={nda}>I want to protect my data by signing an NDA</Checkbox>
                    </Stack>
                </VStack>
            </Flex>
        </>
    )
}