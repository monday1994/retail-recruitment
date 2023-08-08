import styled from "styled-components";
import {secondaryColor, primaryColor} from "../../assets/styles/colors";
import {mediaQuery} from "../../assets/styles/sizes";

export const StyledNavigationContainer = styled.nav`
  position: fixed;
  z-index: 101;
  width: 100%;
`

export const StyledTopNavigation = styled.section`
  min-height: 2rem;
  background: ${secondaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.5rem;

  ${mediaQuery.tablet} {
    font-size: 1.8rem;
  }

  ${mediaQuery.laptop} {
    font-size: 2.3rem;
  }

  ${mediaQuery.laptopL} {
    font-size: 3rem;
  }
`

export const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 1em;
`

export const StyledLogo = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 5px;
  
  &:hover {
    cursor: pointer;
  }
`

export const StyledNavigationLinksContainer = styled.ul`
  display: flex;
  
`

export const StyledNavigationLink = styled.li`
  margin-right: 1em;
  
  &:hover {
    cursor: pointer;
    color: ${primaryColor}
  }
`

export const StyledLoggedInUser = styled.div`
  margin-right: 1em;
  display: flex;
  flex-direction: column;
`

export const StyledUserName = styled.span`
  color: ${primaryColor};
`

export const StyledUserPoints = styled.span`
  font-size: 0.5em;
  padding: 0.5em;
  font-weight: 700;
`
