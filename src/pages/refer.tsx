import React, { useState } from "react";
import {
    VStack,
    Input,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Button,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Text,
    HStack,
    Skeleton,
    useToast,
} from "@chakra-ui/react";
import { CopyIcon } from '@chakra-ui/icons'

import Layout from "../components/layout";
import { Script } from "gatsby";

export default function Pricing() {
    const toast = useToast()

    const [orgName, setOrgName] = useState("")
    const [email, setEmail] = useState("")

    const [retrieveEmail, setRetrieveEmail] = useState("")

    const isEmailError = email != '' && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isRetrieveEmailError = email != '' && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(retrieveEmail);

    const [referralLinkCreated, setReferralLinkCreated] = useState("")

    const [referralLinkRetrieved, setReferralLinkRetrieved] = useState([])

    const [createButtonLoading, setCreateButtonLoading] = useState(false)

    const [retrieveButtonLoading, setRetrieveButtonLoading] = useState(false)

    const [generalErrorCreate, setGeneralErrorCreate] = useState("")
    const [generalErrorRetrieve, setGeneralErrorRetrieve] = useState("")

    const submit = () => {
        if (email != "" && !isEmailError) {
            setGeneralErrorCreate("")
            setCreateButtonLoading(true)
            let cleanedEmail = email.toLowerCase();
            cleanedEmail = cleanedEmail.trim();
            grecaptcha.ready(function () {
                grecaptcha.execute(`${process.env.GATSBY_RECAPTCHA_SITE_KEY}`, { action: 'submit' }).then(async function (token: any) {
                    try {
                        let response = await fetch(`/api/createReferrerLink`, {
                            method: 'POST',
                            mode: "cors",
                            body: JSON.stringify({ orgName, email: cleanedEmail, token })
                        })

                        let data = await response.json()

                        setReferralLinkCreated(data.referrerLink)
                        setEmail("")
                        setOrgName("")
                    } catch (e) {
                        toast({
                            title: 'Server Error.',
                            description: "There might be issue with our servers. Please try again later.",
                            status: 'error',
                            duration: 9000,
                            isClosable: true,
                        })
                    }
                });
            });
        } // TODO: Show user not to enter empty fields. Plus error handling
        else {
            setGeneralErrorCreate("Fill required fields before submission")
        }
    }

    const retrieve = () => {
        if (retrieveEmail != "" && !isRetrieveEmailError) {
            setGeneralErrorRetrieve("")
            setRetrieveButtonLoading(true)
            let cleanedEmail = retrieveEmail.toLowerCase();
            cleanedEmail = cleanedEmail.trim();
            grecaptcha.ready(function () {
                grecaptcha.execute(`${process.env.GATSBY_RECAPTCHA_SITE_KEY}`, { action: 'submit' }).then(async function (token: any) {
                    try {
                        let response = await fetch(`/api/retrieveReferrerLink`, {
                            method: 'POST',
                            mode: "cors",
                            body: JSON.stringify({ retrieveEmail: cleanedEmail, token })
                        })

                        let data = await response.json()

                        if (data.length > 0) {
                            setReferralLinkRetrieved(data)
                        } else {
                            toast({
                                title: 'Email not found.',
                                description: "There were no links associated to this email.",
                                status: 'error',
                                duration: 9000,
                                isClosable: true,
                            })
                        }
                        setRetrieveButtonLoading(false)
                        setRetrieveEmail("")
                    } catch (e) {
                        toast({
                            title: 'Server Error.',
                            description: "There might be issue with our servers. Please try again later.",
                            status: 'error',
                            duration: 9000,
                            isClosable: true,
                        })
                    }
                });
            });
        } // TODO: Show user not to enter empty fields. Plus error handling if email is not found.
        else {
            setGeneralErrorRetrieve("Fill required fields before submission")
        }
    }

    return (
        <Layout modalOpen={false}>
            <Script src="https://www.google.com/recaptcha/api.js?render=6Lfoie0lAAAAALq3cYlnw0covuSn-R572z4h03GX" />
            <Tabs size={'lg'} align={'center'} backgroundColor={"gray.100"} px={{ base: 2, md: 24, lg: 60 }} pt={{ base: 28, lg: 40 }} pb={{ base: 5, lg: 10 }}>
                <TabList pb={10}>
                    <Tab>Create</Tab>
                    <Tab>Retrieve</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        {
                            referralLinkCreated == "" ?
                                (
                                    <VStack spacing={{ base: 5, lg: 10 }} >
                                        <Skeleton isLoaded={!createButtonLoading} width={"full"}>
                                            <Text align={"start"} color={'red'} fontSize={'lg'} fontStyle={"semibold"}>{generalErrorCreate}</Text>
                                            <FormControl isRequired>
                                                <FormLabel>Organization Name</FormLabel>
                                                <Input variant='flushed' value={orgName} onChange={(e) => setOrgName(e.target.value)} borderColor={'blackAlpha.400'} />
                                                <FormErrorMessage>Name can only contain letters followed by a space or a period</FormErrorMessage>
                                            </FormControl>
                                            <FormControl isRequired isInvalid={isEmailError}>
                                                <FormLabel>Email</FormLabel>
                                                <Input variant='flushed' value={email} onChange={(e) => setEmail(e.target.value)} borderColor={'blackAlpha.400'} />
                                                <FormErrorMessage>Enter email in the correct format: xyz@abc.com</FormErrorMessage>
                                            </FormControl>
                                        </Skeleton>
                                        {
                                            createButtonLoading ?
                                                (
                                                    <Button loadingText={"Creating Link"} backgroundColor={"#D91E53"} isLoading _hover={{ background: "#ba0236" }} color={'white'} />
                                                )
                                                :
                                                (
                                                    <Button backgroundColor={"#D91E53"} _hover={{ background: "#ba0236" }} color={'white'} onClick={(submit)}>Create Referrer Link</Button>
                                                )
                                        }
                                    </VStack>
                                )
                                :
                                (
                                    <VStack>
                                        <Text>Here's your link:</Text>
                                        <HStack>
                                            <Text>{referralLinkCreated}</Text>
                                            <Button rightIcon={<CopyIcon />} onClick={() => navigator.clipboard.writeText(referralLinkCreated)} />
                                        </HStack>
                                    </VStack>
                                )
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            referralLinkRetrieved.length == 0 ?
                                (
                                    <VStack spacing={{ base: 5, lg: 10 }}>
                                        <Skeleton isLoaded={!retrieveButtonLoading} width={"full"}>
                                            <Text align={"start"} color={'red'} fontSize={'lg'} fontStyle={"semibold"}>{generalErrorRetrieve}</Text>
                                            <FormControl isRequired isInvalid={isRetrieveEmailError}>
                                                <FormLabel>Email</FormLabel>
                                                <Input variant='flushed' value={retrieveEmail} onChange={(e) => setRetrieveEmail(e.target.value)} borderColor={'blackAlpha.400'} />
                                                <FormErrorMessage>Enter email in the correct format: xyz@abc.com</FormErrorMessage>
                                            </FormControl>
                                        </Skeleton>
                                        {
                                            retrieveButtonLoading ?
                                                (
                                                    <Button isLoading loadingText={"Retriveing link"} backgroundColor={"#D91E53"} _hover={{ background: "#ba0236" }} color={'white'}></Button>
                                                )
                                                :
                                                (
                                                    <Button backgroundColor={"#D91E53"} _hover={{ background: "#ba0236" }} color={'white'} onClick={(retrieve)}>Retrieve Referer link</Button>
                                                )
                                        }
                                    </VStack>
                                )
                                :
                                (
                                    <VStack>
                                        <Text>Here are your links:</Text>
                                        {referralLinkRetrieved.map((refLink, index) => {
                                            return (
                                                <HStack>
                                                    <Text>https://strawberrylabs.net/referrerId={refLink.referrerId}</Text>
                                                    <Button rightIcon={<CopyIcon />} onClick={() => { navigator.clipboard.writeText(`https://strawberrylabs.net?referrerId=${referralLinkRetrieved[index].referrerId}`) }} />
                                                </HStack>
                                            )
                                        })}
                                    </VStack>
                                )
                        }
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Layout >
    );
}
