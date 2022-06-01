const nodemailer = require("nodemailer");

 let transorter=nodemailer.createTransport({
     host:'smtp.qq.com',
     secureConnectL:true,
     port:465,
     auth:{
         user:'1052831052@qq.com',
         pass:'ujlnjgjyzntl'
     }


 })

 let mailOptions={
        FORM:'102531042@qq.com',
        to:'1052831052@qq.com',
        subject:'Contact us',
        text:`hhaha`


 }
 transporter.sendMail(mailOptions,(err,info)=>{
     if(err){
         console.log(err);
     }else{
         console.log(sucess);
     }
 })