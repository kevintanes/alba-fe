import { border, Box, Button, Card, CardBody, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import porto1 from "../asets/porto1.svg"
import porto2 from "../asets/porto2.png"
import porto3 from "../asets/porto3.png"
import React from 'react'

function Portofolio() {
    return (
        <Box bgColor={"white"} w="75%" mx={"auto"} mt={{ base: "40px", xl: "100px" }}>
            <Text textAlign={"center"} fontSize={"xl"} textColor={"#c4c4c4"}>
                Portofolio
            </Text>
            <Heading mt={"8px"} fontSize={{ base: '2xl', md: "3xl" }} textAlign="center" fontWeight={"extrabold"}>The software we build <br /> takes our clients to the next level</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 2, xl: 10 }} mt={{ base: "20px", xl: "40px" }}>
                <Card
                    _hover={{
                        _after: {
                            borderColor: "#ffce07"
                        }
                    }}
                >
                    <Image src={porto1} objectFit="contain" />
                    <CardBody>
                        <Text textColor={"#c4c4c4"} >
                            Mobile apps
                        </Text>
                        <Heading fontSize={{ base: "xl", xl: "2xl" }} textColor="#ffce07" mt={{ base: "4px", xl: "8px" }}>
                            ILIOS app (B2B E-commerce)
                        </Heading>
                        <Text fontSize={{ base: "md", xl: "lg" }} mt={{ base: "4px", xl: "12px" }}>
                            Has a unique selling point where not all
                            companies offer applications for sales, data
                            collection and management.
                        </Text>
                    </CardBody>
                </Card>
                <Card >
                    <Image src={porto2} objectFit="cover" />
                    <CardBody>
                        <Text textColor={"#c4c4c4"}>
                            Website development
                        </Text>
                        <Heading fontSize={{ base: "xl", xl: "2xl" }} textColor="#ffce07"  mt={{ base: "4px", xl: "8px" }}>
                            Home and Living
                        </Heading>
                        <Text fontSize={{ base: "md", xl: "lg" }} mt={{ base: "4px", xl: "12px" }}>
                            Albatech helps in creating a website catalog to
                            show brand identity and infromation in
                            accordance with vision and mission of
                            Home and Living
                        </Text>
                    </CardBody>
                </Card>
                <Card >
                    <Image src={porto3} objectFit="cover" />
                    <CardBody>
                        <Text textColor={"#c4c4c4"}>
                            Website development
                        </Text>
                        <Heading fontSize={{ base: "xl", xl: "2xl" }} textColor="#ffce07" mt={"8px"}>
                            HIPPO
                        </Heading>
                        <Text fontSize={{ base: "md", xl: "lg" }} mt={"12px"}>
                            Albatech help to create e-commerce and
                            company profile for Hippo's Website with
                            realtime transaction and integration with
                            Payment Gateway to accept multi payment.
                        </Text>
                    </CardBody>
                </Card>
            </SimpleGrid>
            <Flex justifyContent={"center"} mt="32px">
                <Button w={"180px"} h="50px" rounded={"full"} bgColor={"#ffce07"} fontWeight="semibold">Learn More</Button>
            </Flex>

        </Box >
    );
}

export default Portofolio;