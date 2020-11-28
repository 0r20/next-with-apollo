import { Flex, Heading } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

const Index = () => {
  const { t } = useTranslation();

  return (
    <Flex
      minWidth="100vh"
      alignItems="center"
      justifyContent="center"
      height="80vh"
    >
      <Trans
        i18nKey="home:title"
        components={[
          <h1 className="title" />,
          <a href="https://nextjs.org">Next.js!</a>,
        ]}
      />
      <Heading textAlign="center">{t('Home page')}</Heading>
    </Flex>
  );
};

export default Index;
