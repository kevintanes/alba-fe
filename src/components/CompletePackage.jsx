import {
    Box, Button, Card, Flex, Heading, Image, SimpleGrid, Text, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    useToast,
    Show,
} from '@chakra-ui/react';
import { MdArrowForward } from "react-icons/md";
import aLogo from "../asets/a.svg";
import awsLogo from "../asets/aws.svg";
import cloudLogo from "../asets/cloud.svg";
import cssLogo from "../asets/css.svg";
import diamondLogo from "../asets/diamond.svg";
import htmlLogo from "../asets/html.svg";
import jsLogo from "../asets/js.svg";
import monggoLogo from "../asets/monggo.png";
import mysqlLogo from "../asets/mysql.svg";
import phpLogo from "../asets/php.svg";
import postgresqlLogo from "../asets/postgresql.svg";
import pythonLogo from "../asets/python.svg";
import reactLogo from "../asets/react.svg";
import MobileLogo from "../asets/Mobileappsdevelopment.png";
import MaintenanceLogo from "../asets/Maintenance.png";
import CmsLogo from "../asets/CMSdevelopment.png";
import DigitalLogo from "../asets/Digitalproductdesign.png";
import PaymentLogo from "../asets/Payment.png";
import WebsiteLogo from "../asets/WebsiteLogo.png";
import sqlserverLogo from "../asets/sqlserver.svg";
import homePic from "../asets/home.webp"
import group32 from "../asets/Group32.webp"
import group3 from "../asets/Group3.webp"

import React from 'react';
import axios from 'axios';
import { API_AUTEN } from '../helper';
import { useDispatch, useSelector } from 'react-redux';
import { authLoginAction } from "../reducers/auth";
import { useNavigate } from 'react-router-dom';

