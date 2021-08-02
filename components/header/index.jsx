import React, { Fragment, useRef } from "react";
import { Flex, Box, Text,Container } from "@chakra-ui/react";
import Link from 'components/link'
import Image from 'next/image'

import useOnScreen from "hooks/useOnScreen";
import Desktop from "./desktop";
import Mobile from "./mobile";
import logo from "images/logo--white.svg";

const scrollStyles = {
  background: "basic.5",
};

const Header = (props) => {
  const refBox = useRef(null);
  const isOnScreen = useOnScreen(refBox);

  return (
    <Fragment>
      <Box ref={refBox} height="1px" bg="secondary.1" {...props} />
      <Box
        as="header"
        background="secondary.1"
        height="84px"
        width="100%"
        display="flex"
        alignItems="center"
        sx={{
          position: "fixed",
          boxShadow: "small",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 4,
          ...(!isOnScreen && scrollStyles),
        }}
      >
        <Container
          flexGrow={1}
          as={Flex}
          justifyContent="space-between"
          alignItems="center"
          p={3}
        >
          <Box as={Link} href="/" sx={{
                cursor:'pointer'
              }}
          >
            <Image
              width='130px'
              height='48px'
              src={logo}
              mr={2}
              alt="logo"

            />
          </Box>
          <Desktop />
          <Mobile />
        </Container>
      </Box>
    </Fragment>
  );
};

export default Header;
