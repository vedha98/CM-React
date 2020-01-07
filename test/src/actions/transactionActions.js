import { GET_TRANSACTIONS } from '../actions/types';
import {toast} from 'react-toastify'
import axios from 'axios';

toast.configure({position: toast.POSITION.BOTTOM_RIGHT})
export const gettransactions = ()=> dispatch =>{
  console.log('get called');
  let url = 'http://localhost:8000/api/transfer/gettransactions'
       let config = {
        headers: {'Authorization': "bearer " + localStorage.getItem("token")}
    };
        axios.get(url,config).then(res=>
  dispatch({
    type:GET_TRANSACTIONS,payload:res.data
  })
)
}