import { Navigate, Outlet } from 'react-router-dom';
import { AuthStatus, useAuthStore } from '../../stores/auth/auth.store';

const PublicRoutes = () => {

    const isAuthenticated = useAuthStore(state => state.isAuthenticated);

    if (isAuthenticated === AuthStatus.auth) {
        return <Navigate to='/priv/table' />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default PublicRoutes;