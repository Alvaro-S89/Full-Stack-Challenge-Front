/* eslint-disable react/prop-types */

import {useReducer, useEffect} from 'react'

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {...state, value: action.val}
        default: return state
    }
}

// añadir validaciones (sólo require)

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {value: ''})

    const {id, onInput} = props
    const {value} = inputState

    useEffect(() => { onInput(id, value) }, [id, value, onInput]) 

    const changeHandler = event => { dispatch({type: 'CHANGE', val: event.target.value}) }


    const element = props.element === "input" 
        ? (<input id={props.id} type={props.type} placeholder={props.placeholder} 
            onChange={changeHandler} value={inputState.value}   
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />)
        : (<textarea id={props.id} rows={props.rows || 3} onChange={changeHandler} value={inputState.value} 
            className="border border-black"
        />)

    return (
        <div>
            <label 
                className="block text-gray-700 text-sm font-bold mb-2" 
                htmlFor={props.id}
            >
                {props.label}
            </label>
            {element}
        </div>
    );
};

export default Input;