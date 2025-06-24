# Academic project completed in Spring 2023

## Project Title: HTML to Fullstack MERN Project
Start with HTML webpages and change stage by stage into a fullstack MERN website. It will be a 
client side rendering using React.

Log your stock option trades such as underlying stock, number of contracts, expiration date, start date and exit date, just like using a stock portfolio account from a stock brokerage. 

This repository contains my independent copy of a collaborative academic project completed as part of the 
Computer Science program.

## Key Features
Product Management:
Track options trade log details (underlying stock, number of contracts, expiration date, start date and exit date).

Modular Full-Stack Architecture
Organized by development stages with isolated node_modules and package.json files per stage.

React Frontend with Client-Side Rendering (CSR)
Interactive UI built with React using map() to render product options trade data dynamically as rows.

Node.js & Express Backend
REST API built using Express to handle HTTP requests and serve options trade data.

MongoDB Integration with Mongoose
Connected to a MongoDB cluster using a defined Mongoose schema to support full CRUD operations (Create, Read, Update, Delete).

Live Data Interaction
Options trade list dynamically fetched from MongoDB and rendered on the frontend — simulating real-world stock portfolio account.

Educational Emphasis
Designed for hands-on learning with clean separation of concerns between frontend, backend, and database.



## Tech Stack - Full-stack MERN application
- Client-side rendering (SSR) with React
- Frontend: HTML, CSS, JavaScript, React
- Backend: Node.js with Express, REST API
- Database: MongoDB, Mongoose, No SQL

## Setup Instructions
Download the Project
Open a terminal (Command Prompt or PowerShell on Windows).
Copy and paste this command to download the project:
git clone https://github.com/Luckygoldjade/html-to-fullstack-mern-project.git

(Optional) Make sure you have the latest files:
git pull origin main

### Assignment 4: Installation and Running Instructions
Important
Do not delete or replace the existing package.json file.
It already contains all the necessary settings and dependencies for this project.

Requirements
Make sure you have Node.js installed on your computer.

Steps
1. Open the project folder
In VS Code or your file explorer, open the folder named:
Assignment_4-Process Contact Form Data

2. Open a terminal
In VS Code: Go to Terminal > New Terminal
Or use Command Prompt / PowerShell in Windows

3. Install all dependencies
Run this command in the terminal (this will use the existing package.json):<br>
npm install

This will install everything needed, including express and nodemon.

4. Start the app
Run:<br>
npm start

The app will start, and you can view it in your browser at:
http://localhost:3000

Note:

Do not run npm init or delete/replace package.json.
Just use the provided package.json and follow the steps above.

### Assignment 5: Process Order Form Data
Important
Do not delete or replace the existing package.json file.
It already contains all the necessary settings and dependencies for this project.

Requirements
Make sure you have Node.js installed on your computer.

Steps
1. Open the project folder
In VS Code or your file explorer, open the folder named:<br>
Assignment_5-Process Order Form Data

2. Open a terminal
In VS Code: Go to Terminal > New Terminal
Or use Command Prompt / PowerShell in Windows

3. Install all dependencies
Run this command in the terminal (this will use the existing package.json):<br>
npm install

This will install everything needed, including express and nodemon.

4. Start the app
Run:<br>
npm start

The app will start, and you can view it in your browser at:
http://localhost:3000

Note:

Do not run npm init or delete/replace package.json.
Just use the provided package.json and follow the steps above.

### Assignment 6: DOM manipulation with Random Staff
Important
Do not delete or replace the existing package.json file.
It already contains all the necessary settings and dependencies for this project.

Requirements
Make sure you have Node.js installed on your computer.

Steps
1. Open the project folder
In VS Code or your file explorer, open the folder named:<br>
Assignment_6-DOM_manipulation_with_Random_Staff

2. Open a terminal
In VS Code: Go to Terminal > New Terminal
Or use Command Prompt / PowerShell in Windows

3. Install all dependencies
Run this command in the terminal (this will use the existing package.json):<br>
npm install

This will install everything needed, including express and nodemon.

4. Start the app
Run:<br>
npm start

