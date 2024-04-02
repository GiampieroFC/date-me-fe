import { Route, Routes, useLocation } from "react-router-dom";
import RegisterPage from '../pages/Register.page';
import LoginPage from '../pages/Login.page';
import ListProposalsPage from '../pages/ListProposals.page';
import RecipientPage from '../pages/Recipient.page';
import CreateProposalPage from '../pages/CreateProposal.page';
import Layout from '../layout/Layout';
import Check from '../pages/Check';
import PrivatedRoutes from './nested/privated.routes';
import PublicRoutes from './nested/public.routes';
import { AuthStatus, useAuthStore } from '../stores/auth/auth.store';
import { AuthServices } from '../services/auth.services';

const AppMainRoute = () => {
    console.log('AppMainRoute');

    const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    const setAuthenticated = useAuthStore(state => state.setAuthenticated);

    const location = useLocation();

    if (location.pathname.startsWith('/recipient')) {
        return (
            <Routes>
                <Route path='/recipient/:id' element={<RecipientPage />} />
            </Routes>
        );
    }
    // const _ = useAuthStore(state => state.);

    if (isAuthenticated === AuthStatus.pending) {

        (async () => {
            const response = await AuthServices.check();
            console.log("Check", response);
            if (response.ok) {
                return setAuthenticated(AuthStatus.auth, response?.sender);
            }
            setAuthenticated(AuthStatus.unAuth);
        })();

        return (
            <h1 className='text-7xl text-accent'>
                Cargando...
            </h1>
        );
    }



    return (
        <Layout>
            <Routes>
                <Route path='/recipient/:id' element={<RecipientPage />} />

                <Route index element={<Check />} />

                <Route path='/priv' element={<PrivatedRoutes />}>
                    <Route path='/priv/table' element={<ListProposalsPage />} />
                    <Route path='/priv/create' element={<CreateProposalPage />} />
                </Route>

                <Route path='/pub' element={<PublicRoutes />}>
                    <Route path='/pub/login' element={<LoginPage />} />
                    <Route path='/pub/register' element={<RegisterPage />} />
                </Route>

            </Routes>
        </Layout>
    );
};

export default AppMainRoute;