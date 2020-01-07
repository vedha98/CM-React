import { GET_TRANSACTIONS, SEND_MONEY } from '../actions/types'

let initialState={
    sent:[],
    recieved:[],
    redirect:false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSACTIONS:
            console.log(action)
            return{...state,
                sent:action.payload.val.sent,
                recieved:action.payload.val.recieved
            }
        case SEND_MONEY:
            console.log(action)
            if(action.payload.toid==action.payload.fromid){
                return{
                    ...state,redirect:true,sent:[...state.sent,action.payload],recieved:[...state.recieved,action.payload]
                } 
            }else{
                return{
                    ...state,redirect:true,sent:[...state.sent,action.payload]
                } 
            }
                         
        default:
            return state;
    }
};