import {
  Flex,
  Heading,
  Link as ChakraLink,
  Box,
  Container,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { DarkModeSwitch } from './DarkModeSwitch';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <Box w="full" borderBottomWidth={1} boxShadow="lg">
      <Box bg="#000" py="2">
        <Container maxW="xl" height="full">
          <Flex justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
              <Image src="/logo.svg" alt="Logo" width={29} height={29} />
              <Text ml="2" color="white">
                S - Superiority
              </Text>
            </Flex>
            <Text color="white">All rights reserved &#10004;</Text>
          </Flex>
        </Container>
      </Box>
      <Container maxW="xl" height="full">
        <Flex flexDirection="row" justifyContent="space-between" py="5">
          <Box>
            <Link href="/">
              <ChakraLink>
                <Heading size="md">Home</Heading>
              </ChakraLink>
            </Link>
          </Box>
          <Flex>
            <Link href="/register">
              <ChakraLink>
                <Heading size="md" mr="5">
                  Sign up
                </Heading>
              </ChakraLink>
            </Link>
            <Link href="/login">
              <ChakraLink>
                <Heading size="md">Log In</Heading>
              </ChakraLink>
            </Link>
            <Box ml="5">
              <DarkModeSwitch />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
