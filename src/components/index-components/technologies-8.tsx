import React, { useState } from 'react'
import {
    Box,
    Text,
    HStack,
    Button,
    VStack,
    Link,
    Image
} from '@chakra-ui/react';

import SimpleSlider from "../slider";

import Android from '../../images/Android.svg'
import iOS from '../../images/iOS.svg'
import Flutter from '../../images/flutter.svg'
import ReactNative from '../../images/ReactNative.svg'
import ReactImg from '../../images/React.svg'
import Vue from '../../images/Vue.svg'
import Angular from '../../images/Angular.svg'
import Java from '../../images/java.svg'
import Kotlin from '../../images/kotlin.svg'
import Spring from '../../images/spring.svg'
import Net from '../../images/net.svg'
import Node from '../../images/Node.svg'
import Python from '../../images/Python.svg'
import MSSQL from '../../images/MSSQL.svg'
import MySQL from '../../images/MySQL.svg'
import Oracle from '../../images/Oracle.svg'
import PostGres from '../../images/postgre.svg'
import Redis from '../../images/redis.svg'
import Dynamo from '../../images/dynamodb.svg'
import Cassandra from '../../images/cassandra.svg'
import MongoDB from '../../images/mongodb.svg'

const techData = [
    { name: "Android", image: Android, type: ["mobile"] },
    { name: "iOS", image: iOS, type: ["mobile"] },
    { name: "Flutter", image: Flutter, type: ["mobile"] },
    { name: "React Native", image: ReactNative, type: ["mobile"] },
    { name: "NodeJS", image: Node, type: ["backend"] },
    { name: "Java", image: Java, type: ["backend"] },
    { name: "Kotlin", image: Kotlin, type: ["backend"] },
    { name: "Spring Boot", image: Spring, type: ["backend"] },
    { name: ".NET", image: Net, type: ["backend"] },
    { name: "Python", image: Python, type: ["backend"] },
    { name: "React", image: ReactImg, type: ["frontend"] },
    { name: "Angular", image: Angular, type: ["frontend"] },
    { name: "Vue", image: Vue, type: ["frontend"] },
    { name: "Postgresql", image: PostGres, type: ["database"] },
    { name: "MySQL", image: MySQL, type: ["database"] },
    { name: "MongoDB", image: MongoDB, type: ["database"] },
    { name: "Cassandra", image: Cassandra, type: ["database"] },
    { name: "Oracle", image: Oracle, type: ["database"] },
    { name: "Microsoft SQL Server", image: MSSQL, type: ["database"] },
    { name: "Redis", image: Redis, type: ["database"] },
    { name: "Amazon DynamoDB", image: Dynamo, type: ["database"] },

]

export default function Section7() {
    const [techFilter, setTechFilter] = useState("")

    return (
        <Box id="TechStack">
            <Text fontSize={{ base: '3xl', lg: '5xl' }} mt={{ base: 6, lg: 12 }} mx={{ base: 10, lg: 20 }}>Andersen's set of technologies for software development</Text>
            <Text fontSize={{ base: 'md', lg: 'xl' }} mx={{ base: 10, lg: 20 }} mt={{ base: 4, lg: 8 }}>Cooperate with competent and knowledgeable IT experts in desktop, web, and mobile software engineering. As a trusted tech and business partner, we apply the most advanced technologies, frameworks, and components to build software notable for both its solid and effective back-end with intuitive UI/UX.</Text>
            <HStack spacing={{ lg: 5 }} mx={{ base: 10, lg: 20 }} mt={{ base: 6, lg: 12 }} wrap={'wrap'}>
                <Button onClick={() => setTechFilter('')} isActive={techFilter === "" ? true : false}>All</Button>
                <Button onClick={() => setTechFilter('mobile')} isActive={techFilter === "mobile" ? true : false}>Android</Button>
                <Button onClick={() => setTechFilter('frontend')} isActive={techFilter === "frontend" ? true : false}>Frontend</Button>
                <Button onClick={() => setTechFilter('backend')} isActive={techFilter === "backend" ? true : false}>Backend</Button>
                <Button onClick={() => setTechFilter('database')} isActive={techFilter === "database" ? true : false}>Database</Button>
            </HStack>
            <Box display={{ base: 'none', 'lg': 'block' }}>
                <SimpleSlider slidesToShow={4} variableWidth={true} arrows={true} horizontalMargin={14}>
                    {techFilter === "" ? techData.map((item) => (
                        <Box mx={5} my={1}>
                            <VStack shadow={'base'} p={14} w={52}>
                                <Image mb={6} boxSize={20} src={item.image} />
                                <Link>{item.name}</Link>
                            </VStack>
                        </Box>
                    )) :
                        techData.filter((item) => item.type.includes(techFilter)).map((item) => (
                            <Box mx={5} my={1}>
                                <VStack shadow={'base'} p={14} w={52}>
                                    <Image mb={6} boxSize={20} src={item.image} />
                                    <Link>{item.name}</Link>
                                </VStack>
                            </Box>
                        ))}
                </SimpleSlider>
            </Box>
            <Box display={{ base: 'block', 'lg': 'none' }}>
                <SimpleSlider slidesToShow={2} variableWidth={true} arrows={false} horizontalMargin={0}>
                    {techData.filter((item) => item.type.includes(techFilter)).map((item) => (
                        <Box mx={2} my={1}>
                            <VStack shadow={'base'} p={{ base: 5, lg: 14 }} w={32}>
                                <Image mb={6} src={Android} />
                                <Link>{item.name}</Link>
                            </VStack>
                        </Box>
                    ))}
                </SimpleSlider>
            </Box>
        </Box>
    )
}