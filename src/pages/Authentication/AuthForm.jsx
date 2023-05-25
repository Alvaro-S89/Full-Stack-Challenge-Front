import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useForm } from '../../shared/components/form-hook';
import Input from '../../shared/components/input';
import FormButton from '../../shared/components/form-button';

import { IsLoggedContext } from '../../shared/contexts/IsLoggedContext';

import { API } from '../../shared/services/api';

const AuthForm = () => {
    const [formState, inputHandler] = useForm({
        name: { value: '' },
        password: { value: '' }
    })

    const { setIsLogged } = useContext(IsLoggedContext)

    const[isLoginMode, setIsLoginMode] = useState(true)

    const[isError, setIsError] = useState(null)

    const navigate = useNavigate()

    const switchModeHandler = () => {
        setIsError(null)
        setIsLoginMode(prevMode => !prevMode) // cambia a la inversa
    }

    const submitHandler = event => {
        event.preventDefault()

        const authRoute = isLoginMode ? '/auth/login' : '/auth/register'

        const userPayload = {
            name: formState.inputs.name.value,
            password: formState.inputs.password.value
        }

        API.post(authRoute, userPayload).then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userId', res.data.userId)
            localStorage.setItem('userName', res.data.userName)

            setIsLogged(true)

            return navigate('/')
        }).catch(err => {
            setIsError(err.response.data.message)

            setTimeout(() => {
                setIsError(null)
            }, 5000)
        })
    }

    return (
        <form onSubmit={submitHandler}>
            {isError && 
                <span className="inline-flex font-bold text-red-700"> { isError } </span>
            }
            <Input element="input" id="name" type="text" placeholder="Name" label="Name" onInput={inputHandler} />
            <Input element="input" id="password" type="password" placeholder="Password" label="Password" onInput={inputHandler} />
            <FormButton onClick={submitHandler} type="submit" text={ isLoginMode  ? 'LOG IN' : 'SIGN UP' } />

            <p className="text-center text-gray-700 text-xs mt-3 cursor-pointer" onClick={switchModeHandler}>
                SWITCH TO { isLoginMode  ? 'SIGN UP' : 'LOG IN' }
            </p>
            <NavLink to={"/"}>
                <p className="text-center text-gray-700 text-xs mt-3 cursor-pointer">👀take a peek👀</p>
            </NavLink>
        </form>
    );
}

export default AuthForm