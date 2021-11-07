import React from 'react';
import { Flex } from '@chakra-ui/react';
import Link from 'components/link';

const Desktop = () => (
  <Flex
    as="nav"
    display={{
      base: 'none',
      lg: 'block',
    }}
    alignItems="center"
    ml="auto"
  >
    <Link variant="headerLink" href="/#technologies" mx={2}>
      TECHNOLOGIES
    </Link>
    <Link variant="headerLink" href="/#feedback" mx={2}>
      FEEDBACK
    </Link>
    <Link variant="headerLink" href="/#contact" mx={2}>
      LET’S TALK
    </Link>
  </Flex>
);
export default Desktop;
