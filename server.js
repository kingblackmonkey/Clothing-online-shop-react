const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer')
const fs = require('fs');
const Hogan = require('hogan.js');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });



}






app.listen(port, error => {
  if (error) {
      throw error;
  }
  console.log('Server running on port ' + port);
});

// take payment 

app.post('/payment',async (req, res) => {
 console.log('heyyyyyyyyyy')

 const customer = await stripe.customers.create({
  source:req.body.token.id,
  email: req.body.token.email,
  
});
const body = {
   customer: customer.id,
    amount: req.body.amount,
    currency: 'usd',
    receipt_email:  req.body.token.email,
    
  };


 stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
     

    }
  });



  
});



// send email for order




let template = fs.readFileSync('./views/email.hjs', 'utf-8')

let compiledTemplate = Hogan.compile(template)






// function to add cid 
const addCid = (items)=>{
return items.map((item, i)=>{
  return {...item, cid: `cid:img${i+1}`}
})
}


//function to return atachment for nole mailer
const atachmentNodemailermanipulated = (items)=>{
  let arrFirst = [

    {
      filename: false,
      path: 'https://i.ibb.co/kKCzgdP/okok.gif',
      cid: 'imgMark' //same cid value as in the html img src
    },
       
    {
      filename: false,
      path: 'https://i.ibb.co/34N7XVF/facebook-2x.png',
      cid: 'imgFace' //same cid value as in the html img src
    },
       
    {
      filename: false,
      path: 'https://i.ibb.co/100mCwD/twitter-2x.png',
      cid: 'imgTwit' //same cid value as in the html img src
    },
       
    {
      filename: false,
      path: 'https://i.ibb.co/ZL1nXxG/googleplus-2x.png',
      cid: 'imgGoo' //same cid value as in the html img src
    }  
    
    ]

  let arrSecond = items.map((item,i)=>{
        return {
          filename: false,
          path: `${item.imageUrl}`,
          cid: `img${i+1}`
        }
  })

  return [...arrFirst, ...arrSecond]

}
app.post('/sendEmail',async (req, res) => {
  // console.log(req.body.email, req.body.name, req.body.orderNumber)
 
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass:  process.env.PASSWORD // generated ethereal password
    }
  });

 

const option = {
  from: 'tedybearq@gmail.com', // sender address
  to: `${req.body.email}`, // list of receivers
  subject: "Testing ", // Subject line
  text: "Hello Customer", // plain text body
  html: compiledTemplate.render(
    {
    imgMark: 'cid:imgMark', 
    imgFace:'cid:imgFace', 
    imgTwit:'cid:imgTwit', 
    imgGoo:'cid:imgGoo', 
    items: addCid(req.body.ordersInBag), 
    orderNumber: req.body.orderNumber,
    subTotal: req.body.subTotal

   }
  ),  // html body
  
    attachments: atachmentNodemailermanipulated(req.body.ordersInBag)
}



 transporter.sendMail(option,(err,data)=>{
    if(err){
      res.status(500).send('can not send email');
    }else{
      res.status(200).send('did send email');
    }
  });  
 
 

 
 
   
 });
 




 // send email for sign up

 let templateEmailSignup = fs.readFileSync('./views/signupEmail.hjs', 'utf-8')


 let compiledTemplateEmailSignup = Hogan.compile(templateEmailSignup)
 


app.post('/emailSignup',async (req, res) => {


  // console.log(req.body.email)
 
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass:  process.env.PASSWORD // generated ethereal password
    }
  });

 

const option = {
  from: 'tedybearq@gmail.com', // sender address
  to: `${req.body.email}`, // list of receivers
  subject: "Testing Welcome ", // Subject line
  text: "Hello New Customer", // plain text body
  html: compiledTemplateEmailSignup.render(
    {
    imgBird: 'cid:imgBird', 
    imgPhone:'cid:imgPhone', 
    imgWelcome:'cid:imgWelcome', 
    imgWave1:'cid:imgWave1', 
    imgWave2:'cid:imgWave2'

   }
  ),  // html body
  
    attachments: [

      {
        filename: false,
        path: 'https://i.ibb.co/2jsj8XG/appap-color2x.png',
        cid: 'imgBird' //same cid value as in the html img src
      },
         
      {
        filename: false,
        path: 'https://i.ibb.co/4tXXtb8/iPhone-1.png',
        cid: 'imgPhone' //same cid value as in the html img src
      },
         
      {
        filename: false,
        path: 'https://i.ibb.co/rvRMHpg/Bg-text-ani.gif',
        cid: 'imgWelcome' //same cid value as in the html img src
      },
         
      {
        filename: false,
        path: 'https://i.ibb.co/MM6Tj4M/bg-wave-1.png',
        cid: 'imgWave1' //same cid value as in the html img src
      },

         
      {
        filename: false,
        path: 'https://i.ibb.co/hyshGQL/bg-wave-2.png',
        cid: 'imgWave2' //same cid value as in the html img src
      }  
      ]
}



 transporter.sendMail(option,(err,data)=>{
    if(err){
      res.status(500).send('can not send email');
    }else{
      res.status(200).send('did send email');
    }
  });  
 


  
});





