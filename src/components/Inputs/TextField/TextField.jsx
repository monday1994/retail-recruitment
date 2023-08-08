import React from 'react';
import {
  ErrorLabel_S,
  InputLabel_S,
  Input_S,
  TextInputContainer_S
} from './textField.styles';
import {errorColor} from '../../../assets/styles/colors';
import PropTypes from "prop-types";

const TextField = (props) => {
  const { name, label, error, helperText, wrapperStyle = {}, testId, ...restProps } = props;

  const theme = error ? {
    color: errorColor,
    border: `1px solid ${errorColor}`
  } : {};


  return <TextInputContainer_S style={{...wrapperStyle}}>
    {label && <InputLabel_S htmlFor={name} theme={theme}>{label}</InputLabel_S>}
    <Input_S
      theme={theme}
      autoComplete="off"
      data-testid={testId}
      name={name}
      {...restProps}
    />
    {error && <ErrorLabel_S>{helperText}</ErrorLabel_S>}
  </TextInputContainer_S>
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
