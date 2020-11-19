import React, { createContext, useContext, useReducer} from 'react'
import { initialState } from './reducer'

interface IChat {
    id: number;
    displayName: string;
    photoURL: string
}

interface IState {
    user: IChat;
}

interface IContext {
    state: IState;
    dispatch: (T:any) => void
}

export const StateContext = createContext<IContext>({} as IContext);
export const StateProvider = ({reducer, initialState, children}:{ reducer:any, initialState:any, children:any}) => {
    const [state, dispatch]:[state:any, dispatch:any] = useReducer(reducer, initialState);

    const value = { state, dispatch }

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)
