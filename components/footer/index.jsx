import React from "react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";
import Image from 'next/image'
import {
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaReddit,
} from "react-icons/fa";
import Link from "components/link";
import Row, { Column } from "components/row";
import logo from "images/logo--white.svg";

const Footer = (props) => {

  return (
    <Box as="footer" bg="basic.5" py={5} {...props} sx={{
      w:"100%"
    }}>
      <Container>
        <Row>
          <Column>
            <Image width="160px" height="60px" src={logo} alt="logo" />
            <Box d="flex" my="16px">
              <Link mr={3} isExternal href="https://t.me/CovalentHQ">
                <Box as={FaTelegramPlane} color="#fff" size="24" />
              </Link>
              <Link
                mr={3}
                isExternal
                href="https://discord.com/invite/fgZPpq69Dd"
              >
                <Box as={FaDiscord} color="basic.0" size="24" />
              </Link>
              <Link mr={3} isExternal href="https://twitter.com/covalent_hq">
                <Box as={FaTwitter} color="#fff" size="24" />
              </Link>
              <Link isExternal href="https://www.reddit.com/r/CovalentHQ/">
                <Box as={FaReddit} color="#fff" size="24" />
              </Link>
            </Box>
          </Column>
          <Column>
            <Heading as="h3" variant="h3" color="basic.0" mb={3}>
              Community
            </Heading>
            <Link
              variant="footerLink"
              isExternal
              href="https://www.covalenthq.com/ambassador/"
            >
              Ambassador program
            </Link>
            <Link
              variant="footerLink"
              isExternal
              href="https://www.youtube.com/channel/UCGn-T9qPiXAx490Wr6WPbOw"
            >
              YouTube
            </Link>
            <Link
              variant="footerLink"
              isExternal
              href="https://medium.com/covalent-hq"
            >
              Medium
            </Link>
            <Link
              variant="footerLink"
              isExternal
              href="https://www.notion.so/The-Covalent-Alchemist-Laboratory-d8f9d300e9ba4982840b84342090cfed"
            >
              Notion
            </Link>
          </Column>
          <Column>
            <Heading as="h3" variant="h3" color="basic.0" mb={3}>
              Development
            </Heading>
            <Link
              variant="footerLink"
              isExternal
              href="https://www.covalenthq.com/docs/api/#overview"
            >
              Covalent API
            </Link>
            <Link
              variant="footerLink"
              isExternal
              href="https://www.covalenthq.com/docs/"
            >
              Documentation
            </Link>
          </Column>
        </Row>
        <Box
          my={5}
          sx={{
            height: "3px",
            bg: "primary",
            width: "100%",
          }}
        />
      </Container>
      <Container>
        <Text textAlign="center" variant="caption">
          &copy; 2021
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
