const mongoose = require('mongoose')
//creamos modelos o schemas

const charactersSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true 
    },
    age:{
        type:Number,
        required:true
    },
    isAlive: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("Characters", charactersSchema);