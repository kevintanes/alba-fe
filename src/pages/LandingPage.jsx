import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import CompletePackage from '../components/CompletePackage';
import Consult from '../components/Consult';
import Portofolio from '../components/Portofolio';
import Testimonial from '../components/Testimonial';
import BackgroundPic from "../asets/texutre.png"

function LandingPage() {
    return (
        <Box position={"relative"}>
            <Box w={"full"}>
                <Image src={BackgroundPic} w="full" position="absolute" zIndex={"-9999"} />
            </Box>
            <CompletePackage />
            <Banner />
            <Portofolio />
            <Testimonial />
            <Carousel />
            <Consult />
        </Box>
    );
}

export default LandingPage;