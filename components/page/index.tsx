import React from 'react';
import {Box} from '@chakra-ui/react';
import Header from 'components/header';
import Footer from 'components/footer';

const Page:React.FC = ({children}) => {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Header/>
            <Box as="main"
                 sx={{
                     flex: '1 0 auto',
                     marginTop: '83px',
                     width: '100%',
                 }}>
                {children}
            </Box>
            <Footer />
        </Box>
    )
}

export default Page;
