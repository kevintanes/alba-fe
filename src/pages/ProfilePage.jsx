import { Box, Card, Divider, Flex, FormControl, FormLabel, Heading, Input, Select, Show, Text } from '@chakra-ui/react'
import React from 'react'
import { VscAccount, VscSettingsGear, VscNotebook } from "react-icons/vsc"
import { HiOutlineChatAlt2, HiOutlineLogout } from "react-icons/hi"
import { useDispatch, useSelector } from 'react-redux';

import { authLogoutAction } from "../reducers/auth";
import { useNavigate } from 'react-router-dom';

function ProfilePage() {

    const token = useSelector((state) => state.authReducer.token);

    let email = localStorage.getItem("userAuth");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const btnLogout = () => {
        dispatch(authLogoutAction());
        localStorage.removeItem("userAuth");
        navigate("/", { replace: true });
    }

    return (
        <Box w={"75%"} pt="100px" mx={"auto"}>
            <Flex mt={{ base: "8px", xl: "40px" }} justifyContent="space-between" flexDirection={{ base: "column", lg: "row" }}>
                <Show above='lg'>
                    <Box shadow={"xl"} w={{ base: "full", lg: "30%" }} p="32px" >
                        <Heading size={{ base: "md", xl: "lg" }}>
                            {token}
                        </Heading>
                        <Flex alignItems={"center"} mt="24px" fontSize={{ base: "xl", xl: "2xl" }} as="button">
                            <VscAccount size={"32px"} />
                            <Text ml="24px">Account</Text>
                        </Flex>
                        <Flex alignItems={"center"} mt="24px" fontSize={{ base: "xl", xl: "2xl" }} as="button">
                            <VscNotebook size={"32px"} />
                            <Text ml="24px">My Order</Text>
                        </Flex>
                        <Flex alignItems={"center"} mt="24px"  fontSize={{ base: "xl", xl: "2xl" }} as="button">
                            <HiOutlineChatAlt2 size={"32px"} />
                            <Text ml="24px">Help Center</Text>
                        </Flex>
                        <Flex alignItems={"center"} my="24px"  fontSize={{ base: "xl", xl: "2xl" }} as="button">
                            <VscSettingsGear size={"32px"} />
                            <Text ml="24px">Settings</Text>
                        </Flex>
                        <Divider />
                        <Divider />
                        <Flex alignItems={"center"} mt="24px"  fontSize={{ base: "xl", xl: "2xl" }} as="button" onClick={btnLogout}>
                            <HiOutlineLogout size={"32px"} />
                            <Text ml="24px">Log Out</Text>
                        </Flex>
                    </Box>
                </Show>
                <Box shadow={"xl"} w={{ base: "full", lg: "65%" }} p="32px">
                    <Text fontSize="2xl" fontWeight={"semibold"}>
                        Account Details
                    </Text>
                    <Text mt="4px" fontSize={"lg"}>
                        Here's your account details
                    </Text>
                    <Flex justifyContent={'space-between'} flexDirection={{ base: "column", lg: "row" }}>
                        <Card mt="24px" fontSize={"lg"} p="16px" w={{ base: "full", lg: "45%" }}>
                            <Box>
                                <Text fontWeight={"light"}>
                                    Email
                                </Text>
                                <Text fontSize={"xl"} >
                                    {email}
                                </Text>
                            </Box>
                            <Box my={"24px"}>
                                <Text fontWeight={"light"}>
                                    Token
                                </Text>
                                <Text>
                                    {token}
                                </Text>
                            </Box>
                            <Divider />
                            <Divider />
                            <Text textAlign={"right"} mt="24px" fontWeight={"bold"} as="button">
                                ACCOUNT SETTINGS
                            </Text>
                        </Card>

                        <Box w={{ base: "full", lg: "45%" }} mt={{ base: "24px", xl: "0" }}>
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Select
                                    placeholder='-- select --'
                                >
                                    <option value={1}>Mr.</option>
                                    <option value={2}>Mrs.</option>
                                    <option value={3}>Ms.</option>
                                </Select>
                            </FormControl>
                            <FormControl mt={"8px"}>
                                <FormLabel>First Name</FormLabel>
                                <Input
                                    type={"text"}
                                    placeholder={"First Name"}
                                />
                            </FormControl>
                            <FormControl mt={"8px"}>
                                <FormLabel>Last Name</FormLabel>
                                <Input
                                    type={"text"}
                                    placeholder={"Last Name"}
                                />
                            </FormControl>
                        </Box>

                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default ProfilePage