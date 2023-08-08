import * as yup from 'yup';
import {useFormik} from 'formik';

export const useLoginForm = (handleSubmit) => {

  const validationSchema = yup.object({
    email: yup
      .string()
      .min(5, 'Email cannot be shorter than 5 characters')
      .max(255, 'Email cannot be longer than 255 characters')
      .email('Email is invalid')
      .required('Email is required'),
    password: yup
      .string()
      .min(5, 'Password cannot be shorter than 5 characters')
      .max(255, 'Password cannot be longer than 255 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return {
    formik
  }
}
