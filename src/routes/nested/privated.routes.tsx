import { Navigate, Outlet } from 'react-router-dom';
import { AuthStatus, useAuthStore } from '../../stores/auth/auth.store';

const PrivatedRoutes = () => {

    const isAuthenticated = useAuthStore(state => state.isAuthenticated);

    if (isAuthenticated === AuthStatus.unAuth) {
        return <Navigate to='/pub/login' />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default PrivatedRoutes;