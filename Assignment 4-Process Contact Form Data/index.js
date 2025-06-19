'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const nodemailer = require("nodemailer");

app.use(express.urlencoded({
  extended: true
}));

// variable for the top of the html
let htmlTop = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>Tony Chan Assignment 3</title>

    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <script src="index.js"></script>
</head>

<body>
    <header>
    <h1>Tony Chan</h1>
    </header>
        <nav class="global">
            <a href="index.html">Home</a>
            <a href="contact.html">Contact</a>
            <a href="gallery.html">Gallery</a>
        </nav>
    
    <main>
    <section>
    <h2>Contact</h2>
    <article>
`;

// variable for the bottom of the html
let htmlBottom = `
    </article>

    </section>
    </main>

        <footer>
            <p>
            &copy; 2023 Tony Chan
            </p>
        </footer>
    
</body>
</html>
`;





// POST method responding using the body
app.post("/results", (req, res) => {
  const onePerson = req.body.firstlast;
  const personEmail = req.body.email;
  const custRemarks = req.body.remarks;
  const rankStars = req.body.stars;
  const workAt = req.body.work;
  // const ageYearsOld = req.body.yearsold;
  
  // Provided by William Trip in Ed from another class
  function getCheckBoxItems(checkedBoxes) {
    switch (typeof checkedBoxes) {
      case "object":  // 2 or more checked boxes
        return checkedBoxes.join(", ");
      case "string":  // 1 checked box
        return checkedBoxes;
      default:  // no checked boxes
        return "no topics.";  // empty string
    }
  }

  const willSubscribe = getCheckBoxItems(req.body.interests);
  console.log(willSubscribe);



  if (rankStars == "4 stars" || rankStars == "5 stars") {
    console.log(rankStars);
  
    res.send(`
    ${htmlTop}
    <h2>Hello, <strong>${onePerson}</strong>. It is good to hear from you.</h2>
    <p>
    Thank you for giving us the high number of stars, <strong>${rankStars}</strong>. We will review your remarks, <strong>${custRemarks}</strong>. 
    We will respond back to the following email address, <strong>${personEmail}</strong>. Your answer on working with us is <strong>${workAt}</strong> and whether you want us to send you updates on the following topics, <strong>${willSubscribe}</strong>.
    </p>
    ${htmlBottom}`)
  
  } else {
    res.send(`
    ${htmlTop}
    <h2>Hello, <strong>${onePerson}</strong>. It is good to hear from you.</h2>
    <p>
    Our goal is to try to make your next visit better. We see the number of stars received is below our standards, <strong>${rankStars}</strong>. We will review your remarks, <strong>${custRemarks}</strong>. 
    Someone will respond back to the following email address, <strong>${personEmail}</strong>. Your answer on working with us is <strong>${workAt}</strong> and whether you want us to send you updates on the following topics, <strong>${willSubscribe}</strong>.
    </p>
    ${htmlBottom}`)
  }


// async..await is not allowed in global scope, must use a wrapper
async function mailNode() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object to Ethereal
  let info = await transporter.sendMail({
    from: '"${onePerson}" ${personEmail}', // sender address
    to: "chanto@oregonstate.edu", // list of receivers
    subject: `CS 290 Contact Email`, // Subject line
    text: `${custRemarks} ${personEmail}`, // plain text body
    html: `<h2>Hello, <strong>${onePerson}</strong>. It is good to hear from you.</h2>
      <p>Our goal is to try to make your next visit better. We see the number of stars received is, <strong>${rankStars}</strong>. We will review your remarks, <strong>${custRemarks}</strong>. Someone will respond back to the following email address, <strong>${personEmail}</strong>. Your answer on working with us is <strong>${workAt}</strong> and whether you want us to send you updates on the following topics, <strong>${willSubscribe}</strong>.</p>`,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

mailNode().catch(console.error);





}); // end of app.post

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

