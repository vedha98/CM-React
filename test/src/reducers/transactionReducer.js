import { GET_TRANSACTIONS, SEND_MONEY, FILTER_TRANSACTIONS } from '../actions/types'

let initialState={
    sent:[],
    recieved:[],
    fsent:[],
    frecieved:[],
    redirect:false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSACTIONS:
            console.log(action)
            return{...state,
                sent:action.payload.val.sent,
                recieved:action.payload.val.recieved,
                fsent:action.payload.val.sent,
                frecieved:action.payload.val.recieved
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
        case FILTER_TRANSACTIONS:
            let fsent = state.sent;
            let frecieved = state.recieved;
            if(action.payload!=""){
                fsent = fsent.filter((val)=>{
                    return val.id===parseInt(action.payload)})
                frecieved = frecieved.filter((val)=>{
                    return String(val.id).indexOf(String(action.payload))>-1})
                       
            } 
            return{...state,fsent,frecieved}    
                         
        default:
            return state;
    }
};