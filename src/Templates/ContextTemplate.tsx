import { createContext, useReducer } from "react";
const initialState = {}

const Context = createContext(initialState) //Change Context to describe the data. Example: UserContext.


const reducer = (state: {}, action: {type: string, payload: any;) => {
    switch (action.type) {
        case '': {
            return state;
        }
        default {
            return state;
        }
    }
}

export const ContextProvider = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = {
        ...state,
        testFunction: (arg: {}) => { dispatch({ type: '', payload: arg})}
    }

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}

export default Context