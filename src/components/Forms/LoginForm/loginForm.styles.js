import styled from 'styled-components';
import {shadowBox} from "../../../styles/index.styled";
import {mediaQuery} from "../../../assets/styles/sizes";

export const StyledLoginForm = styled.section`
  ${shadowBox};
  padding: 2em 1em 1em;
  width: 80%;
  
  ${mediaQuery.tablet} {
    width: 50%;
  }

  ${mediaQuery.laptop} {
    width: 35%;
  }

  ${mediaQuery.laptopL} {
    width: 25%;
  }
`

export const StyledLoginButtonsContainer = styled.section`
  display: flex;
  padding: 1em 0;
  flex-direction: column;
  
  > button {
    margin-top: 0.5em;
  }
`

