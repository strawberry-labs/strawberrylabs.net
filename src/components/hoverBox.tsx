import { Box, Fade, Text, useDisclosure } from "@chakra-ui/react"
import React, { ReactNode } from "react"

export default function HoverBox({ text1, text2, text3 }: { text1: string, text2: string, text3: string }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Fade in={!isOpen} hidden={isOpen}>
                <Box textAlign={'center'} backgroundColor={'gray.100'} width={'xs'} py={10} hidden={isOpen} onMouseEnter={onOpen} onMouseLeave={onClose}>
                    <Text fontSize={'4xl'}>{text1}</Text>
                    <Text>{text2}</Text>
                </Box>
            </Fade>
            <Fade in={isOpen} hidden={!isOpen}>
                <Box shadow={'lg'} width={'xs'} py={6} px={6} hidden={!isOpen} onMouseEnter={onOpen} onMouseLeave={onClose}>
                    <Text>{text3}</Text>
                </Box>
            </Fade>
        </>
    )
}