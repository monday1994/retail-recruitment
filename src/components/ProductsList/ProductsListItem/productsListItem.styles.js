import styled from "styled-components";
import {cardBoxStyle} from "../../../styles/index.styled";
import {secondaryColor, ternaryColor} from "../../../assets/styles/colors";
import {mediaQuery} from "../../../assets/styles/sizes";

export const StyledProductsListItemContainer = styled.li`
  ${cardBoxStyle};
  padding: 1em;
  display: flex;
  margin: 0.5em 0;
  min-width: 100%;

  ${mediaQuery.tablet} {
    min-width: 50%;
  }

  ${mediaQuery.laptop} {
    min-width: 35%;
  }

  ${mediaQuery.laptopL} {
    min-width: 30%;
  }
  
  &:hover {
    cursor: pointer;
    background: ${ternaryColor};
    color: white;
  }
`

export const StyledProductDetails = styled.div`
    width: 100%;
`

export const StyledProductName = styled.p`
  padding: 0.5em;
  color: ${secondaryColor};
`

export const StyledProductPrice = styled.p`
  padding: 0.5em;
  font-size: 0.7em;
`