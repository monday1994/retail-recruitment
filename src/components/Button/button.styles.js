import styled from "styled-components";
import {textColor, secondaryColor} from "../../assets/styles/colors";

export const StyledButton = styled.button`
  padding: 0.5em 1em;
  font-size: 0.7em;
  border-radius: 5px;
  font-weight: 500;
  color: ${textColor};
  background-color: ${secondaryColor};
  text-align: center;
  text-transform: uppercase;
  
  &:hover {
    background-color: ${textColor};
    color: ${secondaryColor};
    cursor: pointer;
  };
  
  &:focus {
    box-shadow: 0 0 0 0.2em ${secondaryColor};
  };
`