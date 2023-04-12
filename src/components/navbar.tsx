import React, { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Center,
    Divider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalHeader,
    ModalCloseButton,
    Accordion,
    AccordionIcon,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    VStack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { isOpen: isOpenTechStack, onOpen: onOpenTechStack, onClose: onCloseTechStack } = useDisclosure();
    const { isOpen: isOpenIndustries, onOpen: onOpenIndustries, onClose: onCloseIndustries } = useDisclosure();
    const { isOpen: isOpenServices, onOpen: onOpenServices, onClose: onCloseServices } = useDisclosure();
    const { isOpen: isOpenCompany, onOpen: onOpenCompany, onClose: onCloseCompany } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={2}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>Logo</Box>

                    <Flex alignItems={'center'} display={{ base: 'none', md: 'block' }}>
                        <HStack spacing={8} alignItems={'center'}>
                            <Menu isOpen={isOpenTechStack}>
                                <MenuButton onMouseEnter={onOpenTechStack} onMouseLeave={onCloseTechStack}>
                                    Tech Stack {isOpenTechStack ? <ChevronUpIcon /> : <ChevronDownIcon />} </MenuButton>
                                <MenuList onMouseEnter={onOpenTechStack} onMouseLeave={onCloseTechStack}>
                                    <MenuItem as='a' href='#'>Link 1</MenuItem>
                                    <MenuItem as='a' href='#'>Link 2</MenuItem>
                                </MenuList>
                            </Menu>

                            <Menu isOpen={isOpenIndustries}>
                                <MenuButton onMouseEnter={onOpenIndustries} onMouseLeave={onCloseIndustries}>Industries {isOpenIndustries ? <ChevronUpIcon /> : <ChevronDownIcon />} </MenuButton>
                                <MenuList onMouseEnter={onOpenIndustries} onMouseLeave={onCloseIndustries}>
                                    <MenuItem as='a' href='#'>Link 1</MenuItem>
                                    <MenuItem as='a' href='#'>Link 2</MenuItem>
                                </MenuList>
                            </Menu>

                            <Menu isOpen={isOpenServices}>
                                <MenuButton onMouseEnter={onOpenServices} onMouseLeave={onCloseServices}>Services {isOpenServices ? <ChevronUpIcon /> : <ChevronDownIcon />} </MenuButton>
                                <MenuList onMouseEnter={onOpenServices} onMouseLeave={onCloseServices}>
                                    <MenuItem as='a' href='#'>Link 1</MenuItem>
                                    <MenuItem as='a' href='#'>Link 2</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu isOpen={isOpenCompany}>
                                <MenuButton onMouseEnter={onOpenCompany} onMouseLeave={onCloseCompany}>Company {isOpenCompany ? <ChevronUpIcon /> : <ChevronDownIcon />} </MenuButton>
                                <MenuList onMouseEnter={onOpenCompany} onMouseLeave={onCloseCompany}>
                                    <MenuItem as='a' href='#'>Link 1</MenuItem>
                                    <MenuItem as='a' href='#'>Link 2</MenuItem>
                                </MenuList>
                            </Menu>
                            <Link mr={8}>Projects</Link>
                            <Box height='25px' mr={8}>
                                <Divider orientation='vertical' />
                            </Box>
                            <Link mr={8}>Arabic</Link>

                        </HStack>
                    </Flex>
                    <Box>
                        <Link
                            backgroundColor={'yellow.400'}
                            size={'sm'}
                            mr={4}
                            p={4}
                            href={'pricing'}>
                            Pricing.
                        </Link>
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <Modal onClose={onClose} size={'full'} isOpen={isOpen} motionPreset="none">
                            <ModalOverlay />
                            <ModalContent>
                                <ModalCloseButton size={'lg'} />
                                <ModalBody>
                                    <Link mr={8}>Arabic</Link>
                                    <Accordion allowMultiple>
                                        <AccordionItem>

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

                                        <AccordionItem>
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

                                        <AccordionItem>
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

                                        <AccordionItem>
                                            <Link>Projects</Link>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <Link>Get pricing</Link>
                                        </AccordionItem>

                                        <AccordionItem>
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
                                </ModalBody>
                                <ModalFooter>

                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>
                </Flex>
            </Box>
        </>
    );
}
