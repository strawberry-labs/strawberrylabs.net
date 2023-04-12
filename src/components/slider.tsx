import React, { ReactNode, Children } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
} from '@chakra-ui/react';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';



export default function SimpleSlider({ children, slidesToShow, variableWidth, horizontalMargin }: { children: ReactNode, slidesToShow: number, variableWidth: boolean, horizontalMargin: number }) {
    const [slider, setSlider] = React.useState<Slider | null>(null);

    const count = Children.toArray(children).length;

    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });


    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow < count ? slidesToShow : count,
        slidesToScroll: slidesToShow < count ? slidesToShow : count,
        variableWidth: variableWidth ? true : false,
    };

    return (
        <Box
            position={'relative'}
            overflow={'hidden'}
            p={10}>
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="40px" />
            </IconButton>
            <Box mx={horizontalMargin}>
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {children}
                </Slider>
            </Box>
        </Box>
    )
}