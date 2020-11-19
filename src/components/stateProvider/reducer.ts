export const initialState = {
    user: null
}

export const actionType = {
    SET_USER: 'SET_USER',
    LOG_OUT: 'LOG_OUT'
}

const authREducer = (state:any, action:{type: string, state: any}) => {
    switch(action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.state
            }
        case actionType.LOG_OUT:
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}

export default authREducer

