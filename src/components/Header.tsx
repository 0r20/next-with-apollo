import { Flex, Heading, Link as ChakraLink, Box } from '@chakra-ui/react';
import React from 'react';
import { DarkModeSwitch } from './DarkModeSwitch';
import Link from 'next/link';

export const Header = () => {
  return (
    <Box w="full" borderBottomWidth={1} boxShadow="lg">
      <Flex flexDirection="row" justifyContent="space-between" p="4">
        <Box>
          <Link href="/">
            <ChakraLink>
              <Heading size="md">Main page</Heading>
            </ChakraLink>
          </Link>
        </Box>
        <Flex>
          <Link href="/register">
            <ChakraLink>
              <Heading size="md" mr="5">
                Register
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
    </Box>
  );
};
