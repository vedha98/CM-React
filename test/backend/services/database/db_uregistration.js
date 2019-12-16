const userdb = require('../../models').users;
const generator = require('../../helpers/generator');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports={
    createUser:function(user,callback){
        let {firstname,lastname,email,aadharNo,password,panNo,dob,nfirstname,nlastname,ndob}= user;
        raccno=generator.getaccno();
        reffno = generator.getrefno();
        
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                password=hash
                userdb.create({firstname,lastname,email,aadharNo,password,panNo,dob,nfirstname,nlastname,ndob,everified:false,pverified:false,averified:false,tokenlogin:false,balance:0,refferal:reffno,accno:raccno}).then(
                    ()=>{
                        callback(true)
                        
                    }
                ).catch(err=>{
                    console.log(err)
                })
            });
        });
        
    },
    checkExist:function(user){
        return true
    }

}