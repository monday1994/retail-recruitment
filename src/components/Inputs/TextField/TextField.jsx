import React from 'react';
import {
  StyledErrorLabel,
  StyledInputLabel,
  StyledInput,
  StyledTextInputContainer
} from './textField.styles';
import {errorColor} from '../../../assets/styles/colors';
import PropTypes from "prop-types";

const TextField = (props) => {
  const { name, label, error, helperText, wrapperStyle = {}, testId, ...restProps } = props;

  const theme = error ? {
    color: errorColor,
    border: `1px solid ${errorColor}`
  } : {};


  return <StyledTextInputContainer style={{...wrapperStyle}}>
    {label && <StyledInputLabel htmlFor={name} theme={theme}>{label}</StyledInputLabel>}
    <StyledInput
      theme={theme}
      autoComplete="off"
      data-testid={testId}
      name={name}
      {...restProps}
    />
    {error && <StyledErrorLabel>{helperText}</StyledErrorLabel>}
  </StyledTextInputContainer>
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  wrapperStyle: PropTypes.object,
  testId: PropTypes.string,
}

export { TextField };
