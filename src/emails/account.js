const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'kdondidier@gmail.com',
        subject: 'Welcome to task manager',
        text:`Welcome to the app, ${name}. let me know how you get along with the app`
    })
}
const sendCanselationEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'kdondidier@gmail.com',
        subject:'Sorry to see you go',
        text:`We are sad to see you go ${name}, is there anything we could have done better? send us your feedback to kdondidier@gmail.com`
    })
}

module.exports ={
    sendWelcomeEmail,
    sendCanselationEmail

}