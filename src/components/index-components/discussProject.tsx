import React, { useState } from "react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
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
    Stack,
    FormControl,
    FormErrorMessage,
    FormLabel,
    useToast
} from "@chakra-ui/react";

import b2connect from '../../images/b2connect.png'
import ecoventure2 from '../../images/ecoventure2.png'
import takaful from '../../images/Takaful-Emarat-logo.png'

import {
    ArrowForwardIcon,
    ArrowRightIcon,
    EmailIcon,
    PhoneIcon,
} from "@chakra-ui/icons";

import { DatePicker } from "chakra-ui-date-input";

export default function DiscussModalForm({
    isOpen,
    onClose,
}: {
    isOpen: any;
    onClose: any;
}) {

    const toast = useToast();

    const [formSubmitted, setFormSubmitted] = useState(false)

    const [industry, setIndustry] = useState("Healthcare");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const [nda, setNda] = useState(false);

    const [submitButtonLoading, setSubmitButtonLoading] = useState(false)

    const isEmailError = email != '' && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPhoneError = phone != '' && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/.test(phone);

    const resetOnClose = () => {
        setName('')
        setEmail('')
        setPhone('')
        setDescription('')
        setNda(false)
        setFormSubmitted(false)
        onClose()
    }

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

                        setTimeout(() => { resetOnClose() }, 5000);
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
        <Modal isOpen={isOpen} onClose={resetOnClose} size="6xl">
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton size={'lg'} color={{ lg: 'white' }} mt={5} mr={5} />
                <ModalBody>
                    <Flex py={4}>
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
                        <VStack
                            width={"xl"}
                            backgroundColor={"gray.700"}
                            align={"start"}
                            spacing={10}
                            p={14}
                            display={{ base: "none", lg: "block" }}
                        >
                            <Text fontSize={"2xl"} textColor={"whiteAlpha.900"}>
                                Reach out to Strawberry Labs to receive a free consultation and
                                entrust your IT initiative to a company of software experts
                            </Text>
                            <Divider />
                            <Text textColor={"whiteAlpha.900"}> Contact us</Text>
                            <Button
                                leftIcon={<PhoneIcon />}
                                variant="Link"
                                textColor={"whiteAlpha.900"}
                                _hover={{ textColor: "#D91E53" }}
                            >
                                +971585249920
                            </Button>
                            <Button
                                leftIcon={<EmailIcon />}
                                variant="Link"
                                textColor={"whiteAlpha.900"}
                                _hover={{ textColor: "#D91E53" }}
                            >
                                admin@strawberrylabs.net
                            </Button>
                            <Divider />
                            <Text textColor={"whiteAlpha.900"}> Customers who trust us </Text>
                            <HStack justify={'space-around'}>
                                <Image src={b2connect} boxSize={20} />
                                <Image src={ecoventure2} boxSize={20} />
                                <Image src={takaful} boxSize={20} />
                            </HStack>
                        </VStack>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
