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
    FormErrorMessage
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
                        <VStack
                            width={"xl"}
                            backgroundColor={"gray.100"}
                            align={"start"}
                            spacing={{ base: 5, lg: 10 }}
                            p={{ base: 7, lg: 14 }}
                        >
                            <Text fontSize={{ base: "2xl", lg: "4xl" }}>
                                Lets discuss your project
                            </Text>
                            <Select
                                variant="flushed"
                                placeholder="Select your industry"
                                onChange={(e) => setIndustry(e.target.value)}
                            >
                                <option value="Healthcare">Healthcare</option>
                                <option value="Financial Services">Financial Services</option>
                                <option value={"Logistics and Supply chain"}>
                                    {"Logistics and Supply chain"}
                                </option>
                                <option value={"Media and Telecom"}>{"Media & Telecom"}</option>
                                <option value="Other">Other</option>
                            </Select>
                            <Stack
                                direction={{ base: "column", lg: "row" }}
                                spacing={{ base: 5, lg: 0 }}
                            >
                                <FormControl isInvalid={isNameError}>
                                    <Input variant='flushed' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                                    <FormErrorMessage>Name can only contain letters followed by a space or a period</FormErrorMessage>
                                </FormControl>
                                <FormControl isRequired isInvalid={isEmailError}>
                                    <Input variant='flushed' placeholder='Corporate E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <FormErrorMessage>Enter email in the correct format: xyz@abc.com</FormErrorMessage>
                                </FormControl>
                            </Stack>
                            <Stack
                                direction={{ base: "column", lg: "row" }}
                                spacing={{ base: 5, lg: 0 }}
                            >
                                <FormControl isInvalid={isPhoneError}>
                                    <Input variant='flushed' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    <FormErrorMessage>Enter a valid phone number</FormErrorMessage>
                                </FormControl>
                                <DatePicker
                                    placeholder={"Date & Time"}
                                    value={dateTime}
                                    onChange={(e) => setDateTime(e)}
                                />
                            </Stack>
                            <Input
                                variant="flushed"
                                placeholder="Describe your project"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <Checkbox onChange={() => setNda(!nda)} checked={nda}>
                                I want to protect my data by signing an NDA
                            </Checkbox>
                            <Button backgroundColor={"#D91E53"} onClick={formSubmit}>
                                Send Request
                            </Button>
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
