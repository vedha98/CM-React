import {GET_ACCOUNTS} from '../actions/types';
import axios from 'axios';

export const getAccounts = ()=> dispatch =>{
  console.log('get called');
axios
.get('/api/items')
.then(res=>
  dispatch({
    type:GET_ACCOUNTS,payload:res.data
  })
)
}