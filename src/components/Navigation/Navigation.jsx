import {
    StyledLoggedInUser,
    StyledLogo,
    StyledLogoContainer,
    StyledNavigationContainer,
    StyledNavigationLink,
    StyledNavigationLinksContainer,
    StyledTopNavigation, StyledUserName, StyledUserPoints
} from "./navigation.styles";
import logo from '../../assets/images/logo.jpeg';
import {useLocation, useNavigate} from "react-router";
import {HOME_ROUTE, LOGIN_ROUTE, TRANSACTIONS_ROUTE} from "../../config/constants";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectIsLoggedIn, selectUser} from "../../redux/features/auth";
import {textColor} from "../../assets/styles/colors";

export const Navigation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const actualPath = location.pathname;

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const loggedUser = useSelector(selectUser);

    const handleLogOut = () => {
        dispatch(logout());
        navigate(HOME_ROUTE);
    };

    return <StyledNavigationContainer>

        <StyledTopNavigation>
            <StyledLogoContainer>
                <StyledLogo src={logo} onClick={() => navigate(HOME_ROUTE)} data-testid={'logo-test-id'}/>
            </StyledLogoContainer>

            <StyledNavigationLinksContainer>

                <StyledNavigationLink style={{ color: actualPath === HOME_ROUTE ? 'white' : textColor }}>
                    <Link to={HOME_ROUTE}>Products</Link>
                </StyledNavigationLink>

                {isLoggedIn && <StyledNavigationLink style={{ color: actualPath === TRANSACTIONS_ROUTE ? 'white' : textColor }}>
                    <Link to={TRANSACTIONS_ROUTE}>My Purchases</Link>
                </StyledNavigationLink>}

            </StyledNavigationLinksContainer>

            <StyledNavigationLinksContainer>

                {!isLoggedIn && <StyledNavigationLink style={{ color: actualPath === LOGIN_ROUTE ? 'white' : textColor }}>
                    <Link to={LOGIN_ROUTE}>Login</Link>
                </StyledNavigationLink>}

                {isLoggedIn  && <>
                    <StyledLoggedInUser>
                        <StyledUserName>
                            {loggedUser?.name}
                        </StyledUserName>
                        <StyledUserPoints>
                            {loggedUser?.promoPoints} total points
                        </StyledUserPoints>
                    </StyledLoggedInUser>
                    <StyledNavigationLink style={{alignSelf: 'center'}}>
                        <span onClick={handleLogOut}>Log Out</span>
                    </StyledNavigationLink>
                </>}

            </StyledNavigationLinksContainer>

        </StyledTopNavigation>

    </StyledNavigationContainer>
}