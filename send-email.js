
function sendEmail()
{


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'codellionconnect@gmail.com',
    pass: 'alphabeta@delta'
  }
});

var mailOptions = {
  from: 'codellionconnect@gmail.com',
  to: 'khemagarwal1@gmail.com',
  subject: 'Codellion Connect ',
  text: `Hi khem , you have been registered for Codellion Connect.
  You can now login with your emailId and Password on www.codellion.com/codellion-connect`
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}
