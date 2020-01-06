import {GET_ACCOUNTS} from '../actions/types'
const initialState={
    items:[],
    loading:false
    
    }

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ACCOUNTS:
            
        default:
            return state;
    }
};