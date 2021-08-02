import { Fragment } from "react";
import { Box, Flex, Heading, Text, Container } from "@chakra-ui/react";
import Head from "next/head";
import Section from "components/section";
import Card from "components/benefit-card";
import Testimonials from "components/testimonials";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>AXIOMA MOBILE DEVELOPMENT</title>
        <meta
          name="description"
          content="AXIOMA — mobile development company"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section
        py="150px"
        bgGradient="radial-gradient(42.08% 89.72% at 46.94% 75.39%, #E73700 0%, #1A1A1A 100%);"
      >
        <Container>
          <Flex justify="center" align="center">
            <Heading
              color="basic.0"
              maxW="700px"
              textAlign={{ base: "center", md: "left" }}
              as="h1"
              variant="h1"
            >
              Quote - repeat or copy out (a group of words from a text)
            </Heading>
          </Flex>
        </Container>
      </Section>

      <Container id="technologies" py={{ base: "32px", md: "64px" }}>
        <Heading as="h2" variant="h1" color="basic.5">
          Technologies
        </Heading>
        <Text maxW="500px">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using content here, making it look like
          readable English.
        </Text>

        <Flex flexWrap="wrap" justify="space-between">
          <Card>Cloud/Back-end solutions</Card>
          <Card>API and integrations</Card>
          <Card>Mobile and web apps</Card>
          <Card>Content management</Card>
          <Card>BT/BLE/WiFi connectivity</Card>
          <Card>Security</Card>
        </Flex>
      </Container>

      <Section
        id="feedback"
        py="150px"
        bgGradient="radial-gradient(42.08% 89.72% at 46.94% 75.39%, #E73700 0%, #1A1A1A 100%);"
      >
        <Container>
          <Heading
            color="basic.0"
            maxW="700px"
            textAlign={{ base: "center", md: "left" }}
            as="h1"
            variant="h1"
          >
            Testimonials
          </Heading>
          <Box>
            <Testimonials />
          </Box>
        </Container>
      </Section>
    </Fragment>
  );
}
