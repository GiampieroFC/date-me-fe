import { RiMenu3Fill } from '@remixicon/react';
import ThemeToggle from '../theme-toggle/ThemeToggle';
import { Link, NavLink } from 'react-router-dom';
import { AuthStatus, useAuthStore } from '../../stores/auth/auth.store';
import { logoutSender } from '../../api/sender/logout.sender';
// import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {

  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const setAuthenticated = useAuthStore(state => state.setAuthenticated);

  const logout = async () => {
    const response = await logoutSender();
    console.log(response);
    setAuthenticated(AuthStatus.unAuth, undefined);
  };

  return (
    <div className="navbar bg-base-100 shadow rounded z-10">
      {/* START NAVBAT */}
      <div className='navbar-start'>
        <Link to='/' className="btn btn-ghost text-xl italic">
          No digas no
        </Link>
      </div>
      {/* CENTER NAVBAR */}
      <div className='navbar-center'>
        <ThemeToggle />
      </div>
      {/* END NAVBAR big screen */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to='/'>Home</NavLink></li>
          {(isAuthenticated === AuthStatus.auth)
            && <li>
              <details>
                <summary >Dashboard</summary>
                <ul className="p-2">
                  <li><NavLink to='/priv/table'>Mensajes enviados</NavLink></li>
                  <li><NavLink to='/priv/create'>Crear nuevo mensaje</NavLink></li>
                </ul>
              </details>
            </li>}
          {(isAuthenticated === AuthStatus.auth)
            ? <li><a onClick={logout}>Logout</a></li>
            : <li><Link to='/pub/login'>Login</Link></li>
          }
        </ul>
      </div>
      {/* END NAVBAR small screen */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <RiMenu3Fill />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to='/'>Home</NavLink></li>
            {(isAuthenticated === AuthStatus.auth)
              && <li>
                <details>
                  <summary>Dashboard</summary>
                  <ul className="p-2">
                    <li><NavLink to='/priv/table'>Mensajes enviados</NavLink></li>
                    <li><NavLink to='/priv/create'>Crear nuevo mensaje</NavLink></li>
                  </ul>
                </details>
              </li>}
            {(isAuthenticated === AuthStatus.auth)
              ? <li><a onClick={logout}>Logout</a></li>
              : <li><Link to='/pub/login'>Login</Link></li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
