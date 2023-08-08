import {StyledProductsList} from "./productsList.styles";
import {useFetchListHook} from "../../hooks/fetchListHook";
import {fetchProductsCall} from "../../api/productsCalls";
import {isNotEmptyArray, isNotEmptyObject} from "../../utils/utils";
import {ProductsListItem} from "./ProductsListItem/ProductsListItem";
import {CircleSpinner} from "../Spinner/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, updateUser} from "../../redux/features/auth";
import {useCallback, useState} from "react";
import {useSnackbar} from "notistack";
import {createNewTransaction} from "../../utils/helpers";
import {addNewTransaction} from "../../api/transactionsCalls";
import {handleError} from "../../errors/errors";

export const ProductsList = () => {
    const dispatch = useDispatch();
    //state
    const [isBuyRequestPending, setIsBuyRequestPending] = useState(false);

    //selectors
    const user = useSelector(selectUser);

    const {enqueueSnackbar} = useSnackbar();
    const { list: products, isRequestPending } = useFetchListHook(fetchProductsCall);

    const handleBuyClick = useCallback(async (product) => {
        if(isNotEmptyObject(user) && isNotEmptyObject(product)) {
            try {
                setIsBuyRequestPending(true);
                const newTransaction = createNewTransaction(product, user.id);
                await addNewTransaction(newTransaction);
                const userCopy = {...user};
                userCopy.promoPoints += newTransaction.promoPoints;

                dispatch(updateUser(userCopy));

                enqueueSnackbar('Product bought successfully', {
                    autoHideDuration: 2000,
                    variant: "success"
                });
            } catch (err) {
                handleError(err);
                enqueueSnackbar('Something went wrong while buying product, try again later.', {
                    autoHideDuration: 2000,
                    variant: "error"
                });
            } finally {
                setIsBuyRequestPending(false);
            }
        } else {
            enqueueSnackbar('You have to be logged in to buy products', {
                autoHideDuration: 2000,
                variant: "info"
            });
        }
    }, [user]);

    if(isRequestPending || isBuyRequestPending) {
        return <StyledProductsList style={{marginTop: '3rem'}}>
            <CircleSpinner />
        </StyledProductsList>
    }

    if(!isNotEmptyArray(products)) {
        return <StyledProductsList>
            <h1>No products available</h1>
        </StyledProductsList>
    }

    return <StyledProductsList>
        {products.map(product => (
            <ProductsListItem
                key={product.id}
                product={product}
                handleBuyClick={handleBuyClick}
            />
        ))}
    </StyledProductsList>
}