import React from 'react';
import {Box} from '@chakra-ui/react'

const Section = ({children, ...rest}) => {
    return (
        <Box as="section" py={{base: '64px', md: '32px'}} {...rest}>
            {children}
        </Box>
    )
}

export default Section
