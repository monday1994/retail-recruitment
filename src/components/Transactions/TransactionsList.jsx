import {useFetchListHook} from "../../hooks/fetchListHook";
import {isNotEmptyArray} from "../../utils/utils";
import {CircleSpinner} from "../Spinner/Spinner";
import {StyledTransactionsList} from "./transactionsList.styles";
import {fetchUserTransactionsCall} from "../../api/transactionsCalls";
import {useSelector} from "react-redux";
import {selectUser} from "../../redux/features/auth";
import {TransactionsListItem} from "./TransactionsListItem/TransactionsListItem";

export const TransactionsList = () => {
    // selectors
    const user = useSelector(selectUser);

    const { list: transactions, isRequestPending } = useFetchListHook(() => fetchUserTransactionsCall(user?.id));

    if(isRequestPending) {
        return <StyledTransactionsList style={{marginTop: '3rem'}}>
            <CircleSpinner />
        </StyledTransactionsList>
    }

    if(!isNotEmptyArray(transactions)) {
        return <StyledTransactionsList>
            <h1>No transactions to show</h1>
        </StyledTransactionsList>
    }

    return <StyledTransactionsList>
        {transactions.map(({id, title, purchaseAmount, promoPoints, date }) => (
            <TransactionsListItem
                key={id}
                title={title}
                purchaseAmount={purchaseAmount}
                promoPoints={promoPoints}
                date={date?.toLocaleString()}
            />
        ))}
    </StyledTransactionsList>
}