// import { useAuth } from '../hooks/useAuth';

import { AuthStatus, useAuthStore } from '../stores/auth/auth.store';


const Check = () => {

    const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    const sender = useAuthStore(state => state.sender);

    return (
        <div>
            <h1 className='text-7xl text-accent'>
                {isAuthenticated === AuthStatus.auth ? 'Logueado' : 'No Logueado'}
            </h1>
            <pre className='max-w-3xl text-wrap break-all p-2 m-2'>
                {isAuthenticated === AuthStatus.auth && JSON.stringify(sender, null, 2)}
            </pre>
        </div>
    );
};

export default Check;