The app will start, and you can view it in your browser at:<br>
http://localhost:3000

Note:

Do not run npm init or delete/replace package.json.
Just use the provided package.json and follow the steps above.

### Assignment 7: Convert to React App
Important
Do not delete or replace the existing package.json file.
It already contains all the necessary settings and dependencies for this project.

Requirements
Make sure you have Node.js installed on your computer.

Steps
1. Open the project folder
In VS Code or your file explorer, open the folder named:<br>
Assignment_7-Convert_to_React_App

2. Open a terminal
In VS Code: Go to Terminal > New Terminal
Or use Command Prompt / PowerShell in Windows

3. Install all dependencies
Run this command in the terminal (this will use the existing package.json):<br>
npm install

This will install everything needed, including express and nodemon.

4. Start the app
Run:<br>
npm start

The app will start, and you can view it in your browser at:<br>
http://localhost:3000

Note:

Do not run npm init or delete/replace package.json.
Just use the provided package.json and follow the steps above.

### Extra Credit Assignment M8DB — Database Persistence
Important
Do not delete or replace the existing package.json file.
It already contains all the necessary settings and dependencies for this project.


#### MongoDB Atlas Setup & Project Configuration (Beginner Guide)
1. Create a Free MongoDB Atlas Account
- Go to https://www.mongodb.com/cloud/atlas
- Click Sign Up and create a free account.
2. Create a Free Cluster
- After logging in, click Build a Database.
- Choose the Shared (free) option.
- Select your preferred cloud provider and region.
- Name your cluster and click Create.
3. Create a Database User (for App Access)
- In the Atlas dashboard, go to Database Access (left menu).
- Click Add New Database User. (This account and password are different from mongodb.com account and password)
- Set a username and password (save these for later)(for mongodb connection string).
- Give the user Read and Write to any database.
4. Allow Network Access
- Go to Network Access (left menu).
- Click Add IP Address.
- Add your current IP address, or use 0.0.0.0/0 to allow all IPs (for development only).
5. Get Your MongoDB Connection String
- Go to Clusters > Connect > Connect your application.
- Copy the connection string that looks like:

mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority
- Replace <username>, <password>, and <dbname> with your actual database user and database name.

6. Configure Your .env File
- The connection string account and password are different from mongodb.com account and password.
- In your project’s backend folder, you’ll find a file named dot_env_example.
- Copy dot_env_example and rename the copy to .env.
- Open .env and paste your MongoDB connection string:

MONGODB_CONNECT_STRING=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority
- Never commit your .env file to Git or share it publicly.

#### Running the Project
1. Install Dependencies

npm install

2. Start the Backend Server

npm start
- This will connect your backend to MongoDB Atlas using the connection string in .env.<br>
View the backend website
- Open your web browser and go to https://localhost:3000

Notes
- The MongoDB connection string is used by Node.js and Mongoose (your backend uses Mongoose to connect).
- The dot_env_example file is a template—always copy it to .env and fill in your real values.
- For security, never share your real .env file or credentials.
- Do not run npm init or delete/replace package.json. Just use the provided package.json and follow the steps above.


### Assignment 8: Portfolio Site Using Full-stack MERN
Important
Do not delete or replace the existing package.json file.
It already contains all the necessary settings and dependencies for this project.

#### MongoDB Atlas Setup & Project Configuration (Beginner Guide)
1. Create a Free MongoDB Atlas Account
- Go to https://www.mongodb.com/cloud/atlas
- Click Sign Up and create a free account.
2. Create a Free Cluster
- After logging in, click Build a Database.
- Choose the Shared (free) option.
- Select your preferred cloud provider and region.
- Name your cluster and click Create.
3. Create a Database User (for App Access)
- In the Atlas dashboard, go to Database Access (left menu).
- Click Add New Database User. (This account and password are different from mongodb.com account and password)
- Set a username and password (save these for later)(for mongodb connection string).
- Give the user Read and Write to any database.
4. Allow Network Access
- Go to Network Access (left menu).
- Click Add IP Address.
- Add your current IP address, or use 0.0.0.0/0 to allow all IPs (for development only).
5. Get Your MongoDB Connection String
- Go to Clusters > Connect > Connect your application.
- Copy the connection string that looks like:

mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority
- Replace <username>, <password>, and <dbname> with your actual database user and database name.

6. Configure Your .env File
- The connection string account and password are different from mongodb.com account and password.
- In your project’s backend folder, you’ll find a file named dot_env_example.
- Copy dot_env_example and rename the copy to .env.
- Open .env and paste your MongoDB connection string:

MONGODB_CONNECT_STRING=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority
- Never commit your .env file to Git or share it publicly.

#### Running the Project
Two terminals will be open to install and run frontend and backend app separately.

1. Install Dependencies
Backend<br>
cd backend<br>
Open a terminal (Command Prompt or PowerShell on Windows). Terminal right.<br>
npm install

Frontend<br>
cd ../frontend<br>
Open a terminal (Command Prompt or PowerShell on Windows). Terminal left.<br>
npm install

2. Start the Backend Server

cd ../backend<br>
npm start<br>
- This will connect your backend to MongoDB Atlas using the connection string in .env.<br>
View the backend website
- Open your web browser and go to https://localhost:3000

3. Start the Frontend React App

cd ../frontend<br>
npm start
- This will run the React frontend at http://localhost:8000.

Notes
- The MongoDB connection string is used by Node.js and Mongoose (your backend uses Mongoose to connect).
- The dot_env_example file is a template—always copy it to .env and fill in your real values.
- For security, never share your real .env file or credentials.
- Do not run npm init or delete/replace package.json. Just use the provided package.json and follow the steps above.


## Screenshots of Progress in Assignment Stages
[Assignment stage 1 (PNG)](docs/screenshots/assign_1.png)<br>
[Assignment stage 2 (PNG)](docs/screenshots/assign_2.png)<br>
[Assignment stage 3_1 (PNG)](docs/screenshots/assign_3_1.png)<br>
[Assignment stage 3_2 (PNG)](docs/screenshots/assign_3_2.png)<br>
[Assignment stage 4_1 (PNG)](docs/screenshots/assign_4_1.png)<br>
[Assignment stage 4_2 (PNG)](docs/screenshots/assign_4_2.png)<br>
[Assignment stage 4_3 (PNG)](docs/screenshots/assign_4_3.png)<br>
[Assignment stage 5_1 (PNG)](docs/screenshots/assign_5_1.png)<br>
[Assignment stage 5_2 (PNG)](docs/screenshots/assign_5_2.png)<br>
[Assignment stage 6_1 (PNG)](docs/screenshots/assign_6_1.png)<br>
[Assignment stage 6_2 (PNG)](docs/screenshots/assign_6_2.png)<br>
[Assignment stage 7_1 (PNG)](docs/screenshots/assign_7_1.png)<br>
[Assignment stage 8_1 (PNG)](docs/screenshots/assign_8_1.png)<br>


## GitHub Pages
Assignment 6 is the last full HTML webpage before converting to React<br>
https://luckygoldjade.github.io/html-to-fullstack-mern-project/Assignment_6-DOM_manipulation_with_Random_Staff/public/index.html

## What You Learned
Developed a full-stack JavaScript application using the MERN stack (MongoDB, Express, React, Node.js).

Gained hands-on experience with Mongoose to define schemas and perform CRUD operations on MongoDB data.

Learned how to structure REST APIs using Express to serve JSON data to the frontend.

Used React's map() function to render dynamic lists of products from backend data.

Understood how to separate concerns between frontend, backend, and database layers in a modular project.

Practiced environment-specific setup with isolated node_modules and package.json files per development stage.

Improved ability to debug and visualize data using tools like console.table() in Node.js.

Strengthened skills in using npm scripts for running, building, and testing applications.

Learned how to simulate a real-world data flow from MongoDB cluster to REST API to React component.




## Citation
This section is automatically generated by Create React App (CRA), a tool that sets up a React development environment with sensible defaults so you don’t have to configure things like Webpack, Babel, or ESLint manually.
Source URL: https://github.com/facebook/create-react-app.git


