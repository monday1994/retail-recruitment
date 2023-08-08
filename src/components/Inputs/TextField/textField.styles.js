import styled from 'styled-components';
import {
  errorColor,
  inputsBackgroundColor
} from '../../../assets/styles/colors';

export const StyledTextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.7em;  

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px ${inputsBackgroundColor} inset;
    -webkit-text-fill-color: black;
  }
`

export const StyledInput = styled.input`
  border-radius: 5px;
  padding: 0.5em 1.5em;
  width: 100%;
  margin: 0.4em 0;
  background-color: white;
  
  color: ${props => props.theme.color || 'black'};
  border: ${props => props.theme.border || ''};
  
  &:disabled {
    color: gray;
    background-color: lightgray;
  }
  
  &::placeholder {
    color: gray;
  }
`

export const StyledInputLabel = styled.label`
  color: ${props => props.theme.color || inputsBackgroundColor};
`

export const StyledErrorLabel = styled.label`
  color: ${errorColor};
  font-size: 0.9em;
`
