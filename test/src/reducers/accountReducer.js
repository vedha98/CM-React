import {GET_ACCOUNTS,ADD_ACCOUNT} from '../actions/types'

let initialState={
    accounts:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ACCOUNTS:
            return {...state,accounts:action.payload};
        case ADD_ACCOUNT:
            console.log(action.payload)
            return {...state,accounts:action.payload}        
        default:
            return state;
    }
};