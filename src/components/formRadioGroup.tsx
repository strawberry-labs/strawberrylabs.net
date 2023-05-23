import { Box, Divider, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react';

export default function FormRadioGroup({ text, val1, val2, val3, val4 }: { text: string, val1: string, val2: string, val3: string, val4: string }) {
    const [value, setValue] = useState('');

    return (
        <Box py={6}>
            <Text fontSize={{ base: '5xl', lg: '3xl' }}>{text}</Text>
            <RadioGroup onChange={setValue} value={value}>
                <Stack spacing={[1, 5]} direction={['column', 'row']} my={6}>
                    <Radio value={val1}>{val1}</Radio>
                    <Radio value={val2}>{val2}</Radio>
                    <Radio value={val3}>{val3}</Radio>
                    <Radio value={val4}>{val4}</Radio>
                </Stack>
            </RadioGroup>
        </Box>
    )
}