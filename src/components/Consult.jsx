import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

function Consult() {
    return (
        <Box w={"75%"} bgColor="white" mx={"auto"} mt="24px">
            <Box mx="auto" rounded={"3xl"} bgColor="#ffce07" textAlign={"center"} border={"1px"} h={{ base: "120px", md: "140px", xl: "223px" }}>
                <Text fontSize={{ base: "sm", md: "xl", xl: "lg" }} mt={{ base: "8px", xl: "16px" }}>
                    Is software important for your business?
                </Text>
                <Text fontSize={{ base: "xl", md: "2xl", xl: "4xl" }} mt={{ base: "8px", xl: "16px" }}>
                    Build it with Albatech
                </Text>
                <Button mt={{ base: "6px", xl: "16px" }} fontWeight={"bold"} border={"1px"} bgColor={"#ffce07"} rounded="full" h={{ base: "40px", xl: "56px" }} w={"200px"}>
                    Consultasion Now
                </Button>
            </Box>
        </Box>
    )
}

export default Consult