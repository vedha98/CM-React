const userdb = require('../../models').users;
const generator = require('../../helpers/generator');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports={
    createUser:function(user,callback){
        let {firstname,lastname,email,aadharNo,password,panNo,dob,nfirstname,nlastname,ndob,phone}= user;
        raccno=generator.getaccno();
        reffno = generator.getrefno();
        verifycode = generator.getvaluuid();
        
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                password=hash
                userdb.create({firstname,lastname,email,aadharNo,password,panNo,dob,phone,nfirstname,nlastname,ndob,everified:false,pverified:false,averified:false,tokenlogin:false,refferal:reffno,everifycode:verifycode}).then(
                    ()=>{
                        callback(true)
                        
                    }
                ).catch(err=>{
                    console.log(err)
                })
            });
        });
        
    },
    checkExist: async function(user){
        const aadharNo = String(user.aadharNo)
      return  userdb.findOne({where:{aadharNo}}).then(user=>{
        if(user){
            return false
        }else{
            return true
        }
      });
    
    },
    findUserbyAccNo:function(data,callback){
        const accno = String(data.accno);
        userdb.findOne({where:{accno}}).then(user=>{
            if(!user) callback(false,"user does not exist")
            else{
                callback(user,"user found")
            }
        })
    },
    CheckPassword:function(user,password,callback){
        bcrypt.compare(password,user.password,(err,res)=>{
            callback(res)
        })
    }

}