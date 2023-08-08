import styled from "styled-components";
import {cardBoxStyle} from "../../../styles/index.styled";
import {secondaryColor} from "../../../assets/styles/colors";
import {mediaQuery} from "../../../assets/styles/sizes";

export const StyledTransactionsListItemContainer = styled.li`
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
`

export const StyledTransactionDetails = styled.div`
    width: 100%;
`


export const StyledTransactionName = styled.p`
  padding: 0.5em;
  color: ${secondaryColor};
`

export const StyledTransactionProperty = styled.p`
  padding: 0.5em;
  font-size: 0.7em;
`