import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'

function Banner() {
    return (
        <Box bgColor={"#272727"} h="250px" mt={{ base: "40px", xl: "80px" }} pt="20px">
            <Text textColor={"#ffce07"} fontSize={{ base: "2xl", md: "3xl" }} textAlign={"center"} fontWeight="semibold" letterSpacing={"tight"} >
                Our Progress Come with a Collaboration Between <br />
                Creativity, Ideas, and Technology
            </Text>
            <Flex justifyContent={"center"} gap={{ base: "64px", xl: "400px" }}>
                <Flex flexDir={"column"}>
                    <Text textColor={"white"} fontSize={{ base: "2xl", md: "4xl" }} textAlign={"center"} fontWeight="semibold" letterSpacing={"tight"}>
                        1000+
                    </Text>
                    <Text textColor={"white"} fontSize={{ base: "lg", md: "xl" }} textAlign={"center"} fontWeight="normal" letterSpacing={"tight"}>
                        Designs
                    </Text>

                </Flex>
                <Flex flexDir={"column"}>
                    <Text textColor={"white"} fontSize={{ base: "2xl", md: "4xl" }} textAlign={"center"} fontWeight="semibold" letterSpacing={"tight"}>
                        30+
                    </Text>
                    <Text textColor={"white"} fontSize={{ base: "lg", md: "xl" }} textAlign={"center"} fontWeight="normal" letterSpacing={"tight"}>
                        Products
                    </Text>

                </Flex>
                <Flex flexDir={"column"}>
                    <Text textColor={"white"} fontSize={{ base: "2xl", md: "4xl" }} textAlign={"center"} fontWeight="semibold" letterSpacing={"tight"}>
                        58+
                    </Text>
                    <Text textColor={"white"}  fontSize={{ base: "lg", md: "xl" }} textAlign={"center"} fontWeight="normal" letterSpacing={"tight"}>
                        Website Developments
                    </Text>

                </Flex>
            </Flex>
        </Box>

    )
}

export default Banner