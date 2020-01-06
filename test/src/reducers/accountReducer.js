import {GET_ACCOUNTS} from '../actions/types'
let initialState=[]

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ACCOUNTS:
            return action.payload;    
        default:
            return state;
    }
};