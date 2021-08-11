import React, { Fragment } from 'react';
import { Box, Heading, Text, Container } from '@chakra-ui/react';
import {
    FaGithub,
    FaTelegramPlane,
    FaLinkedinIn,
    FaFacebook,
} from 'react-icons/fa';
import Link from 'components/link';
import ContactForm from 'components/contact-form';
import Row, { Column } from 'components/row';

const Footer = (props) => {
    return (
        <Fragment>
            <Box
                as="footer"
                bg="basic.5"
                py={{ base: '48px', md: '210px' }}
                {...props}
                sx={{
                    w: '100%',
                }}
            >
                <Container>
                    <Row>
                        <Column>
                            <Heading
                                color="basic.0"
                                maxW="700px"
                                textAlign={{ base: 'center', md: 'left' }}
                                as="h1"
                                variant="h1"
                            >
                                Let`s Talk
                            </Heading>
                            <Text color="basic.0">
                                It is a long established fact that a reader will
                                be distracted by the readable content of
                            </Text>
                            <Box id="contact" d="flex" my="16px">
                                <Link
                                    mr={3}
                                    isExternal
                                    href="https://t.me/axioma"
                                >
                                    <Box
                                        as={FaTelegramPlane}
                                        color="#fff"
                                        size="24"
                                    />
                                </Link>
                                <Link
                                    mr={3}
                                    isExternal
                                    href="https://facebook.com/axioma"
                                >
                                    <Box
                                        as={FaFacebook}
                                        color="basic.0"
                                        size="24"
                                    />
                                </Link>
                                <Link
                                    mr={3}
                                    isExternal
                                    href="https://github.com/axioma"
                                >
                                    <Box as={FaGithub} color="#fff" size="24" />
                                </Link>
                                <Link
                                    isExternal
                                    href="https://www.linkedin.com/"
                                >
                                    <Box
                                        as={FaLinkedinIn}
                                        color="#fff"
                                        size="24"
                                    />
                                </Link>
                            </Box>
                        </Column>
                        <Column display="flex" flexDirection="column">
                            <ContactForm />
                        </Column>
                    </Row>
                </Container>
            </Box>
            <Box bg="basic.5" width="100%">
                <Text
                    color="basic.0"
                    textAlign="center"
                    variant="caption"
                    fontWeight="bold"
                >
                    &copy; {new Date().getFullYear()}
                </Text>
            </Box>
        </Fragment>
    );
};

export default Footer;
