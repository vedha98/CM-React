const verifydb = require("../../models").verifykeys;
module.exports={
    checkKey:function(key,callback){
        verifydb.findOne({where:{key}}).then(val=>{
            if(!val){ callback(false)}else{
                callback(val)
            }
        })
    }
}