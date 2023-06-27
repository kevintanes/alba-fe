import {
    Box,
    Button,
    Flex,
    Image,
    Text,
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Show,
    IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from "../asets/Logo.png";
import { authLogoutAction } from "../reducers/auth";
import { BiChevronDown } from "react-icons/bi"
import { RxHamburgerMenu } from "react-icons/rx"

function Navbar() {

    const token = useSelector((state) => state.authReducer.token);
    const initial = token.split("")[0];

    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const btnLogout = () => {
        dispatch(authLogoutAction());
        localStorage.removeItem("userAuth");
        navigate("/", { replace: true });
        onClose()
    }

    return (
        <Box bgColor={"white"} shadow="md" position={"fixed"} w="full" zIndex={"2"}>
            <Flex bgColor={"white"} mx={"auto"} w={{ lg: "75%" }} textColor="black" justifyContent={"space-between"} alignItems={"center"} px={{ base: "16px", xl: "0px" }} py="16px">
                <Text as="button" onClick={() => navigate("/")}>
                    <Image src={Logo} alt="Logo" w={{ base: "100px", md: "120px", xl: "140px" }} h={{ base: "50px", xl: "60px" }} mt={{ base: "-12px" }} />
                </Text>
                {
                    token ? (
                        <Show below='lg'>
                            <Menu >
                                <MenuButton
                                    as={Button}
                                    rightIcon={<BiChevronDown size={'24px'} />}
                                    variant="outline"
                                >
                                    {initial}
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={() => navigate("/profile")}>My Account</MenuItem>
                                    <MenuItem>My Order</MenuItem>
                                    <MenuItem>Settings</MenuItem>
                                    <MenuItem onClick={btnLogout}>Sign Out</MenuItem>
                                </MenuList>
                            </Menu>
                        </Show>
                    ) : (
                        <Show below='sm'>
                            <Menu >
                                <MenuButton
                                    as={IconButton}
                                    icon={<RxHamburgerMenu size={'24px'} />}
                                    variant='outline'
                                >
                                    {initial}
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Service</MenuItem>
                                    <MenuItem>About</MenuItem>
                                    <MenuItem>Portfolio</MenuItem>
                                    <MenuItem>Blog</MenuItem>
                                    <MenuItem>Career</MenuItem>
                                    <MenuItem>Contact Us</MenuItem>
                                </MenuList>
                            </Menu>
                        </Show>
                    )
                }
                <Show above='md'>
                    <Text fontWeight={"semibold"} fontSize={{ base: "lg", xl: "2xl" }} as="button">Service</Text>
                    <Text fontWeight={"semibold"} fontSize={{ base: "lg", xl: "2xl" }} as="button">About</Text>
                    <Text fontWeight={"semibold"} fontSize={{ base: "lg", xl: "2xl" }} as="button">Portfolio</Text>
                    <Text fontWeight={"semibold"} fontSize={{ base: "lg", xl: "2xl" }} as="button">Blog</Text>
                    <Text fontWeight={"semibold"} fontSize={{ base: "lg", xl: "2xl" }} as="button">Career</Text>
                    <Button fontSize={{ base: "md", xl: "lg" }} bgColor={"#ffce07"} size={{ base: "md", xl: "lg" }} w={{ base: "120px", xl: "150px" }} rounded={"full"}>Contact Us</Button>
                    {
                        token ?
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    w={"12"}
                                    h="12"
                                    rounded={"full"}
                                    fontSize="xl"
                                    variant={"outline"}
                                >
                                    {initial}
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={() => navigate("/profile")}>My Account</MenuItem>
                                    <MenuItem>My Order</MenuItem>
                                    <MenuItem>Settings</MenuItem>
                                    <MenuItem onClick={btnLogout}>Sign Out</MenuItem>
                                </MenuList>
                            </Menu> : null
                    }
                </Show>
            </Flex>
        </Box>
    );
}

export default Navbar;