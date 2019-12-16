const userdb = require('../../models').users;
module.exports={
    createUser:async function(user){
        let {firstname,lastname,email,aadharNo,password,panNo,dob,nfirstname,nlastname,ndob}= user;
        userdb.create({firstname,lastname,email,aadharNo,password,panNo,dob,nfirstname,nlastname,ndob,everified:false,pverified:false,averified:false,tokenlogin:false,balance:0,refferal:"qrqwrqwr",accno:"23131351515"}).then(
            ()=>{
                return true
                
            }
        ).catch(err=>{
            console.log(err)
        })
    },
    checkExist:function(user){
        return true
    }

}