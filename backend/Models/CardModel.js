let mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    id : {type : String, required : true, unique : true},
    title : {type : String, required : true},
    description : {type : String, required : true}
})

module.exports = mongoose.model('Card' ,Schema);