import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function Custom404() {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      push({ pathname: '/' }, undefined, {
        shallow: true,
      });
    }, 3000);
  }, []);

  return (
    <Flex justifyContent="center" alignItems="center" h="full" w="full">
      <Head>
        <title>404 ошибка</title>
      </Head>
      <Box>
        <Heading>Страница не найдена</Heading>
        <Text mt="5">Вы будете перенаправлены на главную страницу</Text>
      </Box>
    </Flex>
  );
}
