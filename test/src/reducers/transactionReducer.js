import { GET_TRANSACTIONS } from '../actions/types'

let initialState={
    sent:[],
    recieved:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSACTIONS:
            console.log(action)
            return{...state,
                sent:action.payload.val.sent,
                recieved:action.payload.val.recieved
            }          
        default:
            return state;
    }
};