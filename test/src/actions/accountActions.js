import {GET_ACCOUNTS} from '../actions/types';
import axios from 'axios';

export const getAccounts = ()=> dispatch =>{
  console.log('get called');
  let url = 'http://localhost:8000/api/accounts/getaccounts'
       let config = {
        headers: {'Authorization': "bearer " + localStorage.getItem("token")}
    };
        axios.get(url,config).then(res=>
  dispatch({
    type:GET_ACCOUNTS,payload:res.data.accounts
  })
)
}