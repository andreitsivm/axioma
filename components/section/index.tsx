import React, { FC, ReactNode } from 'react';
import {Box} from '@chakra-ui/react';

type Props = {
    children: ReactNode,
    [x:string]: any
  }

const Section:FC<Props> = ({children, ...rest}) => {
    return (
        <Box as="section" py={{base: '64px', md: '32px'}} {...rest}>
            {children}
        </Box>
    )
}

export default Section
