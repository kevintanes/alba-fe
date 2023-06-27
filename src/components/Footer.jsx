import { Box, Divider, SimpleGrid, Stack, Text, Textarea, Link, Image, Flex, Show } from '@chakra-ui/react'
import React from 'react';
import Logo from "../asets/Logo.png";
import Whatsapp from "../asets/WhatsApp.png";
import { AiOutlineCopyright } from "react-icons/ai"

function Footer() {
    return (
        <Box my="30px" w={"75%"} mx="auto" pos={"relative"} >
            <Divider />
            <Divider />
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 3, xl: 10 }} my="40px">
                <Stack w={{ xl: "lg" }}>
                    <Image src={Logo} w={{ base: "28", xl: "36" }} />
                    <Text>
                        Albatech acts as a corporate partner to
                        help digitize their business
                        to accelerate trends in remote work.
                    </Text>
                </Stack>
                <Stack ml={{ base: "0", lg: "24", xl: "48" }}>
                    <Text mb={{ base: "0", xl: "32px" }} fontWeight={"bold"} fontSize="lg">
                        Website
                    </Text>
                    <Link mb={{ base: "0px", xl: "8px" }}>About</Link>
                    <Link mb={{ base: "0px", xl: "8px" }}>Service</Link>
                    <Link mb={{ base: "0px", xl: "8px" }}>Portfolio</Link>
                    <Link mb={{ base: "0px", xl: "8px" }}>Blog</Link>
                    <Link mb={{ base: "0px", xl: "8px" }}>Career</Link>
                </Stack>
                <Stack>
                    <Text mb={{ xl: "32px" }} fontWeight={"bold"} fontSize="lg">
                        Contact
                    </Text>
                    <Text>
                        The Prominence Blok 38D No.25 <br />
                        Jl. Jalur Sutera Barat, Alam Sutera, <br />
                        Kota Tangerang, Banten 15143
                        <br /><br />
                    </Text>
                    <Text>
                        P : +62 81 1889 3383
                    </Text>
                    <Text>
                        E : info@albatech.id
                    </Text>
                </Stack>
            </SimpleGrid>

            <Divider />
            <Divider />

            <Image src={Whatsapp} right={{ base: "2", xl: "10" }} bottom="10" pos={"fixed"} />

            <Flex justifyContent={"space-between"} textColor="#c4c4c4" mt={"16px"} flexDirection={{ base: "column", lg: "row" }}>
                <Flex flexDirection={{ base: 'column', md: "row" }}>
                    <Flex alignItems={"center"}>
                        <AiOutlineCopyright />
                        <Text>  PT. Alba Digital Teknologi 2021 |</Text>
                    </Flex>
                    <Text ml={{ base: "0", md: "2" }}>
                        All Rights Reserved
                    </Text>
                </Flex>
                <Text mt={{ base: "4px", lg:"0" }}>
                    Privacy policy | Terms of service
                </Text>
            </Flex>

        </Box>
    )
}

export default Footer