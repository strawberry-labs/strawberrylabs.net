import React from 'react'
import {
    Box,
    Text
} from '@chakra-ui/react';

import Testimonial from "../testimonial";
import SimpleSlider from "../slider";

export default function Section6() {
    return (
        <Box>
            <Text fontSize={{ base: '3xl', lg: '5xl' }} mt={{ base: 8, lg: 16 }} mx={{ base: 10, lg: 20 }}>Testimonials</Text>
            <Text fontSize={{ base: 'md', lg: 'xl' }} mx={{ base: 10, lg: 20 }} mt={{ base: 4, lg: 0 }}>SMB, enterprise, and startup customers return to our custom software company because they’re happy with our work. Here is what they say about Andersen.</Text>
            <Box display={{ base: 'none', lg: 'flex' }}>
                <SimpleSlider slidesToShow={1} horizontalMargin={4} arrows={true}>
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
            <Box display={{ base: 'block', lg: 'none' }}>
                <SimpleSlider slidesToShow={1} horizontalMargin={2} arrows={false}>
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
        </Box>
    )
}