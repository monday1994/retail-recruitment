import {StyledPage} from "../../styles/index.styled";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import {StyledLoginFormContainer} from "./login.styles";

export const Login = () => {
    return <StyledPage data-testid={'login-page-test-id'}>

        <StyledLoginFormContainer>
            <LoginForm />
        </StyledLoginFormContainer>

    </StyledPage>
}