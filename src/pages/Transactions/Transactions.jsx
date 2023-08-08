import {StyledPage} from "../../styles/index.styled";
import {TransactionsList} from "../../components/Transactions/TransactionsList";
import {LOGIN_ROUTE} from "../../config/constants";
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../redux/features/auth";
import {useNavigate} from "react-router-dom";

export const Transactions = () => {
    const navigate = useNavigate();

    //selectors
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if(!isLoggedIn) {
        navigate(LOGIN_ROUTE)
    } else {
        return <StyledPage data-testid={'transactions-page-test-id'}>
            <TransactionsList />
        </StyledPage>
    }
}