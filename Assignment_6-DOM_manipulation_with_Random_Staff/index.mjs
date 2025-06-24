'use strict';

import express from "express";
import fetch from "node-fetch";
import 'dotenv/config';
import expressAsyncHandler from "express-async-handler";
import { products } from "./products.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({
  extended: true
}));

// move index.html to public folder
app.use(express.static("public"));

// For staff page
// Define variables for tracking statistics
const printInterval = 10;
let buttonCount = 0;

// Track statistics for the API calls using middleware
app.use("/random-staff", (req, res, next) => {
  buttonCount += 1;

  // Check if the API call count is divisible by the print interval
  if (buttonCount % printInterval === 0) {
    console.log(`The number of staff listed is ${buttonCount}`);
    }
  
  next(); // Continue to the next middleware or route handler
});


// Get random data from the API using async and fetch
app.get("/random-staff", expressAsyncHandler(async (req, res) => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  res.send(data);
  res.status(200);  // working
}));


// Add an error of status 500 if the random data API fails
app.use((err, req, res, next) => {
  console.error(err.stack);
  // Not working
  res.status(500).send('<h3>Something broke!</h3><p><em> I do not want to get points taken off for this.</em></p>');
});

// variable for the top of the html
let htmlTop = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>Tony Chan Assignment 5</title>

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
            <a href="order.html">Order</a>
        </nav>
    
    <main>
`;

// variable for the bottom of the html
let htmlBottom = `
    </main>

        <footer>
            <p>
            &copy; 2023 Tony Chan
            </p>
        </footer>
    
</body>
</html>
`;

// Assign 4
// POST method responding using the body
app.post("/results", (req, res) => {
  const onePerson = req.body.firstlast;
  const personEmail = req.body.email;
  const custRemarks = req.body.remarks;
  const rankStars = req.body.stars;
  const workAt = req.body.work;
  const prodPetAcquired = req.body.petProduct;
  
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
    <section>
    <h2>Hello, <strong>${onePerson}</strong>. It is good to hear from you.</h2>
    <article>
    <p>
    Thank you for giving us the high number of stars, <strong>${rankStars}</strong>. We will review your remarks, <strong>${custRemarks}</strong>. 
    We will respond back to the following email address, <strong>${personEmail}</strong>. Your answer on working with us is <strong>${workAt}</strong> and whether you want us to send you updates on the following topics, <strong>${willSubscribe}</strong>.
    </p>
    </article>
    </section>
    ${htmlBottom}`)
  
  } else {
    res.send(`
    ${htmlTop}
    <section>
    <h2>Hello, <strong>${onePerson}</strong>. It is good to hear from you.</h2>
    <article>
    <p>
    Our goal is to try to make your next visit better. We see the number of stars received is below our standards, <strong>${rankStars}</strong>. We will review your remarks, <strong>${custRemarks}</strong>. 
    Someone will respond back to the following email address, <strong>${personEmail}</strong>. Your answer on working with us is <strong>${workAt}</strong> and whether you want us to send you updates on the following topics, <strong>${willSubscribe}</strong>.
    </p>
    </article>
    </section>
    ${htmlBottom}`)
  }

// --
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

}); // end of app.post /results


// --
// for order page
// import table object called products from products.js
// const petProdObj = require('./products.js').products;
const petProdObj = products;

// console.log(petProdObj); // test to see if table object is imported

  // Access table object row
  // Compare selected product to table object row. If match, then get the price
function compSelectedProd(productOrdered) {
  for (const petItem of petProdObj) {
    if (petItem.product === productOrdered) {
      return petItem;
    }
  }
}

// POST method responding using the body
app.post("/orders", (req, res) => {
  const onePerson = req.body.firstlast;
  const personEmail = req.body.email;
  const custAddress = req.body.address;
  let custDelInstruct = req.body.delInstruct;
  const validItem = compSelectedProd(req.body.petProduct);
  const prodQty = req.body.quantity;
  const itemPrice = validItem.price;
  const itemPriceString = itemPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  const validItemString = validItem.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  const totalCost = itemPrice * prodQty;
  const totalCostString = totalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  
  // know product, find company
  const prodCompany = validItem.company;
  
  // if no delivery instructions, then set to default
  if (custDelInstruct === "") {
    custDelInstruct = "normal delivery";
  }

  // Output to web page 
  res.send(`
  ${htmlTop}
  <section>
  <h2>Order Confirmation</h2>
  <article>
  <h3>Thank you, <strong>${onePerson}</strong>, for your order.</h3>
  <p>
  Your order is for <strong>${prodQty} ${prodCompany} ${validItem.product}</strong> for <strong>${itemPriceString}</strong> each. The total cost will be <strong>${totalCostString}</strong>. We will email you at the following address, <strong>${personEmail}</strong>, when your order ships with the following shipping instructions, <strong>${custDelInstruct}</strong>. We will send your order to the following address, <strong>${custAddress}</strong>.
  </p>
  </article>
  </section>
  ${htmlBottom}`)

}); // end of app.post /orders

/*
app.use(express.static('public'));
*/
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

