const transferdb = require('../../models').Transactions;


module.exports={
    transfermoney:async function(fromno,tono,fromid,toid,amount){
        return await transferdb.create({fromno,tono,fromid,toid,amount})
    },
    getall:async function(userId){
        userId = String(userId)
        let sent = await transferdb.findAll({where:{fromid:userId}})
        let recieved = await transferdb.findAll({where:{toid:userId}})
        return ({sent,recieved})
    }
}