import React, { useReducer } from "react";
import { ADD_NUMBER, MINUS_NUMBER, RESET } from "./types";

import numberContext from "./numberContext";
import numberReducer from "./numberReducer";

const NumberState = props => {

    const initialState = {
        number: 0
    }

    const [state, dispatch] = useReducer(numberReducer, initialState);

    const addNumber = () => {
        dispatch({
            type: ADD_NUMBER,
            payload: state.number + 1
        })
    }

    const minusNumber = () => {
        dispatch({
            type: MINUS_NUMBER,
            payload: state.number - 1
        })
    }

    const reset = () => {
        dispatch({
            type: RESET,
            payload: 0
        })
    }

    return (<numberContext.Provider value={{ number: state.number, addNumber, minusNumber, reset }}>{props.children}</numberContext.Provider>)

}

export default NumberState;