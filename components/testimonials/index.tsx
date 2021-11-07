import React from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Flex, Heading } from '@chakra-ui/react';

SwiperCore.use([Pagination, Navigation]);

const Testimonials = () => {
  return (
    <Swiper
      pagination
      navigation
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <Flex w="100%" bg="basic.0" align="center" justify="center">
          <Heading>First</Heading>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex w="100%" bg="basic.0" align="center" justify="center">
          <Heading>Second</Heading>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex w="100%" bg="basic.0" align="center" justify="center">
          <Heading>Third</Heading>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex w="100%" bg="basic.0" align="center" justify="center">
          <Heading>Fourth</Heading>
        </Flex>
      </SwiperSlide>
    </Swiper>
  );
};

export default Testimonials;
