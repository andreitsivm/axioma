import React from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Flex, Heading, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import moor from 'images/moor.png';

SwiperCore.use([Pagination, Navigation]);

const Testimonials = () => {
  return (
    <Swiper
      pagination
      navigation
      spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <Flex w="100%" bg="basic.0" align="center" justify="center">
          <Flex p="24px">
            <Image src={moor} />
            <Box>
              <Heading>John Moor</Heading>
              <Text>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex w="100%" bg="basic.0" align="center" justify="center">
          <Flex p="24px">
            <Image src={moor} />
            <Box>
              <Heading>John Moor</Heading>
              <Text>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex w="100%" bg="basic.0" align="center" justify="center">
          <Flex p="24px">
            <Image src={moor} />
            <Box>
              <Heading>John Moor</Heading>
              <Text>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex w="100%" bg="basic.0" align="center" justify="center">
          <Flex p="24px">
            <Image src={moor} />
            <Box>
              <Heading>John Moor</Heading>
              <Text>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </SwiperSlide>
    </Swiper>
  );
};

export default Testimonials;
