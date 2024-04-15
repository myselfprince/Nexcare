import nodemailer from 'nodemailer'
import User from '@/models/userModel'
import bcryptjs from 'bcryptjs'

export const sendEmail = async({email, emailType, userId})=>{
    try{
      const hashedToken = await bcryptjs.hash(userId.toString(),10)

      if(emailType === "VERIFY"){
        await User.findByIdAndUpdate(userId,
          {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000})
      }

       else if(emailType === "RESET"){
        await User.findByIdAndUpdate(userId,
          {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000})

      }

        // const transporter = nodemailer.createTransport({
        //     host: "smtp.ethereal.email",
        //     port: 587,
        //     secure: false,
        //     auth: {
        //       user: "maddison53@ethereal.email",
        //       pass: "jn7jnAPss4f63QBp6D",
        //     },
        //   });
        var transport = nodemailer.createTransport({
          host: "sandbox.smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "0ed913788ccc68", //❌
            pass: "464777d1e6cd9c" //❌
          }
        });
        

          const mailOptions = {
            from: 'prince@prince.ai', // sender address
            to: email, // list of receivers
            subject: emailType === "VERIFY"? "Verify your password":"Reset Your Password", // Subject line
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}/">here</a> to ${emailType === "VERIFY"? "Verify your email": "Reset your password"} 
                  or copy and paste the Link below in your browser.<br>  ${process.env.DOMAIN}/verifyemail?token=${hashedToken}  
                  </p>`, // html body
          }

          const mailResponse = await transport.sendMail(mailOptions)
          return mailResponse

    }
    catch(error){
        throw new Error(error.message)

    }
}