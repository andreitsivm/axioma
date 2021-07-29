import {Fragment} from 'react'
import {Box,Heading,Text,Container} from '@chakra-ui/react'
import Head from 'next/head'



export default function Contacts() {
  return (
      <Fragment>
      <Head>
        <title>Contacts | Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      

        <Container>
          <Heading
            as="h1"
            variant="h1"
            color="basic.5"
            textAlign={{ base: "center", md: "left" }}
          >
            Contacts
          </Heading>
          <Text color="basic.5" textAlign={{ base: "center", md: "left" }}>
            At Covalent, we are on a mission to bring full transparency and
            visibility to assets across the entire Web3 ecosystem. We want you
            to be an extension of our team. As a Covalent Alchemist, you will
            act as a key leader in developing the Covalent ecosystem. We are
            dedicated to investing in your growth & development of all levels to
            help you succeed. Become a Covalent Alchemist Ambassador and help
            shape the data infrastructure layer of tomorrow.
          </Text>
        </Container>

      </Fragment>
  )
}