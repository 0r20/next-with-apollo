import { Text, Box, Flex, Heading, Link as ChakraLink } from '@chakra-ui/react';
import { LoginForm } from '../components/LoginForm';
import Link from 'next/link';

const Login = () => (
  <Flex
    minWidth="full"
    alignItems="center"
    justifyContent="center"
    height="full"
  >
    <Box width="500px" borderWidth={1} boxShadow="xl" p="4" borderRadius={6}>
      <Heading textAlign="center" size="md" py="1">
        Login
      </Heading>
      <Flex justifyContent="center">
        <Link href="/register">
          <ChakraLink fontSize="xs" mt="2" textAlign="center">
            <Text color="#1983ff">or create account now</Text>
          </ChakraLink>
        </Link>
      </Flex>
      <LoginForm />
    </Box>
  </Flex>
);

export default Login;
