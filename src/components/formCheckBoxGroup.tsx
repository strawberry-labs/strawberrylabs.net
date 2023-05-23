import { Box, Text, CheckboxGroup, Stack, Checkbox, Button, Divider } from "@chakra-ui/react";
import React from 'react';

export default function FormCheckBoxGroup({ text, val1, val2, val3, val4 }: { text: string, val1: string, val2: string, val3: string, val4: string }) {
    return (
        <Box py={6}>
            <Text fontSize={{ base: '5xl', lg: '3xl' }}>{text}</Text>
            <CheckboxGroup colorScheme='green'>
                <Stack spacing={[1, 5]} direction={['column', 'row']} my={6}>
                    <Checkbox value={val1}>{val1}</Checkbox>
                    <Checkbox value={val2}>{val2}</Checkbox>
                    <Checkbox value={val3}>{val3}</Checkbox>
                    <Checkbox value={val4}>{val4}</Checkbox>
                </Stack>
            </CheckboxGroup>
            <Button>Clear</Button>
        </Box>
    )
}