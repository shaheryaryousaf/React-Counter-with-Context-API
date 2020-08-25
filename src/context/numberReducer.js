import { ADD_NUMBER, MINUS_NUMBER, RESET } from "./types";

export default function (state, action) {

    const { type, payload } = action;

    switch (type) {
        case ADD_NUMBER:
        case MINUS_NUMBER:
        case RESET:
            return {
                ...state,
                number: payload
            }
        default:
            return state
    }

}