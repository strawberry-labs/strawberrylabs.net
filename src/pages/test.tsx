import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SimpleSlider from "../components/slider";
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Box,
    Heading,
    Container,
    Icon,
    useColorModeValue,
    SimpleGrid,
    Link,
    Tag,
    CardBody,
    Image,
    HStack,
    Select,
    Input,
    Checkbox,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Fade,
    Slide,
    Divider,
    Card,
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowRightIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";


export default function Test() {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };

    return (
        <Box>
            <SimpleSlider slidesToShow={4}>
                <VStack shadow={"base"} w={'64'} align={'start'} p={6} _hover={{ shadow: "2xl" }}>
                    <Image src="/tinyLogo.svg" />
                    <Text fontSize={'2xl'}>Financial Services</Text>
                    <Text>Strawberry Labs will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more.</Text>
                    <Button rightIcon={<ArrowForwardIcon />} variant={'Link'} _hover={{ textColor: "yellow.300" }}>See more</Button>
                </VStack>
                <VStack shadow={"base"} w={'64'} align={'start'} p={6} _hover={{ shadow: "2xl" }}>
                    <Image src="/tinyLogo.svg" />
                    <Text fontSize={'2xl'}>Financial Services 2</Text>
                    <Text>Strawberry Labs will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more.</Text>
                    <Button rightIcon={<ArrowForwardIcon />} variant={'Link'} _hover={{ textColor: "yellow.300" }}>See more</Button>
                </VStack>
                <VStack shadow={"base"} w={'64'} align={'start'} p={6} _hover={{ shadow: "2xl" }}>
                    <Image src="/tinyLogo.svg" />
                    <Text fontSize={'2xl'}>Financial Services 3</Text>
                    <Text>Strawberry Labs will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more.</Text>
                    <Button rightIcon={<ArrowForwardIcon />} variant={'Link'} _hover={{ textColor: "yellow.300" }}>See more</Button>
                </VStack>
                <VStack shadow={"base"} w={'64'} align={'start'} p={6} _hover={{ shadow: "2xl" }}>
                    <Image src="/tinyLogo.svg" />
                    <Text fontSize={'2xl'}>Financial Services 3</Text>
                    <Text>Strawberry Labs will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more.</Text>
                    <Button rightIcon={<ArrowForwardIcon />} variant={'Link'} _hover={{ textColor: "yellow.300" }}>See more</Button>
                </VStack>
                <VStack shadow={"base"} w={'64'} align={'start'} p={6} _hover={{ shadow: "2xl" }}>
                    <Image src="/tinyLogo.svg" />
                    <Text fontSize={'2xl'}>Financial Services 3</Text>
                    <Text>Strawberry Labs will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more.</Text>
                    <Button rightIcon={<ArrowForwardIcon />} variant={'Link'} _hover={{ textColor: "yellow.300" }}>See more</Button>
                </VStack>
                <VStack shadow={"base"} w={'64'} align={'start'} p={6} _hover={{ shadow: "2xl" }}>
                    <Image src="/tinyLogo.svg" />
                    <Text fontSize={'2xl'}>Financial Services 3</Text>
                    <Text>Strawberry Labs will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more.</Text>
                    <Button rightIcon={<ArrowForwardIcon />} variant={'Link'} _hover={{ textColor: "yellow.300" }}>See more</Button>
                </VStack>
            </SimpleSlider>
        </Box>
    )
}