function CompletePackage() {

    const token = useSelector((state) => state.authReducer.token);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const toast = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const btnLogin = async () => {
        try {
            let res = await axios.post(`${API_AUTEN}`, {
                email,
                password
            })
            console.log(`btnLogin`, res);

            toast({
                title: "Login Successfull",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
            localStorage.setItem("userlogin", res.data.token)
            localStorage.setItem("userAuth", email)
            dispatch(authLoginAction(res.data))
            navigate("/profile", { replace: true });
            onClose();

        } catch (error) {
            console.log(error);
            toast({
                title: `Login Failed`,
                description: `${error.response.data.error}`,
                status: "error",
                duration: 2000,
                isClosable: true,
            })
        }
    }


    return (
        <Box pt={{ base: "100px", xl: "200px" }} position={"relative"} w="full">
            <Show above='sm'>
                <Image src={group32} position={"absolute"} top={{ base: "285", xl: "615" }} right={{ base: "62", lg: "200", xl: "480" }} w={{ base: "200px", xl: "300px" }} zIndex="-2" />
                <Image src={group3} position={"absolute"} right={{ base: "290", lg: "430", xl: "970" }} top={{ base: "215", xl: "300" }} w={{ base: "50px", xl: "60px" }} zIndex="-2" />
            </Show>

            <Box w={{ lg: "75%" }} mx="auto" pt={{ base: "0px", xl: "100px" }} px={{ base: "16px", xl: "0px" }}>
                <Heading size={{ base: "2xl", xl: "3xl" }} textShadow="dark-lg">Build or scale up</Heading>
                <Heading mt={{ base: "2", xl: "6" }} size={{ base: '2xl', xl: "3xl" }} fontWeight="medium" textShadow="dark-lg">your development team</Heading>
                <Show above='sm'>
                    <Image src={homePic} w={{ base: "300px", xl: "700px" }} position="absolute" right={{ base: "4", lg: "153", xl: "72" }} top={{ base: "28", xl: "48" }} zIndex="-1" />
                </Show>
                <Flex mt={{ base: "4", xl: "6" }} alignItems="center">
                    <Box width={{ base: "70px", xl: "90px" }} h="7px" bgColor={"#ffce07"} rounded="full" />
                    <Heading size={"md"} fontWeight ml={{ base: "24px", xl: "32px" }} textShadow="dark-lg">
                        in weeks, not months
                    </Heading>
                </Flex>
                {
                    !token ? (
                        <Button
                            onClick={onOpen}
                            mt={"6"}
                            bgColor={"#ffce07"}
                            h={"55px"}
                            w={{ base: "120px", xl: "175px" }}
                            rounded={"full"}
                        >
                            Book now
                        </Button>
                    ) : (
                        <Button
                            mt={"6"}
                            bgColor={"#ffce07"}
                            h="55px"
                            w={{ base: "120px", xl: "175px" }}
                            rounded={"full"}
                        >
                            Book now
                        </Button>
                    )
                }
            </Box >
            <Box w={{ lg: "75%" }} mx="auto" mt={{ base: "32px", xl: "120px" }} >
                <Text textAlign={"center"} fontSize="xl" textColor={"#c4c4c4"}>
                    Complete Package
                </Text>
                <Heading fontSize={{ base: "2xl", xl: "3xl" }} mt={"8px"} textAlign="center" fontWeight={"extrabold"}>From product design to software continuous delivery</Heading>
                <Flex justifyContent={"center"}>
                    <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{ base: 2, md: 4, lg: 8, xl: 10 }} mt="32px" >
                        <Card borderColor={"gray.900"} height={{ xl: '200px' }} w={{ base: "170px", xl: "350px" }} px="12px" py="12px">
                            <Image src={WebsiteLogo} w={{ base: "40px", xl: "70px" }} />
                            <Flex alignItems={"center"} textColor={"#ffce07"} fontSize={{ base: "lg", xl: "xl" }} fontWeight={"semibold"} mt={{ base: "12px", xl: "24px" }}>
                                <Text mr={"10px"}>Website development</Text>
                                <MdArrowForward size={"25px"} />
                            </Flex>
                            <Text fontSize={{ base: "sm", xl: "md" }}>High-performance website to reach out more your potential customers</Text>
                        </Card>
                        <Card borderColor={"gray.900"} height={{ xl: '200px' }} w={{ base: "170px", xl: "350px" }} px="12px" py="12px">
                            <Image src={MobileLogo} w={{ base: "35px", xl: "45px" }} mb={{ base: "20px", xl: "24px" }} />
                            <Text mr={"10px"} alignItems={"center"} textColor={"#ffce07"} fontSize={{ base: "lg", xl: "xl" }} fontWeight={"semibold"}>Mobile apps development</Text>
                            <Text fontSize={{ base: "sm", xl: "md" }}>To accelerate your business process</Text>
                        </Card>
                        <Card borderColor={"gray.900"} height={{ xl: '200px' }} w={{ base: "170px", xl: "350px" }} px="12px" py="12px">
                            <Image src={DigitalLogo} w={{ base: "40px", xl: "60px" }} mb={{ base: "20px", xl: "24px" }} />
                            <Text mr={"10px"} alignItems={"center"} textColor={"#ffce07"} fontSize={{ base: "lg", xl: "xl" }} fontWeight={"semibold"}>Digital product design</Text>
                            <Text fontSize={{ base: "sm", xl: "md" }}>Complete digital product creations from UX prototyping to final UI designs</Text>
                        </Card>
                        <Card borderColor={"gray.900"} height={{ xl: '200px' }} w={{ base: "170px", xl: "350px" }} px="12px" py="12px">
                            <Image src={MaintenanceLogo} w={{ base: "40px", xl: "60px" }} mb={{ base: "20px", xl: "24px" }} />
                            <Text mr={"10px"} alignItems={"center"} textColor={"#ffce07"} fontSize={{ base: "lg", xl: "xl" }} fontWeight={"semibold"}>Maintenance</Text>
                            <Text fontSize={{ base: "sm", xl: "md" }}>Make sure your digital environment keep online and updated</Text>
                        </Card>
                        <Card borderColor={"gray.900"} height={{ xl: '200px' }} w={{ base: "170px", xl: "350px" }} px="12px" py="12px">
                            <Image src={CmsLogo} w={{ base: "35px", xl: "50px" }} mb={{ base: "20px", xl: "24px" }} />
                            <Text mr={"10px"} alignItems={"center"} textColor={"#ffce07"} fontSize={{ base: "lg", xl: "xl" }} fontWeight={"semibold"} mt="6px">CMS development</Text>
                            <Text fontSize={{ base: "sm", xl: "md" }}>You can update your website content yourself</Text>
                        </Card>
                        <Card borderColor={"gray.900"} height={{ xl: '200px' }} w={{ base: "170px", xl: "350px" }} px="12px" py="12px">
                            <Image src={PaymentLogo} w={{ base: "35px", xl: "60px" }} mb={{ base: "20px", xl: "24px" }} />
                            <Text mr={"10px"} alignItems={"center"} textColor={"#ffce07"} fontSize={{ base: "lg", xl: "xl" }} fontWeight={"semibold"}>Integrated payment gateway</Text>
                            <Text fontSize={{ base: "sm", xl: "md" }}>Simplify the payment system with just one step</Text>
                        </Card>
                    </SimpleGrid>
                </Flex>
            </Box>
            <Box w={{ lg: "75%" }} mx="auto" px={{ base: "16px", lg: "0px" }}>
                <Flex justifyContent={"center"} mt={{ base: "30px", lg: "56px" }}>
                    <SimpleGrid columns={{ base: 4, lg: 6 }} spacing={{ base: 10, lg: 16 }}>
                        <Image src={awsLogo} />
                        <Image src={cloudLogo} />
                        <Image src={aLogo} />
                        <Image src={cssLogo} />
                        <Image src={htmlLogo} />
                        <Image src={jsLogo} />
                        <Image src={phpLogo} />
                        <Image src={pythonLogo} />
                        <Image src={reactLogo} />
                        <Image src={diamondLogo} />
                        <Image src={monggoLogo} />
                        <Image src={mysqlLogo} />
                        <Image src={postgresqlLogo} />
                        <Image src={sqlserverLogo} />
                    </SimpleGrid>
                </Flex>
            </Box>


            {/* modal login */}

            <Modal isOpen={isOpen} onClose={onClose} size={{base: "xs"}} isCentered>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>Login Form</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type={"text"}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={"Email"}
                            />
                        </FormControl>
                        <FormControl mt={"16px"}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type={"password"}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder={"Password"}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            onClick={btnLogin}
                            bgColor={"#ffce07"}
                        >
                            Login
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box >
    );
}

export default CompletePackage;