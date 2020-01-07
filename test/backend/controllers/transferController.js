const transervice = require('../services/database/db_transactions')
const accservice = require('../services/database/db_accounts')


module.exports={
    transfermoney:async function(data){
        let fromexist = await accservice.checkAccountExists(data.fromno)
        let toexist = await accservice.checkAccountExists(data.tono)
        if(fromexist || toexist) return ({msg:"account does not exist",success:false});

       let fromid =  await accservice.getUser(data.fromno);
        let toid = await accservice.getUser(data.tono);
        
        return await transervice.transfermoney(data.fromno,data.tono,fromid,toid,data.amount).then(transaction=>{
            return {msg:"money transferred successfully",success:true,transaction}
        })
    },
    getAllTransactions:async function(user){
       return await transervice.getall(user.id)
    }
}