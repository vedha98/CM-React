import {GET_ACCOUNTS,ADD_ACCOUNT} from '../actions/types';
import {toast} from 'react-toastify'
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
export const addAccount = (accountNo,isPrimary)=> dispatch =>{
    console.log('get called');
    let config = {
        headers: {'Authorization': "bearer " + localStorage.getItem("token")}
    };
    axios.post('http://localhost:8000/api/accounts/createacc', {
            accountNo,
            isPrimary
        },config).then(res=>{
            if(res.data.success){
                toast.success("MY SUCCESS");
                dispatch({
                    type:ADD_ACCOUNT,
                    payload:res.data.accounts   
                })
               
            }else{
               
            }
            
        }
            
        )
  }
