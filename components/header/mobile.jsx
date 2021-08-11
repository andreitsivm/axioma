import React, { Fragment } from 'react';
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import Link from 'components/link';
import { MdMenu } from 'react-icons/md';

const Mobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <Fragment>
            <Box
                width="32px"
                height="32px"
                bg="primary"
                borderRadius="small"
                d={{ base: 'flex', lg: 'none' }}
                p="8px"
                alignItems="center"
                justifyContent="center"
                onClick={onOpen}
                sx={{
                    cursor: 'pointer',
                }}
            >
                <Box as={MdMenu} color="basic.0" size="25" />
            </Box>

            <Drawer
                closeOnEsc
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>AXIOMA</DrawerHeader>

                    <DrawerBody>
                        <Link
                            href="/#technologies"
                            variant="mobileLink"
                            py={2}
                            mx={0}
                        >
                            TECHNOLOGIES
                        </Link>
                        <Link
                            href="/#feedback"
                            variant="mobileLink"
                            py={2}
                            mx={0}
                        >
                            FEEDBACK
                        </Link>
                        <Link
                            href="/#contact"
                            variant="mobileLink"
                            py={2}
                            mx={0}
                        >
                            LET’S TALK
                        </Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Fragment>
    );
};
export default Mobile;
