import {
    StyledTransactionDetails,
    StyledTransactionName, StyledTransactionProperty,
    StyledTransactionsListItemContainer
} from "./transactionsListItem.styles";
import PropTypes from "prop-types";
import {formatDate} from "../../../utils/utils";

export const TransactionsListItem = ({ title, purchaseAmount, promoPoints, date }) => {
    return (<StyledTransactionsListItemContainer>

        <StyledTransactionDetails>

            <StyledTransactionName>
                {title}
            </StyledTransactionName>

            <StyledTransactionProperty>
                {purchaseAmount}$
            </StyledTransactionProperty>

            {promoPoints > 0 && <StyledTransactionProperty>
                {promoPoints} earned points
            </StyledTransactionProperty>}

            {date && <StyledTransactionProperty>
               {formatDate(date)}
            </StyledTransactionProperty>}

        </StyledTransactionDetails>

    </StyledTransactionsListItemContainer>)
}

TransactionsListItem.propTypes = {
    title: PropTypes.string.isRequired,
    purchaseAmount: PropTypes.number.isRequired,
    promoPoints: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
}