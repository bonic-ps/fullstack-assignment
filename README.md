# INSTRUCTIONS TO RUN THE PROJECT LOCALLY.
---
## **CLONE THE REPOSITORY**
git clone https://github.com/bonic-ps/fullstack-assignment
cd fullstack-assignment

## ** RUNNING THE SERVER**
1. INSIDE THE BACKEND FOLDER RUN THE COMMAND  ` npm install `
2. DEFINE ALL THE NECESSARY ENV VARIABLES IN THE .env FILE CREATED INSIDE THE BACKEND FOLDER IN THE GIVEN FORMAT BELOW.

    `PORT = 4000
    CONNECTION_STRING = "your mongodb connection string"
    DOMAIN = "http://localhost:3000" `


3. THEN RUN THE COMMAND TO START THE SERVER
 ` node index.js `

---

## ** RUNNING THE FRONTEND **
1. GO TO THE FRONTEND FOLDER AND RUN THE BELOW COMMAND TO INSTALL ALL THE REQUIRED PACKAGES.
 ` npm install `

2. UPDATE THE backend_url VALUE INSIDE THE 'utilityFunction.js' file LOCATED IN THE src FOLDER IN THE frontend FOLDER BASED ON THE SERVER URL SO THAT THE REACT APPLICATION CAN BE CONNECTED TO THE SERVER.

3. NAVIGATE TO THE src FOLDER AND THE RUN THE COMMAND TO START THE REACT APP.
 ` npm start `


## ** CREATING A NEW CARD ** 
1. Since no design specification is provided for card creation, The card creation is to be done using postman or thunderclient based on the schema as shown in the example below to the respective end point of the server.

`{
  "id" : 7,
  "title" : "Manage Billings",
  "description" : "change subsciptions and payment details."
}`
