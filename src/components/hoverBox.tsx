import { Box, Fade, Text, useDisclosure } from "@chakra-ui/react"
import React, { ReactNode } from "react"

export default function HoverBox({ text1, text2, text3 }: { text1: string, text2: string, text3: string }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box>
            <Box display={{ base: 'none', lg: 'block' }} width={'xs'}>
                <Fade in={!isOpen} hidden={isOpen}>
                    <Box textAlign={'center'} backgroundColor={'gray.100'} py={10} hidden={isOpen} onMouseEnter={onOpen} onMouseLeave={onClose}>
                        <Text fontSize={'4xl'}>{text1}</Text>
                        <Text>{text2}</Text>
                    </Box>
                </Fade>
                <Fade in={isOpen} hidden={!isOpen}>
                    <Box shadow={'lg'} py={6} px={6} hidden={!isOpen} onMouseEnter={onOpen} onMouseLeave={onClose}>
                        <Text>{text3}</Text>
                    </Box>
                </Fade>
            </Box>
            <Box shadow={'xl'} width={{ base: 'xs', md: '56' }} mx={2} py={8} px={8} display={{ base: 'block', lg: 'none' }}>
                <Text display={'inline'} fontSize={'3xl'}>{text1}</Text>
                <Text display={'inline'} ml={3} mb={1}>{text2}</Text>
                <Text fontSize={'sm'} mt={4}>{text3}</Text>
            </Box>
        </Box>
    )
}