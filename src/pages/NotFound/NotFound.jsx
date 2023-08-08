import {StyledPage} from "../../styles/index.styled";
import {StyledBackLink, StyledBackLinkContainer, StyledNotFoundHeader} from "./notFound.styles";

export const NotFound = () => (<StyledPage data-testid={'not-found-page-test-id'}>

    <StyledNotFoundHeader>Page does not exist</StyledNotFoundHeader>

    <StyledBackLinkContainer>
        <StyledBackLink href={'/'}>
            Click here to go to the main page...
        </StyledBackLink>
    </StyledBackLinkContainer>

</StyledPage>)