import { useReducer, useCallback } from "react";

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value
                    }
                }
            }
        default:
            return state
    }
}

export const useForm = (initialInputs) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs
    })

    const inputHandler = useCallback((id, value) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value: value,
            inputId: id
        })
    }, [])

    return [formState, inputHandler]
}