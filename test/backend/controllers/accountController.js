const accservice = require('../services/database/db_accounts')
const valservice = require('../helpers/validator')
module.exports={
    ValidateAndCreateAccount:async function(user,accountdata){
        let AccountNo=accountdata.accountNo;
        
        let userid=user.id;
        let isPrimary=false;
        if(!valservice.AccNo(AccountNo)){ return ({success:false,msg:"invalid account number"})}
        if(accountdata.isPrimary)isPrimary=true
        let isfirst = await accservice.checkFirst(userid)
        if(isfirst)isPrimary=true;
        let existence = await accservice.checkAccountExists(AccountNo);
        if(existence){
        let acc = await accservice.createNewAccount(userid,AccountNo,isPrimary)
        return({msg:"account created successfully",success:true})
        }else{
            return({msg:"account already exists",success:false})
        }


    },
    getAllAccounts:async function(user){
        return await accservice.getAccounts(user.id)
    }
}