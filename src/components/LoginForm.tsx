import { Box, Button } from '@chakra-ui/react';
import { Form, Formik, FormikProps } from 'formik';
import React from 'react';
import { MyField } from './MyField';
import { object, string } from 'yup';

const validationSchema = object().shape({
  email: string().email('Некорректный E-mail').required('Введите E-mail'),
  password: string()
    .matches(
      // @ts-ignore: Unreachable code error
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})',
      'Слишком легкий пароль'
    )
    .required('Введите пароль'),
});

interface FormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  return (
    <Box width="full">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // await dispatch(authLogin(values.email, values.password, true));
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
            resetForm();
          }, 2000);
        }}
      >
        {(props: FormikProps<FormValues>) => (
          <Form>
            <MyField
              size="lg"
              label="Email adress:"
              name="email"
              type="email"
              placeholder="Enter your email adress"
            />
            <MyField
              size="lg"
              label="Password:"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <Button
              type="submit"
              w="full"
              mt="8"
              isLoading={props.isSubmitting}
              colorScheme="teal"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
