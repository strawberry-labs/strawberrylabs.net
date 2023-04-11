import Navbar from "../components/navbar";
import React, { ReactElement, ReactNode, useState } from "react";
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

import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc';

import Slider from "react-slick";

import Layout from "../components/layout";
import HoverBox from "../components/hoverBox";
import { DatePicker } from "chakra-ui-date-input";
import { ArrowForwardIcon, ArrowRightIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import Testimonial from "../components/testimonial";
import SimpleSlider from "../components/slider";

import Android from '../images/Android.svg'
import WorldMap from '../images/World_map_with_points.svg'
import Samsung from '../images/samsung-color.svg'

const techData = [
  { name: "Android", image: "/Android.svg", type: ["popular", "mobile"] },
  { name: "Express", image: "/Android.svg", type: ["popular", "backend"] },
  { name: "React", image: "/Android.svg", type: ["frontend"] },
]


export default function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure() // For modal

  const [techFilter, setTechFilter] = useState("popular")

  return (
    <Layout>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '5xl', md: '6xl' })}>
              Software Development Company
            </Text>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}>
              Take the software path to your digital future
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}
                onClick={onOpen}>
                Lets discuss your project
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>

      <Box p={10}>
        <Stack spacing={4} as={Container} maxW={'6xl'} textAlign={'start'}>
          <Heading fontSize={{ base: '3xl', sm: '5xl' }} mt={10}>
            Fuel your project with an expert team of industry-focused engineers
          </Heading>
        </Stack>

        <Container maxW={'6xl'} mt={14}>
          <Flex flexWrap="wrap" gridGap={6} justify="space-around">

            <HoverBox text1="1000+" text2="years in business" text3="For over a decade, we have developed thousands of outstanding projects that have helped our customers accomplish their business goals" />

            <HoverBox text1="16" text2="years in business" text3="For years, we’ve been providing high-quality IT services for customers from the most dynamic sectors, focusing on the best practices and greatest results" />

            <HoverBox text1="3500+" text2="qualified specialists" text3="Andersen employs thousands of IT experts in numerous technical and business industries to fulfill our customers' software initiatives" />
          </Flex>
        </Container>
      </Box>

      <Flex justify={'space-around'} backgroundColor='gray.200' px='12'>
        <Link href="https://google.com"><Image src={Samsung} boxSize={'36'} /></Link>
        <Link href="https://google.com"><Image src={Samsung} boxSize={'36'} /></Link>
        <Link href="https://google.com"><Image src={Samsung} boxSize={'36'} /></Link>
        <Link href="https://google.com"><Image src={Samsung} boxSize={'36'} /></Link>
        <Link href="https://google.com"><Image src={Samsung} boxSize={'36'} /></Link>
        <Link href="https://google.com"><Image src={Samsung} boxSize={'36'} /></Link>
      </Flex >

      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={WorldMap}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        backgroundColor="gray.900">
        <HStack
          w={'full'}
          justify={'start'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={10} ml={'14'}>
            <Text
              color={'white'}
              fontWeight={200}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}>
              Andersen in Europe
            </Text>
            <Text
              color={'white'}
              fontWeight={400}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}>
              As a well-established European company, Andersen has won the trust of multiple customers working all over the EU with our high-caliber tech support services. We can thoroughly analyze and fully understand your needs to start delivering the best possible outcomes. Our history, customer referrals, and experienced employees are our guarantee of success!
            </Text>
            <HStack>
              <HStack>
                <Text
                  color={'white'}
                  fontWeight={200}
                  lineHeight={1.2}
                  fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}>100%</Text>
                <Text
                  color={'white'}
                  fontWeight={200}
                  lineHeight={1.2}
                  fontSize={useBreakpointValue({ base: '1xl', md: '1xl' })}
                  width="20">GDPR compliant</Text>
              </HStack>
              <HStack>
                <Text
                  color={'white'}
                  fontWeight={200}
                  lineHeight={1.2}
                  fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}>4.9</Text>
                <Text
                  color={'white'}
                  fontWeight={200}
                  lineHeight={1.2}
                  fontSize={useBreakpointValue({ base: '1xl', md: '1xl' })}
                  width="40">Clutch-rated software company</Text>
              </HStack>
              <HStack>
                <Text
                  color={'white'}
                  fontWeight={200}
                  lineHeight={1.2}
                  fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}>80%</Text>
                <Text
                  color={'white'}
                  fontWeight={200}
                  lineHeight={1.2}
                  fontSize={useBreakpointValue({ base: '1xl', md: '1xl' })}
                  width="40">of clients return for their next projects</Text>
              </HStack>
            </HStack>
          </Stack>
        </HStack>
      </Flex >

      <VStack p={24} backgroundColor='gray.100' spacing={8}>
        <Text fontSize={'4xl'} mb="10">Collaboration models with our custom software development company</Text>
        <HStack spacing={28}>
          <HStack background={'white'} shadow="lg" p={8} >
            <VStack align={'start'} w={'60'} spacing={5}>
              <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>Staff augmentation</Text>
              <Text fontSize={'2xl'}>Hire top notch experts</Text>
              <Text> - Specialists with tailored-fit skills who meet all your needs;</Text>
              <Text> - An extensive talent pool of IT specialists at your disposal in no time.</Text>
              <Button rightIcon={<ArrowForwardIcon />} variant={'Link'}>Learn more</Button>
            </VStack>
            <Image src="/icon.png" boxSize={'36'} />
          </HStack>
          <HStack background={'white'} shadow="lg" p={8} >
            <VStack align={'start'} w={'60'} spacing={5}>
              <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>Dedicated Team</Text>
              <Text fontSize={'2xl'}>Get a dedicated Agile team</Text>
              <Text> - A fully-staffed IT team assembled for your unique needs;</Text>
              <Text> - You retain strategic control over the development process.</Text>
              <Button rightIcon={<ArrowForwardIcon />} variant={'Link'}>Learn more</Button>
            </VStack>
            <Image src="/icon.png" boxSize={'36'} />
          </HStack>
        </HStack>
        <HStack background={'white'} shadow="lg" p={8} w="5xl">
          <VStack align={'start'} spacing={5} w="sm">
            <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>Managed Delivery</Text>
            <Text fontSize={'2xl'}>Develop a robust software solution</Text>
            <Text> - Your IT project delegated to a trusted vendor;</Text>
            <Text> - Andersen shares responsibility for turning your vision into reality.</Text>
            <Button rightIcon={<ArrowForwardIcon />} variant={'Link'}>Learn more</Button>
          </VStack>
          <Image src="/icon.png" boxSize={'36'} />
        </HStack>
      </VStack>

      <VStack backgroundColor='gray.800' align={'start'} p={20} spacing={8}>
        <Text textColor={"whiteAlpha.900"} fontSize="4xl" >Top Companies rely on Andersen</Text>
        <Text textColor={"whiteAlpha.900"}>Latest Projects</Text>
        <Card maxW='6xl' maxH={'3xl'}>
          <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            maxH={'xs'}
            minW={'6xl'}
          />
          <CardBody>
            <Stack spacing={4} align="start" m="4">
              <Text>
                Tool for effective diagnoses of skin conditions and related diseases with a further treatment routine.
              </Text>
              <Button rightIcon={<ArrowForwardIcon />} variant={'Link'}>Read reference</Button>
              <HStack>
                <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>10 specialists</Text>
                <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>24 months</Text>
              </HStack>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
        <HStack spacing={8}>
          <Card maxW='sm'>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <CardBody>
              <Stack spacing={4} align="start" m="4">
                <Text>
                  Tool for effective diagnoses of skin conditions and related diseases with a further treatment routine.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} variant={'Link'}>Read reference</Button>
                <HStack>
                  <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>10 specialists</Text>
                  <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>24 months</Text>
                </HStack>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW='sm'>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <CardBody>
              <Stack spacing={4} align="start" m="4">
                <Text>
                  Tool for effective diagnoses of skin conditions and related diseases with a further treatment routine.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} variant={'Link'}>Read reference</Button>
                <HStack>
                  <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>10 specialists</Text>
                  <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>24 months</Text>
                </HStack>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
          <Card maxW='sm'>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <CardBody>
              <Stack spacing={4} align="start" m="4">
                <Text>
                  Tool for effective diagnoses of skin conditions and related diseases with a further treatment routine.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} variant={'Link'}>Read reference</Button>
                <HStack>
                  <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>10 specialists</Text>
                  <Text fontSize={'sm'} rounded={'3xl'} backgroundColor={"gray.200"} p={2} px={4}>24 months</Text>
                </HStack>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </HStack>
        <HStack backgroundColor={'gray.700'} p={4} px={8} spacing={16}>
          <Text textColor={"whiteAlpha.900"} fontSize="xl">With numerous IT projects delivered, our custom software development company provides a detailed estimate for your IT initiative.</Text>
          <Link
            backgroundColor={'yellow.400'}
            size={'sm'}
            mr={4}
            p={4}
            href={'pricing'}
            w={"xs"}
            textAlign={'center'}>
            Calculate your project
          </Link>
        </HStack>
      </VStack>

      <Box>
        <Text fontSize={'5xl'} mt={16} mx={20}>Testimonials</Text>
        <Text fontSize={'xl'} mx={20}>SMB, enterprise, and startup customers return to our custom software company because they’re happy with our work. Here is what they say about Andersen.</Text>
        <SimpleSlider slidesToShow={1} horizontalMargin={4}>
          <Testimonial
            text1="Andersen's team established a streamlined ticketing process for timely delivery"
            text2="The app has earned a positive response so far, securing large orders from end clients. Moreover, Andersen’s team has established a streamlined ticketing process to ensure timely delivery. They’re communicative, deliver high-quality work, and even recommend alternative solutions to improve the app."
            person="Senior Software Engineer Greenwald Industries"
            country="USA"
            summary="Mobile app for laundry hardware payment company"
            industry="Financial Services"
            teamSize="12 specialists"
            duration="6 months"
            budget="over 200k USD"
            technologies={["PHP Symphony", "Angular"]}
          />
          <Testimonial
            text1="Andersen's team established a streamlined ticketing process for timely delivery 2"
            text2="The app has earned a positive response so far, securing large orders from end clients. Moreover, Andersen’s team has established a streamlined ticketing process to ensure timely delivery. They’re communicative, deliver high-quality work, and even recommend alternative solutions to improve the app."
            person="Senior Software Engineer Greenwald Industries"
            country="USA"
            summary="Mobile app for laundry hardware payment company"
            industry="Financial Services"
            teamSize="12 specialists"
            duration="6 months"
            budget="over 200k USD"
            technologies={["PHP Symphony", "Angular"]}
          />
        </SimpleSlider>
      </Box>

      <Box>
        <Text fontSize={'5xl'} mt={16} mx={20}>Andersen's set of technologies for software development</Text>
        <Text fontSize={'xl'} mx={20} mt={8}>Cooperate with competent and knowledgeable IT experts in desktop, web, and mobile software engineering. As a trusted tech and business partner, we apply the most advanced technologies, frameworks, and components to build software notable for both its solid and effective back-end with intuitive UI/UX.</Text>
        <HStack spacing={5} mx={20} mt={12}>
          <Button onClick={() => setTechFilter('popular')} isActive={techFilter === "popular" ? true : false}>Popular</Button>
          <Button onClick={() => setTechFilter('mobile')} isActive={techFilter === "mobile" ? true : false}>Android</Button>
          <Button onClick={() => setTechFilter('frontend')} isActive={techFilter === "frontend" ? true : false}>Frontend</Button>
        </HStack>
        <SimpleSlider slidesToShow={4} variableWidth={true} horizontalMargin={14}>
          {techData.filter((item) => item.type.includes(techFilter)).map((item) => (
            <Box mx={5} my={1}>
              <VStack shadow={'base'} p={14} w={52}>
                <Image mb={6} src={Android} />
                <Link>{item.name}</Link>
              </VStack>
            </Box>
          ))}
        </SimpleSlider>
      </Box>

      <Box>
        <Text fontSize={'5xl'} mt={16} mx={20}>A software company with over 1,000 implemented initiatives</Text>
        <Text fontSize={'xl'} mx={20} mt={8}>As a top-ranked and trusted software development company, we run a pool of proficient IT experts and use the best available tools and techniques to engineer advanced software for our customers.</Text>
      </Box>
      <Box>
        <SimpleSlider slidesToShow={4} horizontalMargin={12}>
          <Box px={4} my={1}>
            <VStack shadow={"base"} align={'start'} p={6} _hover={{ shadow: "2xl" }}>
              <Image src="/tinyLogo.svg" />
              <Text fontSize={'2xl'}>Financial Services</Text>
              <Text>Andersen will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more.</Text>
              <Button rightIcon={<ArrowForwardIcon />} variant={'Link'} _hover={{ textColor: "yellow.300" }}>See more</Button>
            </VStack>
          </Box>
          <Box px={4}>
            <VStack shadow={"base"} align={'start'} p={6} _hover={{ shadow: "2xl" }}>
              <Image src="/tinyLogo.svg" />
              <Text fontSize={'2xl'}>Financial Serv 2</Text>
              <Text>Andersen will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more.</Text>
              <Button rightIcon={<ArrowForwardIcon />} variant={'Link'} _hover={{ textColor: "yellow.300" }}>See more</Button>
            </VStack>
          </Box>
          <Box px={4}>
            <VStack shadow={"base"} align={'start'} p={6} _hover={{ shadow: "2xl" }}>
              <Image src="/tinyLogo.svg" />
              <Text fontSize={'2xl'}>Financial Serv 3</Text>
              <Text>Andersen will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more.</Text>
              <Button rightIcon={<ArrowForwardIcon />} variant={'Link'} _hover={{ textColor: "yellow.300" }}>See more</Button>
            </VStack>
          </Box>
          <Box px={4}>
            <VStack shadow={"base"} align={'start'} p={6} _hover={{ shadow: "2xl" }}>
              <Image src="/tinyLogo.svg" />
              <Text fontSize={'2xl'}>Financial Serv 4</Text>
              <Text>Andersen will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more.</Text>
              <Button rightIcon={<ArrowForwardIcon />} variant={'Link'} _hover={{ textColor: "yellow.300" }}>See more</Button>
            </VStack>
          </Box>
          <Box px={4}>
            <VStack shadow={"base"} align={'start'} p={6} _hover={{ shadow: "2xl" }}>
              <Image src="/tinyLogo.svg" />
              <Text fontSize={'2xl'}>Financial Serv 5</Text>
              <Text>Andersen will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more.</Text>
              <Button rightIcon={<ArrowForwardIcon />} variant={'Link'} _hover={{ textColor: "yellow.300" }}>See more</Button>
            </VStack>
          </Box>
          <Box px={4}>
            <VStack shadow={"base"} align={'start'} p={6} _hover={{ shadow: "2xl" }}>
              <Image src="/tinyLogo.svg" />
              <Text fontSize={'2xl'}>Financial Serv 6</Text>
              <Text>Andersen will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more.</Text>
              <Button rightIcon={<ArrowForwardIcon />} variant={'Link'} _hover={{ textColor: "yellow.300" }}>See more</Button>
            </VStack>
          </Box>
          <Box px={4}>
            <VStack shadow={"base"} align={'start'} p={6} _hover={{ shadow: "2xl" }}>
              <Image src="/tinyLogo.svg" />
              <Text fontSize={'2xl'}>Financial Serv 7</Text>
              <Text>Andersen will support your IT projects across such areas as personalized finance assistants, digital wallets, FinTech tools, lending software, and more.</Text>
              <Button rightIcon={<ArrowForwardIcon />} variant={'Link'} _hover={{ textColor: "yellow.300" }}>See more</Button>
            </VStack>
          </Box>
        </SimpleSlider>
      </Box>

      <Flex mx={'20'} my={'14'}>
        <VStack width={'lg'} align={'start'} spacing={6} pr={20}>
          <Text fontSize={'5xl'}>Request a free IT consultation</Text>
          <Text fontSize={'xl'}>Fill out the form below to receive a free consultation and find out how Andersen can help your business grow.</Text>
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
          <Select variant='flushed' placeholder='Select your industry'>
            <option value='Healthcare'>Healthcare</option>
            <option value='Financial Services'>Financial Services</option>
            <option value='Logistics & Supply chain'>Logistics & Supply chain</option>
            <option value='Media & Telecom'>Media & Telecom</option>
            <option value='Other'>Other</option>
          </Select>
          <HStack>
            <Input variant='flushed' placeholder='Name' />
            <Input variant='flushed' placeholder='Corporate E-mail' />
          </HStack>
          <Input variant='flushed' placeholder='Phone' />
          <Text>We will call you ASAP or you can schedule a call</Text>
          <Input variant='flushed' placeholder='Describe your project' />
          <HStack>
            <Button backgroundColor={'yellow.300'} >Send Request</Button>
            <Checkbox>I want to protect my data by signing an NDA</Checkbox>
          </HStack>
        </VStack>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size='6xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Flex py={4}>
              <VStack width={'xl'} backgroundColor={"gray.100"} align={'start'} spacing={10} p={14}>
                <Text fontSize={'4xl'}>Lets discuss your project</Text>
                <Select variant='flushed' placeholder='Select your industry'>
                  <option value='Healthcare'>Healthcare</option>
                  <option value='Financial Services'>Financial Services</option>
                  <option value='Logistics & Supply chain'>Logistics & Supply chain</option>
                  <option value='Media & Telecom'>Media & Telecom</option>
                  <option value='Other'>Other</option>
                </Select>
                <HStack>
                  <Input variant='flushed' placeholder='Name' />
                  <Input variant='flushed' placeholder='Corporate E-mail' />
                </HStack>
                <HStack>
                  <Input variant='flushed' placeholder='Phone' />
                  <DatePicker placeholder="Date & Time" onChange={() => console.log('bro')} />
                </HStack>
                <Input variant='flushed' placeholder='Describe your project' />
                <Checkbox>I want to protect my data by signing an NDA</Checkbox>
                <Button backgroundColor={'yellow.300'}>Send Request</Button>
              </VStack>
              <VStack width={'xl'} backgroundColor={'gray.700'} align={'start'} spacing={10} p={14}>
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


    </Layout >
  )
}
