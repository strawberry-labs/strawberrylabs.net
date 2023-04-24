import React, { useState } from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Flex,
    VStack,
    Text,
    Select,
    HStack,
    Input,
    Checkbox,
    Button,
    Divider,
    Image,
    Stack
} from '@chakra-ui/react';

import Samsung from '../../images/samsung-color.svg'

import { ArrowForwardIcon, ArrowRightIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";

import { DatePicker } from "chakra-ui-date-input";

export default function DiscussModalForm({ isOpen, onClose }: { isOpen: any, onClose: any }) {
    const [industry, setIndustry] = useState('Healthcare')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dateTime, setDateTime] = useState('')
    const [description, setDescription] = useState('')
    const [nda, setNda] = useState(false)

    const formSubmit = () => {
        fetch(`/api/saveData`, {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify({ industry, name, email, phone, dateTime, description, nda })
        })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size='6xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Flex py={4}>
                        <VStack width={'xl'} backgroundColor={"gray.100"} align={'start'} spacing={{ base: 5, lg: 10 }} p={{ base: 7, lg: 14 }}>
                            <Text fontSize={{ base: '2xl', lg: '4xl' }}>Lets discuss your project</Text>
                            <Select variant='flushed' placeholder='Select your industry' onChange={(e) => setIndustry(e.target.value)}>
                                <option value='Healthcare'>Healthcare</option>
                                <option value='Financial Services'>Financial Services</option>
                                <option value='Logistics & Supply chain'>Logistics & Supply chain</option>
                                <option value='Media & Telecom'>Media & Telecom</option>
                                <option value='Other'>Other</option>
                            </Select>
                            <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 5, lg: 0 }}>
                                <Input variant='flushed' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                                <Input variant='flushed' placeholder='Corporate E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Stack>
                            <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 5, lg: 0 }}>
                                <Input variant='flushed' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <DatePicker placeholder="Date & Time" value={dateTime} onChange={(e) => setDateTime(Date(e))} />
                            </Stack>
                            <Input variant='flushed' placeholder='Describe your project' value={description} onChange={(e) => setDescription(e.target.value)} />
                            <Checkbox onClick={() => setNda(!nda)}>I want to protect my data by signing an NDA</Checkbox>
                            <Button backgroundColor={'yellow.300'} onClick={(formSubmit)}>Send Request</Button>
                        </VStack>
                        <VStack width={'xl'} backgroundColor={'gray.700'} align={'start'} spacing={10} p={14} display={{ base: 'none', lg: 'block' }}>
                            <Text fontSize={'2xl'} textColor={'whiteAlpha.900'}>Reach out to Andersen to receive a free consultation and entrust your IT initiative to a company of software experts</Text>
                            <Divider />
                            <Text textColor={'whiteAlpha.900'}> Contact us</Text>
                            <Button leftIcon={<PhoneIcon />} variant='Link' textColor={"whiteAlpha.900"} _hover={{ 'textColor': 'yellow.400' }}>123456789</Button>
                            <Button leftIcon={<EmailIcon />} variant='Link' textColor={"whiteAlpha.900"} _hover={{ 'textColor': 'yellow.400' }}>abcd@eghgs.com</Button>
                            <Divider />
                            <Text textColor={'whiteAlpha.900'}> Customers who trust us </Text>
                            <HStack>
                                <Image src={Samsung} />
                                <Image src={Samsung} />
                                <Image src={Samsung} />
                            </HStack>
                        </VStack>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}