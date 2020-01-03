const accservice = require('../services/database/db_accounts')
module.exports={
    ValidateAndCreateAccount:async function(user,accountdata){
        let AccountNo=accountdata.accountNo;
        let userid=user.id;
        let isPrimary=false;
        if(accountdata.isPrimary)isPrimary=true
        let isfirst = await accservice.checkFirst(userid)
        if(isfirst)isPrimary=true;
        let existence = await accservice.checkAccountExists(AccountNo);
        if(existence){
        let acc = await accservice.createNewAccount(userid,AccountNo,isPrimary)
        console.log(acc)
        }

    }
}