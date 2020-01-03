const sgMail = require('@sendgrid/mail');
var http = require('http');
sgMail.setApiKey("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");
const verifydb = require('../models').verifykeys
const otpdb = require('../models').otpkeys

module.exports = {
  sendVerifyMail: function (user) {

    return verifydb.findOne({ where: { userId: String(user.id) } }).then(val => {
      const msg = {
        to: user.email,
        from: 'bank@example.com',
        subject: 'Bank - Email Verification',
        html: `
            <head><style type="text/css" title="x-apple-mail-formatting"></style>
            
                <meta name="viewport" content="width = 375, initial-scale = -1">
            
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            
                <meta charset="UTF-8">
            
                <title></title>
            
                
            
                <style>
            
                /* -------------------------------------
            
                RESPONSIVENESS
            
                !importants in here are necessary :/
            
                ------------------------------------- */
            
                @media only screen and (max-device-width: 700px) {
            
                  .table-wrapper {
            
                    margin-top: 0px !important;
            
                    border-radius: 0px !important;
            
                  }
            
            
            
                  .header {
            
                    border-radius: 0px !important;
            
                  }
            
                }
            
                </style>
            
            
            
              </head>
            
              <body style="-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:none;margin:0;padding:0;font-family:&quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size:100%;line-height:1.6">
            
                <table style="background: #F5F6F7;" width="100%" cellpadding="0" cellspacing="0">
            
                  <tbody><tr>
            
                    <td>
            
                      <!-- body -->
            
                      <table cellpadding="0" cellspacing="0" class="table-wrapper" style="margin:auto;margin-top:50px;border-radius:7px;-webkit-border-radius:7px;-moz-border-radius:7px;max-width:700px !important;box-shadow:0 8px 20px #e3e7ea !important;-webkit-box-shadow:0 8px 20px #e3e7ea !important;-moz-box-shadow:0 8px 20px #e3e7ea !important;box-shadow: 0 8px 20px #e3e7ea !important; -webkit-box-shadow: 0 8px 20px #e3e7ea !important; -moz-box-shadow: 0 8px 20px #e3e7ea !important;">
            
                        <tbody><tr>
            
                          <!-- Brand Header -->
            
                            <td class="container" bgcolor="#FFFFFF" style="display:block !important;margin:0 auto !important;clear:both !important">
            
                              <img style="max-width:100%">
            
                           </td>
            
                        </tr>
            
            
            
                        <tr>
            
                          <td class="container content" bgcolor="#FFFFFF" style="padding:35px 40px;border-bottom-left-radius:6px;border-bottom-right-radius:6px;display:block !important;margin:0 auto !important;clear:both !important">
            
                            <!-- content -->
            
                            <div class="content-box" style="max-width:600px;margin:0 auto;display:block">
            
             
            
            <!-- Content -->
            
            <h1 style="font-family:&quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif;margin-bottom:15px;color:#47505E;margin:0px 0 10px;line-height:1.2;font-weight:200;font-size:28px;font-weight:bold;margin-bottom:30px">Confirm your email address</h1>
            
            
            
            <p style="font-weight:normal;padding:0;font-family:&quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height:1.7;margin-bottom:1.3em;font-size:15px;color:#47505E">Please click the button below to confirm your email address:</p>
            
            
            
            <center><a href ="http://localhost:8000/api/users/validate/${val.key}" class="confirmation-url btn-primary" style="color:#1EA69A;word-wrap:break-word;font-family:&quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;text-decoration:none;background-color:#FF7F45;border:solid #FF7F45;line-height:2;max-width:100%;font-size:14px;padding:8px 40px 8px 40px;margin-top:30px;margin-bottom:30px;font-weight:bold;cursor:pointer;display:inline-block;border-radius:30px;margin-left:auto;margin-right:auto;text-align:center;color:#FFF !important">Confirm Email</a></center>
            
            
            
            
            
           
            
            
            
            </body>`
      };
      console.log("sending mail")
      sgMail.send(msg);
    })


  },
  getEXpDate: function () {
    var now = new Date();
    now.setMonth(now.getMonth() + 1);
    return now;
  },
  sendOTP: function (user) {
    return otpdb.findOne({ where: { userId: String(user.id) } }).then(val => {
      const accountSid = 'ACd3c013d422d2980354837d674a6b998c';
    const authToken = '18869c01bd597b437507518ad119e2c5';
    const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: val.key,
     from: '+12055767190',
     to: '+91'+user.phone
   })
  .then(message => console.log(message.sid));    })

     
  }

}