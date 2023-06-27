import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import caro1 from "../asets/caro1.svg";
import caro2 from "../asets/caro2.svg";
import caro3 from "../asets/caro3.svg";
import caro4 from "../asets/caro4.svg";
import caro5 from "../asets/caro5.svg";



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";


import { Pagination } from "swiper";

function Carousel() {
  return (
    <Box fontSize={"5xl"} w="75%" mx="auto" mt={{ base: "-20", xl: "24px" }}>
      <Flex justifyContent={"center"}>
        <Swiper
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 }
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={caro1} style={{ paddingBottom: "30px" }} />
          </SwiperSlide>
          <SwiperSlide><img src={caro2} /></SwiperSlide>
          <SwiperSlide><img src={caro3} /></SwiperSlide>
          <SwiperSlide><img src={caro4} /></SwiperSlide>
          <SwiperSlide><img src={caro5} /></SwiperSlide>
          <SwiperSlide><img src={caro1} /></SwiperSlide>
          <SwiperSlide><img src={caro2} /></SwiperSlide>
          <SwiperSlide><img src={caro3} /></SwiperSlide>
          <SwiperSlide><img src={caro4} /></SwiperSlide>
          <SwiperSlide><img src={caro5} /></SwiperSlide>
        </Swiper>
      </Flex>
    </Box>

  )
}

export default Carousel

