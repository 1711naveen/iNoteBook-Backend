const mongoose = require('mongoose')
// const mongoURI = "mongodb+srv://naveen:saumya123@inotebook.xt53rrn.mongodb.net/?retryWrites=true&w=majority/iNoteBook"
// const mongoURI = "mongodb+srv://naveen:saumya@inotebook.xt53rrn.mongodb.net/"
// const mongoURI = "mongodb+srv://naveen:saumya@inotebook.xt53rrn.mongodb.net/iNoteBook?retryWrites=true&w=majority";
const mongoURI = "mongodb://127.0.0.1:27017/iNoteBook"; //local connected successfull

const connectToMongo = async()=>{
    await mongoose.connect(mongoURI);
    console.log("Connected to mongo succesfully")
}

module.exports = connectToMongo;