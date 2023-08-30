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
    FormLabel,
    useToast
} from '@chakra-ui/react';

import { Script } from 'gatsby';

import { DatePicker } from "chakra-ui-date-input";

import Samsung from '../../images/samsung-color.svg'
import b2connect from '../../images/b2connect.png'
import ecoventure2 from '../../images/ecoventure2.png'
import takaful from '../../images/Takaful-Emarat-logo.png'

export default function Section9({ formSubmitted, setFormSubmitted }: { formSubmitted: Boolean; setFormSubmitted: Function }) {
    const toast = useToast();

    const [industry, setIndustry] = useState('Healthcare')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [description, setDescription] = useState('')
    const [nda, setNda] = useState(false)

    const [submitButtonLoading, setSubmitButtonLoading] = useState(false)

    const isEmailError = email != '' && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPhoneError = phone != '' && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/.test(phone);

    const formSubmit = () => {
        grecaptcha.ready(function () {
            grecaptcha.execute(`${process.env.GATSBY_RECAPTCHA_SITE_KEY}`, { action: 'submit' }).then(async function (token: any) {
                if (!isEmailError && !isPhoneError && name != '' && email != '' && phone != '') {
                    setSubmitButtonLoading(true)
                    let response = await fetch(`/api/saveData`, {
                        method: 'POST',
                        mode: "cors",
                        body: JSON.stringify({ industry, name, email, phone, description, nda, token })
                    })
                    setSubmitButtonLoading(false)

                    if (response.status == 200) {
                        //reset form
                        setName('')
                        setEmail('')
                        setPhone('')
                        setDescription('')
                        setNda(false)
                        setFormSubmitted(true)

                        toast({
                            title: 'Form Submitted Successfully!.',
                            description: "We'll get back to you ASAP. Thank you!",
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                        })
                    } else {
                        toast({
                            title: 'Server Error.',
                            description: "There might be issue with our servers. Please try again later.",
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        })
                    }

                } else {
                    toast({
                        title: 'Required Fields not Filled.',
                        description: "Please fill all the required (starred) fields before submission",
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    })
                }
            });
        });
    }

    return (
        <VStack my={10}>
            <Box mx={{ base: '5', lg: 10 }} mb={{ base: 5, lg: 10 }} display={{ base: 'block', lg: 'none' }} textAlign={'center'}>
                <Text fontSize={{ base: '3xl', lg: '5xl' }} >Request a free IT consultation</Text>
                <Text fontSize={{ base: 'md', lg: 'xl' }} mx={{ md: 20 }}>Fill out the form below to receive a free consultation and find out how Strawberry Labs can help your business grow.</Text>
            </Box>
            <HStack my={{ base: '7', lg: '14' }}>
                <Script src="https://www.google.com/recaptcha/api.js?render=6Lfoie0lAAAAALq3cYlnw0covuSn-R572z4h03GX" />

                <Flex mx={{ base: 0, lg: '20' }}>
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
                                <Text>If required, we sign an NDA to ensure the highest privacy level;</Text>
                            </HStack>
                            <HStack>
                                <Text rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4} mr={6}>3</Text>
                                <Text>A Pre-Sales Manager submits a comprehensive project proposal. It may include estimates, timelines, lists of CVs, etc., for a particular situation.</Text>
                            </HStack>
                        </VStack>
                        <Text>Customers who trust us</Text>
                        <HStack justify={'space-around'}>
                            <Image src={b2connect} boxSize={20} />
                            <Image src={takaful} boxSize={20} />
                            <Image src={ecoventure2} boxSize={20} />
                        </HStack>
                    </VStack>
                    <VStack backgroundColor={"gray.100"} align={'start'} spacing={{ base: 5, lg: 10 }} p={{ base: 7, lg: 14 }}>
                        {
                            formSubmitted ?
                                <VStack justify={'center'} textAlign={'center'} height={'full'} px={{ base: 2, lg: 28 }}>
                                    <Text>Form Submitted Successfully!</Text>
                                    <Text>We'll get back to you ASAP. Thank you!</Text>
                                </VStack>
                                :
                                <>
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
                                    <Stack direction={'row'} spacing={{ base: 5, lg: 10 }}>
                                        <FormControl isRequired>
                                            <FormLabel>Name</FormLabel>
                                            <Input variant='flushed' value={name} onChange={(e) => setName(e.target.value)} borderColor={'blackAlpha.400'} />
                                        </FormControl>
                                        <FormControl isRequired isInvalid={isEmailError}>
                                            <FormLabel>Email</FormLabel>
                                            <Input variant='flushed' value={email} onChange={(e) => setEmail(e.target.value)} borderColor={'blackAlpha.400'} />
                                            <FormErrorMessage>Enter email in the correct format: xyz@abc.com</FormErrorMessage>
                                        </FormControl>
                                    </Stack>
                                    <Stack direction={{ base: 'column', lg: 'row' }}>
                                        <FormControl isInvalid={isPhoneError} isRequired>
                                            <FormLabel>Phone</FormLabel>
                                            <Input variant='flushed' value={phone} onChange={(e) => setPhone(e.target.value)} borderColor={'blackAlpha.400'} />
                                            <FormErrorMessage>Enter a valid phone number</FormErrorMessage>
                                        </FormControl>
                                    </Stack>
                                    <FormControl>
                                        <FormLabel>Describe your Project</FormLabel>
                                        <Input variant='flushed' value={description} onChange={(e) => setDescription(e.target.value)} borderColor={'blackAlpha.400'} />
                                    </FormControl>
                                    <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 5, lg: 10 }}>
                                        {
                                            submitButtonLoading ?
                                                (
                                                    <Button isLoading loadingText="Sending" backgroundColor={"#D91E53"} _hover={{ background: "#ba0236" }} color={'white'}></Button>
                                                ) :
                                                (
                                                    <Button backgroundColor={"#D91E53"} _hover={{ background: "#ba0236" }} color={'white'} onClick={(formSubmit)} >Send Request</Button>
                                                )
                                        }
                                        <Checkbox onChange={() => setNda(!nda)} checked={nda}>I want to protect my data by signing an NDA</Checkbox>
                                    </Stack>
                                </>
                        }

                    </VStack>
                </Flex>
            </HStack>
        </VStack>

    )
}