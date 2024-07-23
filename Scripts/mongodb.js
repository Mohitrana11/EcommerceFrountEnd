const mongoose =require('mongoose');
mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log('MongoDB connected!');
}) 
.catch((e)=>{
    console.log("failed to connect");
})
const logInSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const collection = new mongoose.model('UserData',logInSchema)
module.exports = collection;