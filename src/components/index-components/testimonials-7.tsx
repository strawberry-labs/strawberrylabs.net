import React from 'react'
import {
    Box,
    Stack,
    Text
} from '@chakra-ui/react';

import Testimonial from "../testimonial";
import SimpleSlider from "../slider";

const testimonials = [
    {
        "text1": "Strawberry Labs' team provided invaluable expertise in developing our e-commerce platform.",
        "text2": "We are extremely pleased with the results of our collaboration with Strawberry Labs. Their team of experts showcased their technical prowess and deep understanding of the e-commerce industry. They provided invaluable guidance in developing our platform, ensuring it met our specific requirements and delivered a seamless user experience. Their streamlined ticketing process and timely communication made the entire development phase efficient and hassle-free. We highly recommend Strawberry Labs for their professionalism, high-quality work, and ability to deliver exceptional solutions.",
        "person": "CEO, Blossom Boutique",
        "country": "UK",
        "summary": "E-commerce platform development",
        "industry": "Retail",
        "teamSize": "10 specialists",
        "duration": "8 months",
        "budget": "over 300k GBP",
        "technologies": ["Magento", "React"]
    },
    {
        "text1": "Strawberry Labs' team revolutionized our healthcare system with their innovative software solutions.",
        "text2": "We are immensely grateful for Strawberry Labs' contribution to our healthcare system. Their team of skilled professionals demonstrated exceptional expertise in developing innovative software solutions. Their strategic use of technology, including AI and data analytics, significantly improved our operational efficiency and patient care. Strawberry Labs' streamlined ticketing process ensured that the project was delivered on time and within budget. Their open communication and collaborative approach made the entire journey enjoyable and fruitful. We highly recommend Strawberry Labs for their transformative capabilities and commitment to delivering outstanding results.",
        "person": "CTO, HealthFirst Hospitals",
        "country": "USA",
        "summary": "Healthcare software solutions",
        "industry": "Healthcare",
        "teamSize": "15 specialists",
        "duration": "12 months",
        "budget": "over 500k USD",
        "technologies": ["Python", "Django", "Machine Learning"]
    },

    {
        "text1": "Strawberry Labs' team exceeded our expectations in developing our logistics management software.",
        "text2": "Working with Strawberry Labs has been an absolute pleasure. Their team of experts went above and beyond to develop our logistics management software. Their in-depth understanding of the logistics industry combined with their technical proficiency allowed them to deliver a robust and scalable solution. Strawberry Labs' streamlined ticketing process ensured that the project progressed smoothly, with timely updates and efficient issue resolution. Their professionalism, attention to detail, and proactive approach made them a trusted partner throughout the development journey. We highly recommend Strawberry Labs for any logistics software needs.",
        "person": "Operations Manager, Swift Logistics",
        "country": "Canada",
        "summary": "Logistics management software development",
        "industry": "Transportation",
        "teamSize": "8 specialists",
        "duration": "10 months",
        "budget": "over 250k CAD",
        "technologies": ["Java", "Spring Boot", "React Native"]
    }

]

export default function Section6() {
    return (
        <Box textAlign={'center'}>
            <Text fontSize={{ base: '3xl', lg: '5xl' }} mt={{ base: 8, lg: 16 }} mx={{ base: 10, lg: 20 }}>Testimonials</Text>
            <Text fontSize={{ base: 'md', lg: 'xl' }} mx={{ base: 10, lg: 60 }} mt={{ base: 4, lg: 0 }}>SMB, enterprise, and startup customers return to our custom software company because they’re happy with our work. Here is what they say about Strawberry Labs.</Text>
            <Stack>
                <SimpleSlider slidesToShow={1} horizontalMargin={4} arrows={true}>
                    {testimonials.map((testimonial) =>
                    (
                        <Testimonial
                            text1={testimonial.text1}
                            text2={testimonial.text2}
                            person={testimonial.person}
                            country={testimonial.country}
                            summary={testimonial.summary}
                            industry={testimonial.industry}
                            teamSize={testimonial.teamSize}
                            duration={testimonial.duration}
                            budget={testimonial.budget}
                            technologies={testimonial.technologies}
                        />
                    ))}
                </SimpleSlider>
            </Stack>
        </Box>
    )
}