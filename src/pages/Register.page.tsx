import { useForm } from 'react-hook-form';
// import { RiGoogleFill, RiFacebookFill, RiAppleFill } from "@remixicon/react";
import { Link } from 'react-router-dom';
import { AuthServices } from '../services/auth.services';
import { AuthStatus, useAuthStore } from '../stores/auth/auth.store';
// import { useAuth } from '../hooks/useAuth';


const RegisterPage = () => {


  const setAuthenticated = useAuthStore(state => state.setAuthenticated);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name, email, password, repassword } = data;
    if (password !== repassword) {
      console.error('Las contraseñas no son iguales');
    }

    try {
      const response = await AuthServices.signin({ name, email, password });
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
      <div className="h-fit card bg-base-300 rounded-box gap-2 p-8">
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center gap-4' >
          <h4 className='font-bold text-lg' >Crear cuenta</h4>
          <input
            {...register('name')}
            minLength={3}
            maxLength={25}
            type="text"
            placeholder="Nombre"
            className="input w-full max-w-xs h-30"
            required
          />
          <input
            {...register('email')}
            maxLength={50}
            type="email"
            placeholder="email"
            className="input w-full max-w-xs h-30"
            required
          />
          <input
            {...register('password')}
            minLength={4}
            type="password"
            placeholder="contraseña"
            className="input w-full max-w-xs h-30"
            required
          />
          <input
            {...register('repassword')}
            minLength={4}
            type="password"
            placeholder="repetir contraseña"
            className="input w-full max-w-xs h-30"
            required
          />
          <button type='submit' className="btn btn-primary btn-wide">Crear cuenta</button>
          {/* <button className="btn btn-secondary btn-wide">
            Entrar con
            <RiGoogleFill />
            <RiFacebookFill />
            <RiAppleFill />
          </button> */}
        </form>
        <div className='flex justify-center'>
          <Link to='/pub/login' className="link link-accent">¿Ya tienes cuenta?</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
