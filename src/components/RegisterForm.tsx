import { Box, Button } from '@chakra-ui/react';
import { Form, Formik, FormikProps } from 'formik';
import React from 'react';
import { MyField } from './MyField';
import { object, string, ref } from 'yup';

const validationSchema = object().shape({
  email: string().email('Некорректный E-mail').required('Введите E-mail'),
  firstName: string()
    .min(3, 'Слишком короткое имя')
    .max(15, 'Слишком длинное имя')
    .required('Введите имя'),
  lastName: string()
    .min(3, 'Слишком короткая фамилия')
    .max(15, 'Слишком длинная фамилия')
    .required('Введите фамилию'),
  password: string()
    .matches(
      // @ts-ignore: Unreachable code error
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})',
      'Слишком легкий пароль'
    )
    .required('Введите пароль'),
  confirmPassword: string()
    .required('Введите пароль')
    .oneOf([ref('password'), ''], 'Пароли должны совпадать'),
});

interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  return (
    <Box width="full">
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          confirmPassword: '',
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
              label="Email adress:"
              name="email"
              type="email"
              placeholder="Enter your email adress"
            />
            <MyField
              label="First name:"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
            />
            <MyField
              label="Last name"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
            />
            <MyField
              label="Password:"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <MyField
              label="Confirm password:"
              name="confirmPassword"
              type="password"
              placeholder="Enter your password"
            />
            <Button
              type="submit"
              w="full"
              mt="4"
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
