import React from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='w-full'>
            <h2 className='m-3 text-center text-3xl font-extrabold text-gray-900'>Iniciar sesión</h2>
            <form className='mt-8'>
                <div>
                    <input className='appearance-none rounded-none px-3 py-2 border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                     type="email" placeholder='abc@f.com' required/>
                    <input type="password" required/>
                </div>
                <div>
                    <label htmlFor='recuerdame'>
                    <input type="checkbox" name='recuerdame'/>
                    Recuerdame
                    </label>
                </div>
                <div>
                    <Link to='/'>Olvidaste tu contraseña?</Link>
                </div>
                <div>
                    <Link to='/admin'>
                        <button type="submit">Iniciar sesión</button>
                    </Link>
                </div>
                <div>O</div>
                <div>
                    <button>Continua con google</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
