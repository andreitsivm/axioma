import { FC, Fragment, useRef } from 'react';
import { Flex, Box, Container } from '@chakra-ui/react';
import Link from 'components/link';
import Image from 'next/image';

import Desktop from './desktop';
import Mobile from './mobile';
import logo from 'images/logo--white.svg';

const Header: FC = () => {
  return (
    <Fragment>
      <Box
        as="header"
        background="basic.5"
        height="84px"
        width="100%"
        display="flex"
        alignItems="center"
        sx={{
          position: 'fixed',
          boxShadow: 'small',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 4,
        }}
      >
        <Container flexGrow={1} as={Flex} justifyContent="space-between" alignItems="center" p={3}>
          <Box
            as={Link}
            href="/"
            onClick={() => window.scroll(0, 0)}
            sx={{
              cursor: 'pointer',
            }}
          >
            <Image width="130px" height="48px" src={logo} alt="logo" />
          </Box>
          <Desktop />
          <Mobile />
        </Container>
      </Box>
    </Fragment>
  );
};

export default Header;
