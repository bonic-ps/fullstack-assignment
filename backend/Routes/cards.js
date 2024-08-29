const express = require('express');
const CardModel = require('../Models/CardModel');
const cards = express.Router();


cards.get('/', async (req, res) => {
    try{
        const cards = await CardModel.find({})
        res.json({'message' : "trying to get all the cards", 'cards' : cards})
    }
    catch(err){
        res.json({'message' : "couldnt fetch all cards from db.", 'error' : err})
    }
})


cards.post('/', async (req, res) => {
    try{
        const { id, title, description } = req.body; 
        const card = await CardModel.create({id, title, description});
        const result = await card.save();
        res.json({'message' : "creating a new card..", 'created_card' : result})
    }
    catch(err){
        res.json({'message' : "couldnt create new card..", 'error' : err})
    }
})


cards.get('/:title', async (req, res) => {
    try{
        const title = req.params.title; console.log('the title is ', title)
        const card = await CardModel.findOne({title : title});
        card ? res.json({'message' : "trying to get one card..", 'card' : card}) 
             : res.json({'message' : "no match found.", 'card' : card}) 
    }
    catch(err){
        res.json({'message' : "couldnt get one card..", 'error' : err})
    }
})

module.exports = cards;