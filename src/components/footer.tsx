import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Divider,
    VStack,
    Accordion,
    AccordionIcon,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Vstack,
    Image
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import WebsiteLogo from "../images/website-logo.png";

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10} display={{ base: 'none', md: 'block' }}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <ListHeader>Tech Stack</ListHeader>
                        <Link href={'#'}>Overview</Link>
                        <Stack direction={'row'} align={'center'} spacing={2}>
                            <Link href={'#'}>Features</Link>
                            <Tag
                                size={'sm'}
                                bg={useColorModeValue('green.300', 'green.800')}
                                ml={2}
                                color={'white'}>
                                New
                            </Tag>
                        </Stack>
                        <Link href={'#'}>Tutorials</Link>
                        <Link href={'#'}>Pricing</Link>
                        <Link href={'#'}>Releases</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Industries</ListHeader>
                        <Link href={'#'}>About Us</Link>
                        <Link href={'#'}>Press</Link>
                        <Link href={'#'}>Careers</Link>
                        <Link href={'#'}>Contact Us</Link>
                        <Link href={'#'}>Partners</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Services</ListHeader>
                        <Link href={'#'}>Cookies Policy</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Terms of Service</Link>
                        <Link href={'#'}>Law Enforcement</Link>
                        <Link href={'#'}>Status</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Projects</ListHeader>
                        <Link href={'#'}>Cookies Policy</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Terms of Service</Link>
                        <Link href={'#'}>Law Enforcement</Link>
                        <Link href={'#'}>Status</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link href={'#'}>Facebook</Link>
                        <Link href={'#'}>Twitter</Link>
                        <Link href={'#'}>Dribbble</Link>
                        <Link href={'#'}>Instagram</Link>
                        <Link href={'#'}>LinkedIn</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
            <VStack display={{ base: 'block', md: 'none' }} mx={4} pt={4}>
                <Accordion allowMultiple>
                    <AccordionItem my={2}>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Tech Stack
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                            <VStack align={'start'}>
                                <Link>Front-End</Link>
                                <Link>React</Link>
                                <Divider />
                                <Link>Back-End</Link>
                                <Link>Express</Link>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem my={2}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Industries
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <VStack align={'start'}>
                                <Link>Financial Services</Link>
                                <Link>Entertainment</Link>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem my={2}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Services
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <VStack align={'start'}>
                                <Link>Mobile Development</Link>
                                <Link>Web Development</Link>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem my={2}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Projects
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <VStack align={'start'}>
                                <Link>A</Link>
                                <Link>B</Link>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem my={2}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Company
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <VStack align={'start'}>
                                <Link>About Us</Link>
                                <Link>Corporate life</Link>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </VStack>
            <Divider />
            <VStack py={10} align={"center"}>
                <Image src={WebsiteLogo} w={'xs'} />
            </VStack>
        </Box>
    )
}