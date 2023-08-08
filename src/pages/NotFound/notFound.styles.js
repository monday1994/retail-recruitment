import styled from "styled-components";

export const StyledNotFoundHeader = styled.h1`
  font-size: 4em;
  font-weight: 500;
  text-align: center;
`

export const StyledBackLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const StyledBackLink = styled.a`
  margin-top: 2em;
  color: gray;
  font-size: 2em;
  font-weight: 300;
  text-align: center;
  
  &:hover {
    cursor: pointer;
    color: white;
  }
`
