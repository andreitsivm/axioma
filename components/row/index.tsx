import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

export const Column = (props: any) => (
  <Box flexGrow={1} flexShrink={1} flexBasis={{ base: 'auto', md: '100%' }} order={0} {...props} />
);

export const FluidItem = (props: any) => (
  <Box
    grow={1}
    flexShrink={0}
    flexBasis="auto"
    order={0}
    // we can accept width prop with responsive styles
    width="100%"
    {...props}
  />
);

const Row = (props: any) => (
  <Flex
    width="100%"
    flexWrap="nowrap"
    flexDirection={{
      base: 'column',
      md: 'row',
    }}
    {...props}
  />
);

export default Row;
