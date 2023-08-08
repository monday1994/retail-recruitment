import React, {
  memo, useState
} from 'react';
import {TextField} from '../../Inputs/TextField/TextField';
import {
  StyledLoginForm,
  StyledLoginButtonsContainer,
} from './loginForm.styles';
import {useLoginForm} from './hooks';
import {
  Button,
} from '../../Button/Button';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useSnackbar} from "notistack";
import {loginCall} from "../../../api/authCalls";
import {login} from "../../../redux/features/auth";
import {HOME_ROUTE} from "../../../config/constants";
import {CircleSpinner} from "../../Spinner/Spinner";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const [isRequestPending, setIsRequestPending] = useState(false);

  const handleSubmit = async (authData) => {
    try {
      setIsRequestPending(true);

      const loggedInUser = await loginCall(authData);
      dispatch(login(loggedInUser));
      navigate(HOME_ROUTE);
    } catch (err) {
      enqueueSnackbar('Wrong email or password', {
        autoHideDuration: 2000,
        variant: 'error'
      });
    } finally {
      setIsRequestPending(false);
    }
  }

  const {formik} = useLoginForm(handleSubmit);

  return <StyledLoginForm data-testid={'login-form-test-id'}>
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id='email'
        name='email'
        type='text'
        placeholder={'email'}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        wrapperStyle={{margin: '0.5em 0'}}
        testId={'email-input-test-id'}
      />
      <TextField
        id='password'
        name='password'
        type='password'
        placeholder={'password'}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        testId={'password-input-test-id'}
      />
      <StyledLoginButtonsContainer>
        {isRequestPending && <CircleSpinner />}
        {!isRequestPending && <Button type='submit'>Log in</Button>}
      </StyledLoginButtonsContainer>
    </form>
  </StyledLoginForm>
}

export default memo(LoginForm);
