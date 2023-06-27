import { Box, Circle, Flex, Heading, Image, Show, Text } from '@chakra-ui/react';
import React from 'react';
import petik1 from "../asets/Petik1.png";
import petik2 from "../asets/Petik2.png";
import titik from "../asets/titik.svg";
import titikgold from "../asets/titikgold.svg";


function Testimonial() {
    return (
        <Box bgColor={""} w="75%" mx={"auto"} mt={{ base: "30px", xl: "80px" }} position={"relative"} h="700px">

            <Image src={petik1} pos="absolute" top={"12"} left="-24" />
            <Image src={petik2} pos="absolute" right="0" bottom={{ base: "40", xl: "20" }} />
            <Image src={titik} pos="absolute" right={{ base: "400", md: "300", xl: "650" }} top="190" />
            <Image src={titikgold} pos="absolute" bottom={{ base: "100", xl: "0" }} left={"-24"} />

            <Text textAlign={"center"} fontSize="xl" textColor={"#c4c4c4"}>
                Testimonials
            </Text>
            <Heading fontSize={{ base: "2xl", xl: "3xl" }} mt={"8px"} textAlign="center" fontWeight={"extrabold"}
            >
                What clients love in working <br /> with Albatech Team
            </Heading>
            <Box pos="absolute" top={{ base: "150", xl: "200" }} left={{ base: "-8", xl: "0" }}>
                <Heading fontSize={{ base: "xl", xl: "4xl" }}>
                    Amazing people
                </Heading>
                <Text fontSize={{ base: "md", xl: "2xl" }} mt="16px">
                    "They are people who are not only following <br /> the task, but can work as a team. Together."
                </Text>
                <Flex mt={"16px"} alignItems="center">
                    <Circle size={{ base: "30px", xl: '50px' }} bgColor={"#c4c4c4"} />
                    <Box ml='20px'>
                        <Text fontSize={{ base: "sm", xl: "xl" }}>Matthijs Piëst</Text>
                        <Text textColor={"#c4c4c4"} fontSize={{ base: "xs", xl: "md" }}>COO at WieBetaaltWat</Text>
                    </Box>
                </Flex>
            </Box>
            <Show above='sm'>
                <Box pos="absolute" right={{ base: "-20", xl: "72" }} top={{ base: "100", xl: "200" }}>
                    <Heading fontSize={"xl"}>
                        Amazing people
                    </Heading>
                    <Text fontSize={"md"} mt="16px">
                        "They are people who are not only following <br /> the task, but can work as a team. Together."
                    </Text>
                    <Box mt='16px'>
                        <Text fontSize={"md"}>Matthijs Piëst</Text>
                        <Text textColor={"#c4c4c4"}>COO at WieBetaaltWat</Text>
                    </Box>
                </Box>
            </Show>
            <Show above='sm'>
                <Box pos="absolute" bottom={{ base: "200", xl: "100" }}>
                    <Heading fontSize={"xl"}>
                        Amazing people
                    </Heading>
                    <Text fontSize={"md"} mt="16px">
                        "They are people who are not only following <br /> the task, but can work as a team. Together."
                    </Text>
                    <Box mt='16px'>
                        <Text fontSize={"md"}>Matthijs Piëst</Text>
                        <Text textColor={"#c4c4c4"}>COO at WieBetaaltWat</Text>
                    </Box>
                </Box>
            </Show>
            <Show above='xl'>
                <Box pos="absolute" bottom={"0"} right="700">
                    <Heading fontSize={"xl"}>
                        Amazing people
                    </Heading>
                    <Text fontSize={"md"} mt="16px">
                        "They are people who are not only following <br /> the task, but can work as a team. Together."
                    </Text>
                    <Box mt='16px'>
                        <Text fontSize={"md"}>Matthijs Piëst</Text>
                        <Text textColor={"#c4c4c4"}>COO at WieBetaaltWat</Text>
                    </Box>
                </Box>

            </Show>
            <Box pos="absolute" right={{ base: "-10", xl: "32" }} bottom={{ base: "200", xl: "10" }} >
                <Heading fontSize={{ base: "xl", xl: "4xl" }}>
                    Partnership approach
                </Heading>
                <Text fontSize={{ base: "md", xl: "2xl" }} mt="16px">
                    "We felt like we had a true partner throughout <br />
                    the process. They were clearly interested on <br />
                    our long-term success."
                </Text>
                <Flex mt={"16px"} alignItems="center">
                    <Circle size={{ base: "30px", xl: '50px' }} bgColor={"#c4c4c4"} />
                    <Box ml='20px'>
                        <Text fontSize={{ base: "sm", xl: "xl" }}>Matthijs Piëst</Text>
                        <Text textColor={"#c4c4c4"}>COO at WieBetaaltWat</Text>
                    </Box>
                </Flex>
            </Box>

        </Box >
    )
}

export default Testimonial