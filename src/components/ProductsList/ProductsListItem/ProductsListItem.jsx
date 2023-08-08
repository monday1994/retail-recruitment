import {
    StyledProductDetails,
    StyledProductName,
    StyledProductPrice,
    StyledProductsListItemContainer
} from "./productsListItem.styles";
import {useCallback, useState} from "react";
import {Button} from "../../Button/Button";
import PropTypes from "prop-types";

export const ProductsListItem = ({ product, handleBuyClick }) => {
    const { id, title, purchaseAmount } = product;

    const [showBuyButton, setShowBuyButton] = useState(false);

    const onMouseEnter = useCallback(() => {
        setShowBuyButton(true);
    }, [id]);

    const onMouseLeave = useCallback(() => {
        setShowBuyButton(false);
    }, [id]);

    return <StyledProductsListItemContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >

        <StyledProductDetails>
            <StyledProductName>
                {title}
            </StyledProductName>
            <StyledProductPrice>
                {purchaseAmount}$
            </StyledProductPrice>
        </StyledProductDetails>

        {showBuyButton && <Button onClick={() => handleBuyClick(product)}>Buy</Button>}
    </StyledProductsListItemContainer>
}

ProductsListItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        purchaseAmount: PropTypes.number.isRequired,
    }).isRequired,
    handleBuyClick: PropTypes.func.isRequired,
}