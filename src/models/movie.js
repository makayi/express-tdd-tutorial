import mongoose from 'mongoose';

let movie= new mongoose.Schema({
    title:String,
    release_date:String,
    synopsis:String
})


module.exports = mongoose.model("Movie", movie);