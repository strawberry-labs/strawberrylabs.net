import React, { useState } from "react";

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
    Stack,
    FormControl,
    FormErrorMessage,
    FormLabel
} from "@chakra-ui/react";

import Samsung from "../../images/samsung-color.svg";

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
    const [industry, setIndustry] = useState("Healthcare");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [description, setDescription] = useState("");
    const [nda, setNda] = useState(false);

    const isNameError = name != '' && !/^([a-zA-Z]+(\.|\s)*)$/.test(name);
    const isEmailError = email != '' && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPhoneError = phone != '' && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/.test(phone);

    const formSubmit = () => {
        fetch(`/api/saveData`, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
                industry,
                name,
                email,
                phone,
                dateTime,
                description,
                nda,
            }),
        });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="6xl">
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Flex py={4}>
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
                                enquiries@strawberrylabs.net
                            </Button>
                            <Divider />
                            <Text textColor={"whiteAlpha.900"}> Customers who trust us </Text>
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
    );
}
