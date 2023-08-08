import 'the-new-css-reset/css/reset.css'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import {Navigation} from "../../components/Navigation/Navigation";
import {BaseStyle} from "./applicationDrawer.styles";
import {Home} from "../Home/Home";
import {HOME_ROUTE, LOGIN_ROUTE, TRANSACTIONS_ROUTE} from "../../config/constants";
import {Login} from "../Login/Login";
import {NotFound} from "../NotFound/NotFound";
import { store, persistor } from '../../redux/store';
import {Transactions} from "../Transactions/Transactions";
import {SnackbarProvider} from "notistack";

const ApplicationDrawer = () => {

    return (
        <Router>
            <BaseStyle />
            <main>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <SnackbarProvider
                            maxSnack={10}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <Navigation />
                            <Routes>
                                <Route path={HOME_ROUTE} element={<Home />} />
                                <Route path={LOGIN_ROUTE} element={<Login />} />
                                <Route path={TRANSACTIONS_ROUTE} element={<Transactions />} />

                                <Route
                                    path='*'
                                    element={<NotFound />}
                                />
                            </Routes>
                        </SnackbarProvider>
                    </PersistGate>
                </Provider>
            </main>
        </Router>
    );
};

export { ApplicationDrawer };
