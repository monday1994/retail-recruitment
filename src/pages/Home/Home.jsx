import {StyledPage} from "../../styles/index.styled";
import {ProductsList} from "../../components/ProductsList/ProductsList";

export const Home = () => {
    return <StyledPage data-testid={'home-page-test-id'}>
        <ProductsList />
    </StyledPage>
}