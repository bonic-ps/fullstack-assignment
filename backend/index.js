const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const cards = require('./Routes/cards');
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING)
.then(success => {
    
    const app = express();  console.log('connected to the db')

    app.use(cors( { origin: process.env.DOMAIN } ));

    app.use(express.json());

    app.use('/cards', cards);

    app.get('/', (req, res) => {

        res.json({'message' : 'this is home page'})

    })

    app.listen(process.env.PORT, () => {
        console.log('server is running...')
    })

})


.catch(error => {
    console.log('couldnt connect to the db.')
})

