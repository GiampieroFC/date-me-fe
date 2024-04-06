import { useForm } from 'react-hook-form';
// import { RiGoogleFill, RiFacebookFill, RiAppleFill } from "@remixicon/react";
import { Link } from 'react-router-dom';
import { AuthServices } from '../services/auth.services';
import { AuthStatus, useAuthStore } from '../stores/auth/auth.store';
// import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {

  const setAuthenticated = useAuthStore(state => state.setAuthenticated);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {

    try {
      const response = await AuthServices.login(data);
      if (response.ok) {
        return setAuthenticated(AuthStatus.auth, response?.sender);
      }
      setAuthenticated(AuthStatus.unAuth);
    } catch (error) {
      console.trace(error);
    }
  };

  return (
    <div className="flex-1 flex justify-center items-center p-8">
      <div className="h-fit card bg-base-300 rounded-box gap-2 p-8 flex">
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center gap-4' >
          <h4 className='font-bold text-lg' >Login</h4>
          <input
            {...register('email')}
            maxLength={25}
            type="email"
            placeholder="email"
            className="input w-full max-w-xs h-30"
          />
          <input
            {...register('password')}
            minLength={4}
            type="password"
            placeholder="contraseña"
            className="input w-full max-w-xs h-30"
          />
          <button type='submit' className="btn btn-primary btn-wide">Entrar</button>
          {/* <button className="btn btn-secondary btn-wide">
            Entrar con
            <RiGoogleFill />
            <RiFacebookFill />
            <RiAppleFill />
          </button> */}
        </form>
        <div className='flex justify-center'>
          <Link to='/pub/register' className="link link-accent">¿Aún no tienes cuenta?</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
