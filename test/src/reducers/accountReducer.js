import {GET_ACCOUNTS,ADD_ACCOUNT,LOAD_ACCOUNTS} from '../actions/types'

let initialState={
    accounts:[],
    selectedaccount:{}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ACCOUNTS:
            return {...state,accounts:action.payload};
        case GET_ACCOUNTS:
            return{...state}
        case ADD_ACCOUNT:
            return {...state,accounts:action.payload}             
        default:
            return state;
    }
};