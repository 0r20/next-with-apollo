import { Text, Box, Flex, Heading, Link as ChakraLink } from '@chakra-ui/react';
import { RegisterForm } from '../components/RegisterForm';
import Link from 'next/link';

const Register = () => (
  <Flex
    minWidth="full"
    alignItems="center"
    justifyContent="center"
    height="full"
  >
    <Box width="500px" borderWidth={1} boxShadow="xl" p="4" borderRadius={6}>
      <Heading textAlign="center" size="md" py="1">
        Register your account!
      </Heading>
      <Flex justifyContent="center">
        <Link href="/login">
          <ChakraLink fontSize="xs" mt="2" textAlign="center">
            <Text color="teal.500">or Login now</Text>
          </ChakraLink>
        </Link>
      </Flex>
      <RegisterForm />
    </Box>
  </Flex>
);

export default Register;
